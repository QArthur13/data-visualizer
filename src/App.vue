<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:limegreen">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Données</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Home' }" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'List' }" class="nav-link active">List</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Pie' }" class="nav-link active">Pie</router-link>
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
