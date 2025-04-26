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
      <li class="nav-item text-heading">
        <RouterLink class="fancy-text" to="/"> Emmanuel Berkowicz </RouterLink>
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
  display: none;
}
.nav-item:nth-child(2) {
  margin-left: 20px; /* same as burger padding */
  margin-right: auto;
  white-space: nowrap;
}

.nav-icon {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(5px, 1vw, 30px);
  width: clamp(50px, 10vw, 250px);
  color: rgb(171, 182, 190);
  text-decoration: none;
  font-size: clamp(1rem, 2vw, 1.5rem);
}

/* Fancy name shizzel sticks */

.text-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fancy-text {
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #bbb, #ddd, #bbb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: textGlow 5s ease infinite alternate;
  text-align: center;
  padding: 0;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

@keyframes textGlow {
  0% {
    text-shadow:
      0 0 1px #ccc,
      0 0 2px #ccc;
  }
  100% {
    text-shadow:
      0 0 3px #ddd,
      0 0 6px #ddd;
  }
}

/* CONDITIONAL FORMATING FOR WHEN MEDIA SCREEN IS AT DIFF SIZES BELLOW MY PROGRAMMER SIR */

@media (max-width: 800px) {
  .nav-list {
    justify-content: flex-start;
  }
  .nav-item:first-child {
    display: flex;
  }

  .nav-item:nth-child(2) {
    white-space: nowrap;
  }

  .nav-item:nth-child(n + 3) {
    display: none;
  }
}
</style>
