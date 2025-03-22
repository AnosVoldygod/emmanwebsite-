<script setup>
import MainBanner from './components/MainBanner.vue'
</script>

<template>
  <header>
    <container>
      <MainBanner />
    </container>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
