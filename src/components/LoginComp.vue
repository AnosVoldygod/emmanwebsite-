<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../router/auth.js'

const router = useRouter()

const loginDetails = ref({
  password: '',
})

let loginAttemptCount = 0

//Temporary validation method. Will be moved to back end
const loginAttempt = () => {
  /*If you are reading this, I am very aware that this is a poor and unsafe way to
    lock or guard your site. I just haven't yet learnt how to link local or back end yet...
    Please don't assume this is final!
  */
  if (loginDetails.value.password === 'emmanuel') {
    isAuthenticated.value = true
    router.push('/') // redirect to home
  } else if (loginAttemptCount == 0) {
    alert('Are you in the right place?')
    loginDetails.value.password = ''
    loginAttemptCount += 1
  } else if (loginAttemptCount == 1) {
    loginAttemptCount += 1
    alert('Plz stap')
    loginDetails.value.password = ''
  } else {
    loginDetails.value.password = ''
    alert('I did ask you to stop...')
    location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
  }
}

const forgotPassword = () => {
  alert("You definitely shouldn't be here if you expect this to actually do something...")
}
</script>

<template>
  <form @submit.prevent="loginAttempt">
    <div class="login-container">
      <div class="input-row">
        <label for="password" class="login-label">Password:</label>
        <div class="login-input">
          <input
            type="password"
            class="login-control"
            id="password"
            v-model="loginDetails.password"
            required
          />
          <p class="forgot-password" @click="forgotPassword">Forgot Password?</p>
        </div>
      </div>
      <div class="button-row">
        <button type="submit" class="login-btn">Login</button>
      </div>
    </div>
  </form>
</template>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-row {
  display: flex;
  align-items: flex-start;
}

.login-label {
  font-size: 30px;
  font-weight: bold;
}

.forgot-password {
  color: rgb(122, 122, 245);
  text-decoration: underline;
  cursor: pointer;
  padding-top: 5px;
}

.login-btn {
  background-color: black;
  color: white;
  width: 75px;
  padding: 5px 0px 5px 0px; /*top, right, bottom, left*/
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
}

.login-container .button-row {
  align-self: flex-end;
  padding-right: 100px;
}

.login-control {
  width: 275px;
  height: 40px;
}
</style>
