<script setup>
import LoginComponent from '../components/LoginComp.vue'
import LoginMessage from '../components/LoginMessage.vue'
import LoginPageSocials from '../components/LoginPageSocials.vue'
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
        <div class="login-socials"><LoginPageSocials /></div>
      </div>
    </div>
  </div>
</template>
<style>
.login-page {
  min-height: calc(100vh - 100px);
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
  align-items: center;
  max-width: 100%;
}

.login-component {
  flex: 1;
  display: flex;
  max-width: 100%;
}

.login-socials {
  margin-top: 2rem;
  align-self: center;
}
</style>
