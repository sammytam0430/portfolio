<template>
  <div id="header" class="bg-light w-100 position-fixed top-0">
    <i class="fas fa-bars fa-lg position-absolute" @click="openMenu"></i>
    <h2 class="title position-absolute">
      SAMMY TAM<span class="cursor text-warning">|</span>
    </h2>
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
        ? 'text-light bg-dark w-100 position-fixed top-0'
        : 'bg-light w-100 position-fixed top-0';
    });
    return {
      openMenu,
    };
  },
};
</script>

<style scoped lang="scss">
#header {
  height: var(--header-height);
  transition: 0.5s;
  z-index: 1;
}

#header i {
  left: 20px;
  top: 20px;
}

.title {
  top: 10px;
  right: 20px;
}
</style>
