<template>
  <div class="navbar">
    <router-link v-for="item in items" :key="item" :to="item.toLowerCase()">
      {{ item }}
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      'Home',
      'Projects',
      'Blogs',
      'Plans',
      'Contact',
      'About',
    ]);

    return {
      items,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 20px 0;
}

img {
  vertical-align: middle;
}

a {
  padding: 0 10px;
  text-decoration: none;
  color: beige;
}
</style>
