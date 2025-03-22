<script setup>
import { ref } from 'vue'
let additionalPoints = ref(false)
const goToTroll = () => {
  window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
}
</script>

<template>
  <header>
    <div>
      <h1>Professional summary:</h1>
    </div>
  </header>

  <main>
    <div class="professionalSummary">
      <p>
        I am an engineer with a passion for technology and continuous learning. My strategic and
        analytical mindset, drawn from my love for chess and puzzles, drives my approach to
        problem-solving. I chose engineering for its logical foundations and the opportunity it
        provides for ongoing personal and professional development. Currently, I am pursuing a
        master’s in computer science with a specialization in Software Engineering, sparked by my
        growing interest in programming. My background includes mechanical and project experience,
        and I excel at communicating complex technical concepts to non-technical stakeholders,
        fostering strong relationships with clients along the way. I am always eager to explore new
        ideas and challenges, continuously seeking ways to grow and contribute meaningfully in my
        field.
      </p>
    </div>
    <button class="btn" @click="goToTroll">Bank Details</button>
  </main>
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
