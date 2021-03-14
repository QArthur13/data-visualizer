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
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'Bar' }" class="nav-link active">Bar Chart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
/**
 * App.vue est la page principal et ce qui permet de pouvoir faire marcher le projet.
 */
import { mapActions } from 'vuex';

export default {
  name: 'App',

  mounted() {
        fetch("https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7")
        .then(response => response.json())
        .then(data => {
            this.saveUsers(data.people);
        })
    },
    methods:{
      ...mapActions(['saveUsers'])
    }
    
  
}
</script>

<style>
</style>
