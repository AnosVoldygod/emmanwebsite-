<script scoped>
import { fullInsult } from '../shakespeare.js'
export default {
  data() {
    return {
      fullInsult: '',
    }
  },
  methods: {
    async generateInsult() {
      this.fullInsult = await fullInsult() // Update the reactive data
    },
  },
}
</script>
<template>
  <header>
    <nav class="nav">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        id="dogButton"
        @click="$router.push('/ForFun/fosterdogs')"
      >
        Foster Dogs
      </button>
    </nav>
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
          Perchance thou art a knave, a scoundrel, or a miscreant? Then this tool is for thee!
        </p>
        <button class="btn btn-primary" @click="generateInsult">Generate Insult</button>
        <div class="card">
          <div class="card-body">{{ fullInsult }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  background-color: aquamarine;
  border-color: black;
}
</style>
