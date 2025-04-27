<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('kyurithesaiyan94@gmail.com')
const password = ref('')
const router = useRouter()
const errorMessage = ref('')
const successMessage = ref('')
const showPopup = ref(false)

const closePopup = () => {
  successMessage.value = ''
  errorMessage.value = ''
  showPopup.value = false
}

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      successMessage.value = 'Welcome! =D'
      errorMessage.value = ''
      showPopup.value = true
      localStorage.setItem('isLoggedIn', 'true')
      setTimeout(() => (window.location.href = '/'), 1500)
    })
    .catch((error) => {
      console.error(error)
      errorMessage.value = 'INCORRECT PASSWORD!'
      successMessage.value = ''
      showPopup.value = true
    })
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-content">
      <h1 class="login-heading">LOGIN FIELD:</h1>
      <p class="login-paragraph">
        Enter the given password located under the web-url on the resume
      </p>
      <div v-if="showPopup" class="popup-overlay">
        <div class="popup-box">
          <button class="popup-close" @click="closePopup">X</button>
          <p v-if="successMessage" class="popup-success">{{ successMessage }}</p>
          <p v-if="errorMessage" class="popup-error">{{ errorMessage }}</p>
        </div>
      </div>

      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-content {
  background: #9e9f9c47;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(85, 86, 105, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #b8adad;
  font-size: 1rem;
  outline: none;
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
.login-heading {
  font-size: clamp(1rem, 5vw, 2.5rem);
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
}

.login-paragraph {
  font-size: clamp(0.5rem, 5vw, 1rem);
  color: rgb(238, 209, 209);
  letter-spacing: 2px;
  text-align: left;
}
input,
button {
  border: none;
  outline: none;
  background-clip: padding-box;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

button {
  width: 100%;
  padding: 0.8rem 1rem;
  background: linear-gradient(135deg, #a8a9ae, #454248);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: rgba(209, 55, 55, 0.338);
  transform: scale(1.05);
}

/* Popup message on incorrect and correct password attempt */

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-box {
  background: #4d2d2dce;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  position: relative;
  max-width: 300px;
  width: 50%;
  text-align: center;
}

.popup-close {
  background: transparent;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  padding: 0;
}

.popup-success {
  color: #4fffa2;
  font-weight: bold;
  font-size: 1.2rem;
}

.popup-error {
  color: #ac2729;
  font-weight: bold;
  font-size: 1.1rem;
}

@media (max-width: 965px) {
  .login-content {
    padding: 0.5rem 1rem 0.5rem 1rem;
    gap: 0.5rem;
  }
}
</style>
