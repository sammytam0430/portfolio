<template>
  <div id="sideMenu" class="bg-dark" @blur="closeMenu">
    <i class="fas fa-times fa-lg text-light" @click="closeMenu"></i>
    <div class="links">
      <router-link
        class="text-light"
        v-for="item in items"
        :key="item.name"
        :to="item.path"
        @click="closeMenu"
      >
        {{ item.name }}
      </router-link>
    </div>
    <span class="footer text-warning">
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
  height: 100%;
  min-height: 270px;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 50px;
  transition: width 0.5s;
}

#sideMenu i {
  position: absolute;
  top: 20px;
  right: 20px;
}

#sideMenu a {
  padding: 8px 0 0 32px;
  height: 40px;
  width: 100%;
  text-decoration: none;
  display: block;
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
  position: absolute;
  bottom: 5px;
  left: 5px;
  white-space: nowrap;
}

@media only screen and (max-height: 400px) {
  #sideMenu a {
    width: 50%;
    display: inline-block;
  }
}
</style>
