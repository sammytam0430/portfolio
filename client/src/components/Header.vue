<template>
  <div id="header" class="bg-light">
    <i class="fas fa-bars fa-lg" @click="openMenu"></i>
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
  position: fixed;
  top: 0;
  transition: 0.5s;
  width: 100%;
  z-index: 1;
}

#header i {
  left: 20px;
  position: absolute;
  top: 20px;
}
</style>
