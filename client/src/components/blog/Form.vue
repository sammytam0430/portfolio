<template>
  <form action="">
    <div class="form-group mb-2">
      <label for="title">Title</label>
      <input
        required
        type="text"
        id="title"
        name="title"
        v-model="data.title"
        class="form-control"
      />
    </div>
    <div class="form-group mb-2">
      <label for="description">Description</label>
      <textarea
        required
        id="description"
        name="description"
        v-model="data.description"
        class="form-control"
      />
    </div>
    <div class="form-group mb-2">
      <label for="markdown">Markdown</label>
      <textarea
        required
        id="markdown"
        name="markdown"
        v-model="data.markdown"
        class="form-control"
      />
    </div>
    <div class="my-5">
      <router-link to="/blogs">
        <button type="button" class="btn btn-outline-dark">
          Cancel
        </button>
      </router-link>
      <button @click="validateForm" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const data = ref({ title: '', description: '', markdown: '' });
    const validateForm = () => {
      console.log(data.value);
    };
    return { data, validateForm };
  },
};
</script>
