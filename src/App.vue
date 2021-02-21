<template>
  <Header first_link="www.google.fr" second_link="List.vue"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-link to="/liste">Voir la liste</router-link>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  }
}
</script>

<style>
</style>
