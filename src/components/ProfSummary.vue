<script setup>
import { ref } from 'vue'
let additionalPoints = ref(false)
const goToTroll = () => {
  window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
}
</script>

<template>
  <div>
    <h1>Professional Summary</h1>
    <p>I am an engineer and I do engineering things!</p>
    <button class="btn" @click="goToTroll">Go on<br />Click me</button>

    <!-- <button class="btn" style="margin: 0.25cm" @click="additionalPoints = !additionalPoints">
      Point<br />Toggle
    </button>
  </div>
  <div class="points" v-if="additionalPoints">
    <h2>Additional Things</h2>
    <p>Here I will post some other things?</p>
    <ul>
      <li>1. The thing</li>
      <li>2. The thing</li>
      <li>3. The thing</li>
      <li>4. The thing</li>
      <li>5. The thing</li>
    </ul>
  </div> -->
  </div>
</template>

<style scoped>
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 10px;
  font-size: 14px;
  background-color: rgb(157, 23, 23);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}
</style>
