<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
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
  <header>
    <div>
      <div class="nav-bar-wrapper">
        <div class="nav-bar">
          <div class="nav-item-left">
            <nav class="nav-item">
              <router-link to="/">Home</router-link>
            </nav>
            <nav class="nav-item">
              <router-link to="/about">About</router-link>
            </nav>
            <nav class="nav-item">
              <router-link to="/ForFun">For Fun</router-link>
            </nav>
          </div>
          <div class="nav-item-right">
            <nav class="nav-item">
              <router-link to="/Login">Login</router-link>
            </nav>
            <div class="nav-item">
              <button @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.nav-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* FLEX DISPLAY FOR BOTH LHS AND RHS OF THE NAVBAR */
.nav-item-left,
.nav-item-right {
  display: flex;
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.nav-item {
  background-color: red;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
}
</style>
