<script setup>
import WelcomeSection from './components/WelcomeSection.vue'
import ProfSummary from './components/ProfSummary.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <WelcomeSection username="Emmanuel Berkowicz" />
      <ProfSummary />

      <nav class="nav">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/info">Info</router-link> |
        <router-link to="/ForFun">For Fun</router-link>
      </nav>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
