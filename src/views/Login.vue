<script setup>
import LoginComponent from '../components/LoginComp.vue'
import LoginMessage from '../components/LoginMessage.vue'
</script>

<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-message">
        <LoginMessage />
      </div>
      <div class="login-component">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>
<style>
.login-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.login-message {
  flex: 1;
  max-width: 100%;
}

.login-component {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
}

.login-page {
  min-height: calc(100vh - 100px); /* adjust if you have a header/footer */
  display: flex;
  justify-content: center;
  align-items: center; /* vertical centering */
}
</style>
