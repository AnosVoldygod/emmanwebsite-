<template>
  <div class="normalization">
    <h1 class="heading">Normalization: First Normal Form (1NF)</h1>
    <p class="description">
      First Normal Form (1NF) is the foundational step of database normalization. It ensures that:
    </p>
    <ul class="points">
      <li>Each table has a primary key that uniquely identifies each row.</li>
      <li>Each column contains only atomic (indivisible) values.</li>
      <li>There are no repeating groups or arrays within a table.</li>
    </ul>

    <h2 class="subheading">Application to Project Data</h2>
    <p class="description">
      For the mental health analysis project, each dataset was reviewed to comply with 1NF by:
    </p>
    <ul class="points">
      <li>Ensuring each record (row) is uniquely identifiable using primary keys (e.g., IDs).</li>
      <li>Splitting multi-valued fields into separate records where necessary.</li>
      <li>
        Standardizing the format of gender, employment status, and location fields to single values
        per cell.
      </li>
      <li>Guaranteeing that each table structure is organized around single facts per column.</li>
    </ul>

    <p class="description">As a result, the following core tables were structured in 1NF:</p>
    <ul class="tables-list">
      <li>suicide_rates</li>
      <li>mental_health_funding</li>
      <li>reported_mental_health_issues</li>
      <li>employment_status</li>
      <li>demographics</li>
      <li>regional_data</li>
    </ul>

    <h2 class="subheading">Example: 1NF Table Structure</h2>
    <table class="example-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Age Group</th>
          <th>Gender</th>
          <th>Suicide Rate</th>
          <th>Location</th>
          <th>Employment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2020</td>
          <td>B (21-30)</td>
          <td>m</td>
          <td>12.5</td>
          <td>New South Wales</td>
          <td>Employed</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2020</td>
          <td>B (21-30)</td>
          <td>f</td>
          <td>10.8</td>
          <td>Victoria</td>
          <td>Student</td>
        </tr>
      </tbody>
    </table>

    <p>Note: The age groups have been given keys which will be linked in a sep table</p>

    <h2 class="subheading">Next Steps</h2>
    <p class="description">
      Work on applying Second Normal Form (2NF) and Third Normal Form (3NF) is currently in progress
      to further optimize the database design by eliminating partial and transitive dependencies.
    </p>
  </div>
</template>

<script setup>
// No script logic needed for static display
</script>

<style scoped>
.normalization {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.heading {
  font-size: 2rem;
  margin-bottom: 10px;
}
.subheading {
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
}
.description {
  margin-bottom: 20px;
}
.points,
.tables-list {
  margin-left: 20px;
  margin-bottom: 20px;
}
.points li,
.tables-list li {
  margin-bottom: 10px;
}
.example-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}
.example-table th,
.example-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
.example-table th {
  background-color: #f0f0f0;
}
</style>
