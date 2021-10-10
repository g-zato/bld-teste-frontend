<template>
<div>
  <Navbar/>
  <h1></h1>
  <Content/>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Navbar from './components/Navbar.vue'
//import {store} from './vuex'

export default {
  name: 'App',
  components: {
    Content,
    Navbar,
  },
  
}
</script>

<style>
body {
  margin: 0;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
