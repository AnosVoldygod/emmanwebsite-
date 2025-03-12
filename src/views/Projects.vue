<script scoped>
import { fullInsult } from '../shakespeare.js'
export default {
  methods: {
    fullInsult,
  },
}
</script>
<template>
  <header>
    <div class="projects">
      <h1 style="text-align: center">LIST OF PROJECTS GO HERE</h1>
    </div>
  </header>

  <main>
    <div class="card" style="width: 18rem">
      <img alt="Vue logo" class="logo" src="../assets/hipspeare.jpg" width="200" height="200" />
      <div class="card-body">
        <h5 class="card-title" style="text-align: center; color: black; font-family: cursive">
          Shakespeare Insult Generator
        </h5>
        <p class="card-text">
          Lo, this merry contrivance doth but one thing, craft insults in the Bard’s tongue. For
          common taunts are far too base! <br />
          Perchance thou art a knave, a scoundrel, or a miscreant? Then this tool is for thee!<br />
          But alas, thout shall have to draw upon thy patience, for the code is not yet complete.
        </p>
        <button class="btn btn-primary" @click="fullInsult">Generate Thy Insult</button>
        <div class="card">
          <div class="card-body">This will be the insult</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects {
  color: antiquewhite;
}
.card {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  background-color: aquamarine;
  border-color: black;
}
</style>
