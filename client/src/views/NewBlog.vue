<template>
  <div id="newBlog" class="container w-50">
    <h4 class="mb-4">New Blog</h4>
    <BlogForm />
  </div>
</template>

<script>
import BlogForm from '@/components/blog/Form.vue';
export default {
  setup() {},

  components: {
    BlogForm,
  },
};
</script>
