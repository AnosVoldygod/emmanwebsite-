<script setup>
import { ref } from 'vue'
</script>

<template>
  <header>
    <h1>This is the login page</h1>
  </header>

  <main>
    <form>
      <!-- container for the username and password elements -->
      <div class="login-container">
        <div class="row py-3">
          <div class="col">
            <label for="username" class="login-label col-2">Username: </label>
            <input type="text" class="login-control" id="username" />
          </div>
        </div>
        <div class="row pb-3">
          <div class="col">
            <label for="password" class="login-label col-2">Password: </label>
            <input type="text" class="login-control" id="username" />
          </div>
        </div>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary login-btn">Login</button>
      </div>
    </form>
  </main>
</template>

<style>
.login-container {
  color: grey;
}
</style>
