<template>
  <div class="home-wrapper">
    <h1 class="home-title">Home Page In Progress!</h1>
    <p class="home-subtext">
      I think you would be more interested in the
      <router-link to="/projects" class="link-flash">Project Page</router-link> =D
    </p>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: linear-gradient(135deg, #000000, #333232);
  min-height: calc(100vh - 80px);
  min-width: 100vw;
}

.home-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff4757;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  animation: pulse 3s infinite;
}

.home-subtext {
  font-size: 1.5rem;
}

.link-flash {
  color: #1e90ff;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.3s;
}

.link-flash:hover {
  color: #70a1ff;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
