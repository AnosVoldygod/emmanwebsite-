<template>
  <div class="project-summary">
    <h1 class="heading">Mental Health Data Engineering Project</h1>
    <p class="description">
      This project simulates a real-world data engineering workflow by exploring, cleaning, and
      modeling datasets related to suicide rates and potential influencing factors such as mental
      health funding, reported mental health issues, demographics, and employment status. The data
      is ingested and structured using PostgreSQL, with raw and transformed schemas enabling
      targeted analysis.
    </p>
    <p class="description">
      Using SQL joins, aggregation, and filtering, the project investigates the relationship between
      funding per capita and suicide rates—split by gender and region—while acknowledging the
      synthetic nature of the dataset. The backend is powered by Firebase Cloud Functions (v2) and
      exposed through a secure API, which is consumed by a Vue.js frontend for interactive
      visualization.
    </p>
    <p class="description">
      The goal is not to produce definitive insights, but to demonstrate proficiency across the full
      data pipeline—from ingestion and normalization to API integration and
      visualization—highlighting the engineering process behind data-driven applications.
    </p>

    <div class="file-grid">
      <div v-for="file in files" :key="file.name" class="file-box">
        <a :href="file.link" download>
          <div class="file-content">
            <h3>{{ file.name }}</h3>
            <p>Download CSV</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const files = [
  { name: 'suicide_rates.csv', link: '/csv/suicide_rates.csv' },
  { name: 'mental_health_funding.csv', link: '/csv/mental_health_funding.csv' },
  { name: 'reported_mental_health_issues.csv', link: '/csv/reported_mental_health_issues.csv' },
  { name: 'employment_status.csv', link: '/csv/employment_status.csv' },
  { name: 'demographics.csv', link: '/csv/demographics.csv' },
  { name: 'regional.csv', link: '/csv/regional.csv' },
]
</script>

<style scoped>
.project-summary {
  padding: 20px;
  font-family: Arial, sans-serif;

  margin: 0 auto;
}

.heading {
  font-size: 2rem;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.file-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.file-box {
  background: #f3f3f3;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  transition:
    background 0.3s,
    transform 0.2s;
  cursor: pointer;
}

.file-box:hover {
  background: #d3e0ea;
  transform: translateY(-2px);
}

.file-content h3 {
  margin: 0 0 10px 0;
  font-size: clamp(0.8rem, 3vw, 1.1rem); /* Responsive text size */
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
}

.file-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}
</style>
