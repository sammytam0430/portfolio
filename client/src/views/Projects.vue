<template>
  <div id="projects" class="container-fluid bg-dark py-5">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="project of projects" :key="project.name" class="col">
        <div class="card">
          <img :src="project.img" class="card-img-top" alt="..." />
          <div class="card-body border-top  border-5 border-warning">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const projects = ref([
      {
        name: 'EduFunder',
        desc:
          'EduFunder is a crowd-sourcing page for students who need financial aid and awards.',
        img: require('../assets/eduFunder.png'),
      },
      {
        name: 'Forensic Guardians International',
        desc:
          'Forensic Guardians International provides fatality management solutions.',
        img: require('../assets/forensicGuardians.png'),
      },
      {
        name: 'Konnect BCIT',
        desc:
          'Konnect BCIT provides a platform for students to connect to people with similar interest and so fun activites together.',
        img: require('../assets/konnect.png'),
      },
      {
        name: 'Jungle',
        desc:
          'Jungle is a Amazon clone built on Ruby on Rails with MVC structure.',
        img: require('../assets/jungle.png'),
      },
    ]);

    return { projects };
  },
};
</script>

<style lang="scss" scoped></style>
