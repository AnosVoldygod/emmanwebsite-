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
  <form @submit.prevent="loginAttempt">
    <div class="login-container">
      <div class="input-row">
        <label for="password" class="login-label">Password:</label>
        <div class="input-column">
          <input
            type="password"
            class="login-control"
            id="password"
            v-model="loginDetails.password"
            required
          />
          <p class="forgot-text">Forgot Password?</p>
        </div>
      </div>
    </div>

    <div class="button-row">
      <button type="submit" class="btn btn-primary login-btn">Login</button>
    </div>
  </form>
</template>

<style>
.input-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.login-label {
  padding-top: 6px;
}
</style>
