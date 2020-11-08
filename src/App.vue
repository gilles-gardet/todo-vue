<template>
  <div id="app">
    <Topbar/>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Todo from "@/components/Todo";

export default {
  name: 'App',
  components: {
    Topbar
  }
}
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2c3e50;
}
</style>
