<script setup>
import ProjectIntroduction from '../components/Projects/AJuniorDataEngineer/ProjectIntroduction.vue'
import RawData from '../components/Projects/AJuniorDataEngineer/RawData.vue'
import CleanData from '../components/Projects/AJuniorDataEngineer/CleanData.vue'
import ProjectConclusion from '../components/Projects/AJuniorDataEngineer/ProjectConclusion.vue'
</script>

<template>
  <div class="project-wrapper">
    <div class="project-introduction-container">
      <ProjectIntroduction />
    </div>
    <div class="raw-data-container">
      <RawData />
    </div>
    <div class="clean-data-container">
      <CleanData />
    </div>
    <div class="conclusion-container">
      <ProjectConclusion />
    </div>
  </div>
</template>

<style scoped>
.project-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(135deg, #000000, #333232);
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
}
</style>
