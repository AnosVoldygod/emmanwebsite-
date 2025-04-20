<script setup>
import TopMainBar from './components/Banners/TopMainBar.vue'
import BottomBar from './components/Banners/BottomMainBar.vue'
</script>

<template>
  <div class="page">
    <header>
      <TopMainBar />
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
