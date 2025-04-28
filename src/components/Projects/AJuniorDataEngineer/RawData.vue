<script setup>
import { ref, onMounted, computed } from 'vue'
import db from '../../../firebase/init'
import { collection, query, where, getDocs } from 'firebase/firestore'

// --- Data
const humans = ref([])
const currentPage = ref(1)
const rowsPerPage = 10

// --- Fetching
const fetchData = async () => {
  try {
    const q = query(collection(db, 'raw_data'), where('id', '>', '0'))
    const querySnapshot = await getDocs(q)
    const humanArray = []
    querySnapshot.forEach((doc) => {
      humanArray.push({ id: doc.id, ...doc.data() })
    })
    humans.value = humanArray
  } catch (error) {
    alert('Failed to fetch data')
  }
}

onMounted(() => {
  fetchData()
})

// --- Filtering and Pagination
const filteredHumans = computed(() => {
  return humans.value
})

const paginatedHumans = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  return filteredHumans.value.slice(start, start + rowsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(filteredHumans.value.length / rowsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <div class="raw-data-wrapper">
    <h1>Raw Data</h1>

    <table>
      <thead>
        <tr>
          <!-- Headers manually specified, matching data structure -->
          <th>ID</th>
          <th>Country</th>
          <th>Year</th>
          <th>AgeGroup</th>
          <th>Gender</th>
          <th>SuicideRate</th>
          <th>MentalHealthFundingpercapita</th>
          <th>ReportedMentalHealthIssues100k</th>
          <th>EmploymentStatus</th>
          <th>Notes</th>
        </tr>
      </thead>

      <tbody>
        <!-- Loop through each row (human) and render it -->
        <tr v-for="(human, index) in paginatedHumans" :key="index">
          <td>{{ human.id }}</td>
          <td>{{ human.Country }}</td>
          <td>{{ human.Year }}</td>
          <td>{{ human.AgeGroup }}</td>
          <td>{{ human.Gender }}</td>
          <td>{{ human.SuicideRate }}</td>
          <td>{{ human.MentalHealthFundingpercapita }}</td>
          <td>{{ human.ReportedMentalHealthIssues100k }}</td>
          <td>{{ human.EmploymentStatus }}</td>
          <td>{{ human.Notes }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      Page {{ currentPage }} of {{ totalPages }}
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<style scoped>
.raw-data-wrapper {
  width: 100%;
  max-width: 1700px;
  margin: 2rem auto;
  padding: 1rem;
}

table {
  width: 100%;
  table-layout: fixed; /* FIXED WIDTH */
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.25rem;
  text-align: center;
  overflow-wrap: break-word;
  word-break: break-word;
}

thead {
  background-color: #928f8f;
}

.pagination {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
