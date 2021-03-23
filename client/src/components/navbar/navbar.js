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
