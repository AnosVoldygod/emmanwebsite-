<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const emit = defineEmits(['toggleSidebar'])

const auth = getAuth()
const router = useRouter()
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out')
      localStorage.setItem('isLoggedIn', false)
      router.push('/login')
    })
    .catch((error) => {
      console.error('Sign-out error:', error)
    })
}
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
        <RouterLink class="nav-icon" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/ForFun">For Fun</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-icon" to="/login">Login</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-container {
  background-color: rgba(0, 0, 0, 0.766);
  box-shadow: 0px 5px 20px rgb(210, 37, 37);
}

.nav-list {
  padding: 0; /* Get rid of extra padding within the list */
  position: fixed;
  list-style: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 500px;
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
