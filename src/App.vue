<script setup>
import WelcomeSection from './components/WelcomeSection.vue'
import ProfSummary from './components/ProfSummary.vue'
</script>

<template>
  <header>
    <div class="row">
      <nav class="nav">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/info">Info</router-link> |
        <router-link to="/ForFun">For Fun</router-link>
        <router-link to="/Login">Login</router-link>
      </nav>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
