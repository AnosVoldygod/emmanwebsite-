<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import SideBarNav from './SideBarNav.vue'

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
const displaySidebar = ref(false)

const toggleSidebar = () => {
  displaySidebar.value = !displaySidebar.value
}
</script>

<template>
  <nav class="nav-container">
    <nav v-if="displaySidebar" class="side-bar-nav">
      <SideBarNav @toggleSidebar="toggleSidebar" />
    </nav>
    <ul class="nav-list">
      <li @click="toggleSidebar()" class="nav-item">
        <div class="nav-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
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

/* .side-bar-nav {
  display: flex;
} */

.nav-list {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
}

.nav-item {
  height: 50px;
}

.nav-item:hover {
  background-color: rgba(47, 100, 173, 0.721);
}

.nav-item:first-child {
  margin-right: auto;
}

.nav-icon {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 30px 0px 30px;
  color: aliceblue;
  text-decoration: none;
}
</style>
