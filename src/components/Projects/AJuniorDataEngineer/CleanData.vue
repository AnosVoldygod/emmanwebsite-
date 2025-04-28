<script setup>
import { ref, onMounted, computed } from 'vue'
import db from '../../../firebase/init'
import { collection, query, where, getDocs } from 'firebase/firestore'

// --- Data
const humans = ref([]) // Data for humans
const currentPage = ref(1)
const rowsPerPage = 10

// Suicide Data stats (min, max, avg)
const minSuicideRate = ref(Infinity)
const maxSuicideRate = ref(-Infinity)
const averageSuicideRate = ref(0)
const totalSuicideRate = ref(0)
let suicideCounter = 0

// Mental Health Funding

const minMentalHealthFunding = ref(0)
const maxMentalHealthFunding = ref(0)
const avgMentalHealthFunding = ref(0)
const totalMentalHealthFunding = ref(0)
let mentalHealthFundingCounter = 0

//Reported mental health issues

const maxReportedMentalHealthIssues = ref(0)
const minReportedMentalHealthIssues = ref(0)
const avgReportedMentalHealthIssues = ref(0)
const totalReportedMentalHealthIssues = ref(0)
let reportedMentalHealthIssuesCounter = 0

// --- Fetching Data from Firebase
const fetchData = async () => {
  try {
    const q = query(collection(db, 'raw_data'), where('id', '>', '0'))
    const querySnapshot = await getDocs(q)
    const humanArray = []

    // Loop through the data and normalize
    querySnapshot.forEach((doc, index) => {
      const data = { id: doc.id, ...doc.data() }

      // Clean Gender to lowercase
      data.Gender = data.Gender?.toLowerCase()

      // Remove data if the Year is out of the range
      if (Number(data.Year) < 2020 || Number(data.Year) > 2022) {
        return // Skip this entry
      }

      // Default 'NO NOTE' where there are no notes
      if (data.Notes === '') {
        data.Notes = 'NO NOTE'
      }

      // Track SuicideRate statistics
      const suicideRate = Number(data.SuicideRate)

      // Calculate Min, Max, and Total for average
      if (suicideRate < minSuicideRate.value) minSuicideRate.value = suicideRate
      if (suicideRate > maxSuicideRate.value) maxSuicideRate.value = suicideRate
      totalSuicideRate.value += suicideRate
      suicideCounter++
      averageSuicideRate.value = totalSuicideRate.value / suicideCounter

      //

      humanArray.push(data)
    })
    humans.value = humanArray
  } catch (error) {
    alert('Failed to fetch data')
  }
}

onMounted(() => {
  fetchData()
})

// --- Filtering and Normalizing Data
const filteredHumans = computed(() => {
  return humans.value
})

// --- Pagination
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
    <h1 class="clean-data-title">Clean Data</h1>
    <h5 class="norm-steps">Normalization steps:</h5>
    <ul>
      <li>Remove country: Data is Australian, redundant to keep record of Au for each.</li>
      <li>Gender: All entries changed to lower case.</li>
      <li>Notes: 'NO NOTE' added where there was no data entry.</li>
      <li>
        Suicide Rates: Calculated min, max and average to determine range and potential outliers.
      </li>
    </ul>

    <!-- Display Min, Max, and Average of SuicideRate -->
    <div class="stat-container-all">
      <div class="stats-container">
        <h4>Suicide Rate Stats (Per 100k)</h4>
        <p><strong>Min Suicide Rate:</strong> {{ minSuicideRate }}</p>
        <p><strong>Max Suicide Rate:</strong> {{ maxSuicideRate }}</p>
        <p><strong>Average Suicide Rate:</strong> {{ averageSuicideRate.toFixed(2) }}</p>
      </div>
      <div class="stats-container">
        <h4>Mental Health Funding per Capita</h4>
        <p><strong>Min Suicide Rate:</strong> {{ minSuicideRate }}</p>
        <p><strong>Max Suicide Rate:</strong> {{ maxSuicideRate }}</p>
        <p><strong>Average Suicide Rate:</strong> {{ averageSuicideRate.toFixed(2) }}</p>
      </div>
      <div class="stats-container">
        <h4>Reported Mental Health Issues 100k</h4>
        <p><strong>Min Suicide Rate:</strong> {{ minSuicideRate }}</p>
        <p><strong>Max Suicide Rate:</strong> {{ maxSuicideRate }}</p>
        <p><strong>Average Suicide Rate:</strong> {{ averageSuicideRate.toFixed(2) }}</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
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
        <tr v-for="(human, index) in paginatedHumans" :key="index">
          <td>{{ human.id }}</td>
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
  table-layout: fixed;
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

.stat-container-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Styling for the stats window */
.stats-container {
  margin-top: 1rem;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 25vw;
  color: rgb(65, 36, 14);
}

h4 {
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin: 5px 0;
}
</style>
