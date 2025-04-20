<script setup>
import './assets/main.css'
import MainBanner from './components/Banners/MainBanner.vue'
import BottomBar from './components/Banners/BottomBar.vue'
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
  display: grid;
  grid-template-rows: auto 1fr auto;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* This makes the element take up the entire screen */
}
</style>
