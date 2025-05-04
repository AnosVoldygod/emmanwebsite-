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
// No dynamic script logic required
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
  overflow-x: auto;
  margin-bottom: 20px;
  width: 30vw;
}
.points {
  margin-left: 20px;
  margin-bottom: 20px;
}
.points li {
  margin-bottom: 10px;
}
</style>
