<template>
  <header>
    <container>
      <div style="border-style: solid" class="bannerContainer">
        <div class="bannerHeading"><h1>Emmanuel Berkowicz</h1></div>
        <div class="navigationBar">
          <nav>
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/ForFun">For Fun</router-link>|
            <router-link to="/Login">Login</router-link>
          </nav>
        </div>
      </div>
    </container>
  </header>
</template>

<style>
.bannerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigationBar {
  padding-right: 12px;
}
</style>
