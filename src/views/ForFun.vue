<script setup>
import shakespeareInsults from '../components/ShakespeareInsult.vue'
</script>

<template>
  <header>
    <div class="projects">
      <h1 style="text-align: center">THINGS I'VE DONE IN MY SPARE TIME</h1>
    </div>
    <nav class="nav">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        id="dogButton"
        @click="$router.push('/ForFun/fosterdogs')"
      >
        Foster Dogs
      </button>
    </nav>
  </header>

  <main>
    <shakespeareInsults />
  </main>
</template>

<style>
#dogButton {
  color: antiquewhite;
  margin-bottom: 10px;
}
</style>
