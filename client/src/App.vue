<template>
  <Header />
  <SideMenu />
  <router-view class="view" />
</template>

<script>
// import necessary components and services
import Header from '@/components/Header.vue';
import SideMenu from '@/components/SideMenu.vue';
export default {
  name: 'App',
  components: {
    Header,
    SideMenu,
  },
};
</script>

<style lang="scss">
.view {
  animation-name: fadeIn;
  animation-duration: 1.5s;
  overflow-x: hidden;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.cursor {
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-timing-function: step-start;
  animation-duration: 1s;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

i:hover {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #555;
}

::-webkit-scrollbar-thumb:hover {
  background: #222;
}

#app {
  font-family: monospace, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
