<template>
  <Header first_link="www.google.fr" second_link="List.vue"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <List />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    List
  }
}
</script>

<style>
</style>
