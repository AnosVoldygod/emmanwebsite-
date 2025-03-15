<template>
  <header>
    <div class="about">
      <h1 style="color: blanchedalmond">Dogs I've Fostered!</h1>
      <br />
    </div>
    <div>
      <nav class="nav">
        <button type="button" class="btn btn-primary btn-lg" @click="$router.push('/ForFun')">
          Go Back
        </button>
      </nav>
    </div>
  </header>

  <main>
    <img
      style="padding: 20px"
      alt="Dogs I've Fostered"
      class="fosterImage"
      src="../../assets/AllFosterDogs.jpg"
      width="800"
      height="800"
    />
  </main>
</template>

<script scope></script>
