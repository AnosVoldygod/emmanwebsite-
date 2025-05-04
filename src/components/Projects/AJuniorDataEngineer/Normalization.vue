<template>
  <div class="workflow">
    <h2 class="subheading">Project Workflow</h2>
    <ol class="workflow-list">
      <li>
        Defined the project objective: to investigate potential links between suicide rates and
        influencing factors such as mental health funding, gender, and age demographics.
      </li>
      <li>
        Used AI-assisted generation to simulate realistic datasets aligned with the project's scope.
      </li>
      <li>
        Reviewed and cleaned the raw data, standardizing field names (e.g.,
        <code>location</code> vs. <code>region</code>) for consistency across all datasets.
      </li>
      <li>
        Set up a PostgreSQL instance on Google Cloud and connected it to pgAdmin for remote database
        management.
      </li>
      <li>
        Uploaded cleaned datasets to the cloud database and organized them into a structured schema.
      </li>
      <li>
        Wrote and tested SQL queries (joins, filters, aggregations) to examine patterns—such as
        gender-based differences in suicide rates and correlations with mental health funding over
        time and by location.
      </li>
      <li>
        Deployed a Firebase Cloud Function (v2) to securely query the PostgreSQL database and serve
        data to the frontend via API.
      </li>
      <li>
        Integrated the function into a Vue.js web application, enabling interactive visualization of
        the data and exploration of potential trends.
      </li>
      <li>
        Assessed the findings and documented that, while the dataset is synthetic and not strongly
        correlated, the project effectively demonstrates the technical workflow of a full data
        engineering pipeline.
      </li>
    </ol>
  </div>
</template>

<script setup>
// No script logic needed for static display
</script>

<style scoped>
.workflow {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.subheading {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
}
.workflow-list {
  margin-left: 20px;
  margin-bottom: 20px;
}
.workflow-list li {
  margin-bottom: 15px;
  line-height: 1.6;
}
</style>
