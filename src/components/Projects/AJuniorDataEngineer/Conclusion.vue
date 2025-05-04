<template>
  <div class="p-4 font-sans">
    <h1 class="text-2xl font-bold mb-4">Joined Suicide & Funding Data</h1>
    <div v-if="loading">Loading data...</div>
    <div v-else>
      <table class="w-full border-collapse mb-4">
        <thead class="bg-gray-200">
          <tr>
            <th class="border p-2">Year</th>
            <th class="border p-2">Location</th>
            <th class="border p-2">Age Group</th>
            <th class="border p-2">Gender</th>
            <th class="border p-2">Funding per Capita</th>
            <th class="border p-2">Suicide Rate</th>
            <th class="border p-2">Employment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in paginatedData" :key="rowIndex(row)">
            <td class="border p-2">{{ row.year }}</td>
            <td class="border p-2">{{ row.location }}</td>
            <td class="border p-2">{{ row.age_group }}</td>
            <td class="border p-2">{{ row.gender }}</td>
            <td class="border p-2">{{ row.funding_per_capita }}</td>
            <td class="border p-2">{{ row.suicide_rate }}</td>
            <td class="border p-2">{{ row.employment_status }}</td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-between items-center">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {{ page }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="page === totalPages"
          class="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const data = ref([])
const loading = ref(true)
const page = ref(1)
const rowsPerPage = 15

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://australia-southeast1-emmanuelberkowiczwebsite.cloudfunctions.net/getJoinedSuicideFundingData',
    )
    data.value = response.data
  } catch (err) {
    console.error('Error fetching data:', err)
  } finally {
    loading.value = false
  }
})

const totalPages = computed(() => Math.ceil(data.value.length / rowsPerPage))

const paginatedData = computed(() => {
  const start = (page.value - 1) * rowsPerPage
  return data.value.slice(start, start + rowsPerPage)
})

const nextPage = () => {
  if (page.value < totalPages.value) page.value++
}

const prevPage = () => {
  if (page.value > 1) page.value--
}

const rowIndex = (row) =>
  `${row.year}-${row.location}-${row.age_group}-${row.gender}-${row.funding_per_capita}`
</script>
