<script setup>
import LoginComponent from '../components/Login/LoginComp.vue'
import LoginMessage from '../components/Login/LoginMessage.vue'
</script>

<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-message">
        <LoginMessage />
      </div>
      <div class="login-options">
        <div class="login-component">
          <LoginComponent />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.login-page {
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  display: flex;

  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.login-message {
  flex: 1;
  max-width: 100%;
  display: flex;
}

.login-options {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  max-width: 100%;
}

.login-socials {
  margin-top: 2rem;
}

.login-component {
  flex: 1;
  display: flex;
  max-width: 100%;
}
</style>
