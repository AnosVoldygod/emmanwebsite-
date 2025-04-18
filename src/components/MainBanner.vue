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
      <div class="bannerContainer">
        <div class="bannerHeading"><h1>Emmanuel Berkowicz</h1></div>
        <div class="navigationBar">
          <nav>
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/ForFun">For Fun</router-link>
            | <router-link to="/Login">Login</router-link>
          </nav>
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.bannerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bannerHeading {
  font-family: 'Times New Roman';

  color: rgb(38, 156, 117);
}

.navigationBar {
  padding-right: 12px;
}
</style>
