<script setup>
const displayOptionMessage = () => {
  alert('Sorry, but these options are for display only.\nBut they looks professional right?')
}
</script>

<template>
  <!-- Outside div for the entire content -->
  <div class="outer-wrapper">
    <p>The Thing!</p>
    <!-- Div wrapper for the or text -->
    <div class="text-wrapper"></div>
    <!-- Div main wrapper for the login options, google, apple ect... -->
    <div class="login-options-wrapper">
      <!-- Individual wrappers for each of the options. -->
      <div class="google-option generic-login-option">
        <img alt="Google Logo" class="logo-generic" src="../assets/SocialMedia/Google.jpg" />
        <div class="login-option-text">
          <p>Continue with Google</p>
        </div>
      </div>
      <div class="apple-option generic-login-option" @click="displayOptionMessage">
        <img alt="Apple Logo" class="logo-generic" src="../assets/SocialMedia/Apple.jpg" />
        <div class="login-option-text">
          <p>Continue with Apple</p>
        </div>
      </div>
      <div class="microsoft-option generic-login-option" @click="displayOptionMessage">
        <img alt="Microsoft-Logo" class="logo-generic" src="../assets/SocialMedia/Microsoft.jpg" />
        <div class="login-option-text">
          <p>Continue with Microsoft</p>
        </div>
      </div>
      <div class="phone-option generic-login-option" @click="displayOptionMessage">
        <img alt="Phone-Generic-Image" class="logo-generic" src="../assets/SocialMedia/Phone.jpg" />
        <div class="login-option-text">
          <p>Continue with Phone</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.generic-login-option {
  display: flex;
  align-items: center; /* Vertically center logo + text */
  gap: 10px;
  height: 40px;
  width: 275px;
  padding-left: 10px;
  margin-top: 5px;
  background-color: white;
  border: thin solid;
  cursor: pointer;
}
.logo-generic {
  width: 30px;
  height: auto;
}

.login-option-text p {
  margin: 0;
}
</style>
