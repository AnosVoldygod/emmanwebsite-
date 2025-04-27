<script setup>
import TopMainBar from './components/Banners/TopMainBar.vue'
import BottomBar from './components/Banners/BottomMainBar.vue'
</script>

<template>
  <div class="page">
    <div class="top-bar"><TopMainBar /></div>

    <div class="content">
      <router-view />
    </div>

    <div class="bottom-bar">
      <BottomBar />
    </div>
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.top-bar {
  position: fixed;
  height: 50px;
  width: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0);
}

.content {
  padding-top: 50px; /* top bar */
  padding-bottom: 30px; /* bottom bar */
  min-height: 100vh;
  box-sizing: border-box;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  box-sizing: border-box;
}
</style>
