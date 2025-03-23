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
        <img alt="Google Logo" class="logo-generic" src="../assets/hipspeare.jpg" />
      </div>
      <div class="apple-option generic-login-option"></div>
      <div class="microsoft-option generic-login-option"></div>
      <div class="phone-option generic-login-option"></div>
    </div>
  </div>
</template>

<style>
.generic-login-option {
  border-style: solid;
  border-width: thin;
  height: 40px;
  width: 275px;
  margin-top: 5px;
  background-color: white;
  color: black;
}

.logo-generic {
  width: 40px;
}
</style>
