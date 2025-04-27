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
  padding: 1rem 1rem;
  text-align: left;

  width: 100%;
  max-width: 600px;
  color: rgb(238, 209, 209);
}

.heading-welcome {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.login-paragraph p {
  font-size: clamp(1rem, 3vw, 1.75rem);
  letter-spacing: 2px;
}

@media (max-width: 965px) {
  .login-header {
    padding: 0rem 0.5rem 0rem 0.5rem;
  }

  .login-welcome {
    text-align: center;
  }
}
</style>
