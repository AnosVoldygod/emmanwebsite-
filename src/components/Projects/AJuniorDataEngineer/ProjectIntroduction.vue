<template>
  <div class="project-summary">
    <h1 class="heading">Mental Health Data Analysis Project</h1>
    <p class="description">
      This project explores, cleans, normalizes, and models datasets related to suicide rates and
      potential influencing factors including mental health funding, reported mental health issues,
      age groups, employment status, and demographics. Using PostgreSQL, the data is structured into
      a relational model to enable deeper trend analysis and correlation studies. The aim is to
      build a robust database that supports meaningful insights into how different social, economic,
      and demographic variables potentially impact suicide rates across different regions and time
      periods.
    </p>
    <p class="description">
      The project includes creating normalized database tables, setting up relationships through
      primary and foreign keys, cleaning data to ensure consistency and accuracy, and preparing for
      advanced querying and visual analysis.
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
  { name: 'suicide_rates.csv', link: 'src/assets/csv/suicide_rates_data.csv' },
  { name: 'mental_health_funding.csv', link: 'src/assets/csv/mental_health_funding.csv' },
  {
    name: 'reported_mental_health_issues.csv',
    link: 'src/assets/csv/reported_mental_health_issues.csv',
  },
  { name: 'employment_status.csv', link: 'src/assets/csv/employment_status.csv' },
  { name: 'demographics.csv', link: 'src/assets/csv/demographics.csv' },
  { name: 'regional.csv', link: 'src/assets/csv/regional.csv' },
]
</script>

<style scoped>
.project-summary {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.heading {
  font-size: 2rem;
  margin-bottom: 10px;
}
.description {
  margin-bottom: 20px;
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
  transition: background 0.3s;
}
.file-box:hover {
  background: #d3e0ea;
}
.file-content h3 {
  margin: 0 0 10px 0;
  font-size: 14px;
}
.file-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}
</style>
