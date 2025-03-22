<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../router/auth.js'

const router = useRouter()

const loginDetails = ref({
  username: '',
  password: '',
})

const loginAttempt = () => {
  if (loginDetails.value.username === 'emmanuel') {
    isAuthenticated.value = true
    router.push('/') // redirect to home
  }
}
</script>

<template>
  <header>
    <h1>This is the login page</h1>
  </header>

  <main>
    <form @submit.prevent="loginAttempt">
      <!-- container for the username and password elements -->
      <div class="login-container">
        <div class="row py-3">
          <div class="col">
            <label for="username" class="login-label col-2">Username: </label>
            <input
              type="text"
              class="login-control"
              id="username"
              v-model="loginDetails.username"
              required
            />
          </div>
        </div>
        <div class="row pb-3">
          <div class="col">
            <label for="password" class="login-label col-2">Password: </label>
            <input
              type="password"
              class="login-control"
              id="password"
              v-model="loginDetails.password"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary login-btn">Login</button>
      </div>
    </form>
  </main>
</template>

<style>
.login-container {
  color: grey;
}
</style>
