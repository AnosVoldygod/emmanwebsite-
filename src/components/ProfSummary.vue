<script setup>
const goToTroll = () => {
  window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
}
</script>

<template>
  <div>
    <h1>Profesional Summary</h1>
    <p>I am an engineer and I do engineering things!</p>
    <button class="btn" @click="goToTroll">Go on<br />Click me</button>
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
