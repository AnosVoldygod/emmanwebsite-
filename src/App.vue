<script setup>
import './assets/main.css'
import MainBanner from './components/MainBanner.vue'
import BottomBar from './components/BottomBar.vue'
</script>

<template>
  <div class="page">
    <header>
      <MainBanner />
    </header>

    <main class="content">
      <router-view />
    </main>

    <footer>
      <BottomBar />
    </footer>
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
