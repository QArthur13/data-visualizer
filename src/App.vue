<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:limegreen">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Données</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/liste" class="nav-link">Voir la liste</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
</style>
