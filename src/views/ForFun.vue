<script setup>
import shakespeareInsults from '../components/ShakespeareInsult.vue'
import ViewBanner from '../components/ViewBanner.vue'
import { ref } from 'vue'
</script>

<template>
  <header>
    <ViewBanner />
  </header>

  <main>
    <shakespeareInsults />
  </main>
</template>
