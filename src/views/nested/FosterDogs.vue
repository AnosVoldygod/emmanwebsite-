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
      src="../../assets/FosterDogs/AllFosterDogs.jpg"
      width="800"
      height="800"
    />
    <!-- <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quirk</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody class="table-group-divider" style="vertical-align: middle">
          <tr>
            <th scope="row">1</th>
            <td>Blondie</td>
            <td>Squeeky toy lover</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Tango</td>
            <td>Head on lap lover</td>
            <td><img src="../../assets/FosterDogs/Tango.jpg" height="150" width="150" /></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </main>
</template>

<script scope></script>
