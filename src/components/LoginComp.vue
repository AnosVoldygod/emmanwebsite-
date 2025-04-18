<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('kyurithesaiyan94@gmail.com')
const password = ref('')
const router = useRouter()

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      alert('Welcome! =D')
      localStorage.setItem('isLoggedIn', 'true') // must be a string
      router.push('/')
    })
    .catch((error) => {
      console.error(error)
      alert('Incorrect password')
    })
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-content">
      <h1 class="login-heading">LOGIN</h1>
      <input v-model="password" type="password" placeholder="password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>
