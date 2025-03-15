<script setup>
import shakespeareInsults from '../components/ShakespeareInsult.vue'
</script>

<template>
  <header>
    <div class="projects">
      <h1 style="text-align: center">THINGS I'VE DONE IN MY SPARE TIME</h1>
    </div>
    <nav class="nav">
      <router-link to="/ForFun/FosterDogs">FosterDogs</router-link>
    </nav>
  </header>

  <main>
    <shakespeareInsults />
  </main>
</template>
