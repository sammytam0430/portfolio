<template>
  <div id="footer" class="pt-2 pb-2">
    <span>
      <a
        v-for="link of links"
        :href="link.href"
        target="_blank"
        :class="[link.icon, link.type, ...iconClasses]"
        :key="link.name"
      ></a>
    </span>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const links = ref([
      {
        name: 'github',
        type: 'fab',
        icon: 'fa-github',
        href: 'https://github.com/sammytam0430/portfolio/',
      },
      {
        name: 'vuejs',
        type: 'fab',
        icon: 'fa-vuejs',
        href: 'https://vuejs.org/',
      },
      {
        name: 'mdb',
        type: 'fab',
        icon: 'fa-mdb',
        href: 'https://mdbootstrap.com/',
      },
      {
        name: 'bootstrap',
        type: 'fab',
        icon: 'fa-bootstrap',
        href: 'https://getbootstrap.com/',
      },
      {
        name: 'nodejs',
        type: 'fab',
        icon: 'fa-node-js',
        href: 'https://nodejs.org/',
      },
      {
        name: 'postgresql',
        type: 'fas',
        icon: 'fa-database',
        href: 'https://postgresql.org/',
      },
    ]);
    const iconClasses = ref(['fa-2x', 'ms-1', 'me-1', 'text-light']);
    return { links, iconClasses };
  },
};
</script>

<style></style>
