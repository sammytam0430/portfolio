<template>
  <div
    id="sideMenu"
    class="bg-dark h-100 pt-5 position-fixed top-0 start-0"
    @blur="closeMenu"
  >
    <i
      class="fas fa-times fa-lg text-light position-absolute"
      @click="closeMenu"
    ></i>
    <div class="links">
      <router-link
        class="text-light w-100 text-decoration-none d-block"
        v-for="item in items"
        :key="item.name"
        :to="item.path"
        @click="closeMenu"
      >
        {{ item.name }}
      </router-link>
    </div>
    <span class="footer text-warning position-absolute bottom-0 start-0 ms-2">
      © 2021 Sammy Tam All Rights Reserved
      <Footer />
    </span>
  </div>
</template>

<script>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
  setup() {
    const items = ref([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Plans', path: '/plans' },
      { name: 'Contact', path: '/contact' },
      { name: 'About', path: '/about' },
    ]);

    const closeMenu = () => {
      document.getElementById('sideMenu').style.width = '0px';
    };

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Escape':
          closeMenu();
          break;
        default:
          break;
      }
    });

    return {
      items,
      closeMenu,
    };
  },
};
</script>

<style scoped lang="scss">
#sideMenu {
  min-height: 270px;
  width: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: width 0.5s;
}

#sideMenu i {
  top: 20px;
  right: 20px;
}

#sideMenu a {
  padding: 8px 0 0 32px;
  height: 40px;
  transition: 0.3s;
}

@keyframes shake {
  0% {
    padding-left: 32px;
  }
  50% {
    padding-left: 40px;
  }
  100% {
    padding-left: 32px;
  }
}

#sideMenu a:hover,
#sideMenu a:active {
  animation-name: shake;
  animation-duration: 0.5s;
  background-color: black;
}

.footer {
  font-size: 0.8em;
  white-space: nowrap;
}

@media only screen and (max-height: 400px) {
  #sideMenu a {
    width: 50%;
    display: inline-block;
  }
}
</style>
