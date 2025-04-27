<template>
  <div class="login-header">
    <div class="login-welcome">
      <h1 class="heading-welcome">Welcome to my website!</h1>
    </div>
    <div class="login-paragraph">
      <p>
        If you are here as a potential employer, I hope you like what you find!<br />
        If you are here to try to get my personal information for some unsavory purpose,<br />
        please don't...
      </p>
    </div>
  </div>
</template>
<style scoped>
.login-header {
  padding: 2rem 1rem;
  text-align: left;
  margin: 2rem auto;
  width: 100%;
  max-width: 600px;
  color: rgb(49, 46, 46);
}

.login-welcome h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

.login-paragraph p {
  font-size: clamp(1rem, 2.5vw, 2rem);
  line-height: 1.6;
}

@media (max-width: 800px) {
  .login-header {
    padding: 0.5rem 0.5rem 0rem;
  }

  .login-welcome {
    text-align: center;
  }
}
</style>
