<script setup>
import AJuniorDataEngineerView from './nested/AJuniorDataEngineerView.vue'
</script>

<template>
  <div class="project-wrapper">
    <h1 class="project-title">My Projects</h1>
    <div class="project-list-container">
      <!-- Project A: Data Engineering -->
      <router-link to="/projects/dataEngineerProjectA" class="project-card">
        <div class="card-content">
          <h2>Mental Health Data Engineering Project</h2>
        </div>
      </router-link>

      <!-- Project B: Handicap Help Australia Website -->
      <a
        href="https://ito5032-a3-bfv.pages.dev/"
        target="_blank"
        rel="noopener"
        class="project-card"
      >
        <div class="card-content">
          <h2>Handicap Help Australia</h2>
          <p style="text-align: left; color: #333; padding: 5px">
            L: admin@hchau.com.au<br />
            P: Password1@
          </p>
        </div>
        s
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-wrapper {
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #000000, #333232);
  min-height: 100%;
  letter-spacing: 2px;
}

.project-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: antiquewhite;
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
}

.project-list-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.project-card {
  width: 250px;
  height: 250px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
  background: #d3e0ea;
}

.card-content h2 {
  color: #333;
  font-size: 1.2rem;
  padding: 10px;
}
</style>
