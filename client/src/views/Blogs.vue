<template>
  <div id="blogs" class="container-fluid">
    <h4 class="mb-4">Blogs Articles</h4>
    <router-link to="/blogs/new">
      <button type="button" class="btn btn-success">
        New Article
      </button>
    </router-link>
    <div class="blog card mt-4" v-for="blog of blogs" :key="blog.title">
      <div class="card-body">
        <h3 class="card-title">{{ blog.title }}</h3>
        <div class="card-subtitle text-muted mb-2">
          {{ blog.createAt.toLocaleDateString() }}
        </div>
        <div class="card-text mb-2">{{ blog.description }}</div>
        <button type="button" class="btn btn-outline-info">Read More</button>
        <button type="button" class="btn btn-outline-success">Edit</button>
        <button type="button" class="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const blogs = ref([
      {
        title: 'This is the title',
        createAt: new Date(),
        description: 'This is the description for the blog',
      },
      {
        title: 'This is the title',
        description: 'This is the description for the blog',
        createAt: new Date(),
      },
    ]);

    return { blogs };
  },
};
</script>
<style lang="scss" scoped></style>
