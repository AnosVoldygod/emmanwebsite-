<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../router/auth.js'

const router = useRouter()

const loginDetails = ref({
  password: '',
})

//Temporary validation method. Will be moved to back end
const loginAttempt = () => {
  /*If you are reading this, I am very aware that this is a poor and unsafe way to
    lock or guard your site. I just haven't yet learnt how to link local or back end yet...
    Please don't assume this is final!
  */
  if (loginDetails.value.password === 'emmanuel') {
    isAuthenticated.value = true
    router.push('/') // redirect to home
  }
}
</script>

<template>
  <header></header>

  <main>
    <form @submit.prevent="loginAttempt">
      <!-- container for the username and password elements -->
      <div class="login-container">
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
