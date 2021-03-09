<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:limegreen">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Données</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Home' }" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'List' }" class="nav-link active">List</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Animal' }" class="nav-link active">Pie Animal</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Fruit' }" class="nav-link active">Pie Fruit</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Color' }" class="nav-link active">Pie Color</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
</style>
