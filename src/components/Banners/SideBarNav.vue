<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['toggleSidebar'], ['logout'])
onMounted(() => {
  loginStatus.value = localStorage.getItem('isLoggedIn') === 'true'
})
const loginStatus = ref(false)
</script>

<template>
  <nav class="nav-container">
    <ul class="nav-list">
      <li class="nav-item" @click="emit('toggleSidebar')">
        <div class="nav-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </div>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/about" @click="emit('toggleSidebar')">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/Projects" @click="emit('toggleSidebar')"
          >Projects</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/hobbies" @click="emit('toggleSidebar')"
          >Hobbies</RouterLink
        >
      </li>
      <li class="nav-item" v-if="!loginStatus">
        <RouterLink class="nav-icon" to="/login">Login</RouterLink>
      </li>
      <li class="nav-item" @click="emit('logout')" v-if="loginStatus">
        <RouterLink class="nav-icon" to="/login">Logout</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-container {
  box-shadow: 0px 5px 20px rgb(210, 37, 37);
}

.nav-list {
  padding: 0; /* Get rid of extra padding within the list */
  position: fixed;
  list-style: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.766);
  box-shadow: 0px 5px 20px rgb(210, 37, 37);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  backdrop-filter: blur(5px);
}

.nav-item {
  height: 50px;
  width: 100%;
}

.nav-item:hover {
  background-color: rgba(47, 100, 173, 0.721);
}

.nav-item:first-child {
  margin-right: auto;
}

.nav-icon {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 30px 0px 30px;
  color: aliceblue;
  text-decoration: none;
}
</style>
