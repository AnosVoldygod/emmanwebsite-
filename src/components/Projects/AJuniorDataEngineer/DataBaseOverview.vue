<template>
  <div class="data-validation">
    <h1 class="heading">Data Quality Evaluation & SQL Join Limitation</h1>

    <p class="description">
      In an attempt to explore a potential link between mental health funding per capita and suicide
      rates, I joined the <code>suicide_rates</code> and <code>mental_health_funding</code> datasets
      using the following SQL command:
    </p>

    <pre class="code-block">
<code>
SELECT
  f.year,
  f.location,
  s.age_group,
  s.gender,
  f.funding_per_capita,
  s.suicide_rate,
  s.employment_status
FROM
  mental_health_analysis_raw_data.mental_health_funding f
JOIN
  mental_health_analysis_raw_data.suicide_rates s
  ON f.year = s.year AND f.location = s.location
ORDER BY f.year;
</code>
    </pre>

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

    <p class="description">
      However, upon inspection of the resulting table, inconsistencies became apparent. For example,
      two records may share the same <code>year</code>, <code>location</code>,
      <code>age_group</code>, and <code>gender</code> effectively a simplified compound key yet
      report different <code>funding_per_capita</code> values despite having identical
      <code>suicide_rate</code> entries. This clearly violates logical expectations, as funding per
      capita should be constant across a given region and year.
    </p>

    <p class="description">
      This suggests a flaw in the AI-generated data. In a real-world scenario, I would begin by
      auditing each data transformation step to rule out processing errors on my end. If my process
      was sound, I would escalate the issue for clarification particularly checking:
    </p>

    <ul class="points">
      <li>Whether the original dataset had finer granularity (e.g., smaller age group ranges),</li>
      <li>Whether rows were mistakenly duplicated or misaligned during aggregation.</li>
    </ul>

    <p class="description">
      If no corrections were possible, I would propose averaging the
      <code>funding_per_capita</code> for each <code>(year, location)</code> pair prior to the join.
      This approach would allow further exploratory analysis while maintaining data integrity.
    </p>
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

<style scoped>
.data-validation {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.heading {
  font-size: 2rem;
  margin-bottom: 20px;
}
.description {
  margin-bottom: 20px;
}
.code-block {
  background-color: #f7f7f7;
  color: black;
  border-left: 4px solid #888;
  padding: 12px;
  margin-bottom: 20px;
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  white-space: pre;
}
.points {
  margin-left: 20px;
  margin-bottom: 20px;
}
.points li {
  margin-bottom: 10px;
}
</style>
