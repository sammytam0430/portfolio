<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
// import necessary components and services
import Navbar from '@/components/navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cornsilk;
}
</style>
