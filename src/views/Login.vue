<script setup>
import LoginComponent from '../components/Login/LoginComp.vue'
import LoginMessage from '../components/Login/LoginMessage.vue'
</script>

<template>
  <div class="login-wrapper-main">
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
.login-wrapper-main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000000, #333232);
}

.login-components {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.login-message,
.login-component {
  padding: 1rem;
}

@media (max-width: 965px) {
  .login-components {
    flex-direction: column;
  }

  .login-message,
  .login-component {
    padding: 0 0.5rem 0rem 0.5rem;
  }
}
</style>
