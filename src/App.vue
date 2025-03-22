<script setup>
import Banner from './components/Banner.vue'
</script>

<template>
  <header>
    <container>
      <Banner />
    </container>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
