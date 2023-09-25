<template>
  <div class="main">
    <WorkSpace/>
  </div>
</template>

<script>
import WorkSpace from './views/WorkSpace.vue'

export default {
  name: 'App',
  components: {
    WorkSpace
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  background-image: url('./assets/images/background.png')
}
</style>
