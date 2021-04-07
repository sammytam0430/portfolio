<template>
  <div id="header" class="bg-light w-100 position-fixed top-0">
    <i class="fas fa-bars fa-lg position-absolute" @click="openMenu"></i>
    <span class="position-absolute top-0 end-0 me-5 fs-2">SAMMY TAM</span>
  </div>
</template>

<script>
export default {
  setup() {
    const openMenu = () => {
      document.getElementById('sideMenu').style.width = '275px';
    };
    window.addEventListener('scroll', (event) => {
      document.getElementById('header').className = event.path[1].scrollY
        ? 'text-light bg-dark'
        : 'bg-light';
    });
    return {
      openMenu,
    };
  },
};
</script>

<style scoped lang="scss">
#header {
  height: 50px;
  transition: 0.5s;
  z-index: 1;
}

#header i {
  left: 20px;
  top: 20px;
}
</style>
