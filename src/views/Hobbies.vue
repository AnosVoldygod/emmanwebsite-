<script setup>
import shakespeareInsults from '../components/ShakespeareInsult.vue'

import { ref } from 'vue'
</script>

<template>
  <header></header>

  <main>
    <div class="shakespeare-container">
      <shakespeareInsults />
    </div>
  </main>
</template>

<style scoped>
.shakespeare-container {
  min-height: calc(100vh - 80px);
  background: linear-gradient(135deg, #000000, #333232);
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
}
</style>
