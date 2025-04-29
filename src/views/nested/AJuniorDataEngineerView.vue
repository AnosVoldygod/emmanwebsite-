<script setup>
import ProjectIntroduction from '../../components/Projects/AJuniorDataEngineer/ProjectIntroduction.vue'
import Conclusion from '../../components/Projects/AJuniorDataEngineer/Conclusion.vue'
import Normalization from '../../components/Projects/AJuniorDataEngineer/Normalization.vue'
import DataBaseOverview from '../../components/Projects/AJuniorDataEngineer/DataBaseOverview.vue'
</script>

<template>
  <div class="project-wrapper">
    <div class="project-introduction-container">
      <ProjectIntroduction />
    </div>
    <div class="raw-data-container">
      <Normalization />
    </div>
    <div class="clean-data-container">
      <DataBaseOverview />
    </div>
    <div class="conclusion-container">
      <Conclusion />
    </div>
  </div>
</template>

<style scoped>
.project-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000000, #333232);
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
  padding-bottom: 30px;
}
</style>
