<script setup>
import LoginComponent from '../components/Login/LoginComp.vue'
import LoginMessage from '../components/Login/LoginMessage.vue'
</script>

<template>
  <div class="login-wrapper">
    <div class="login-components">
      <div class="login-message">
        <LoginMessage />
      </div>
      <div class="login-component">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  border: 1px solid red;
}

.login-wrapper {
  display: grid;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.login-components {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
