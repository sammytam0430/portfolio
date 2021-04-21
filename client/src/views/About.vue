<template>
  <div id="about">
    <Directory />
    <Heading />
    <Summary />
    <Educations />
  </div>
</template>

<script>
import Directory from '@/components/AboutDirectory.vue';
import Heading from '@/components/AboutHeading.vue';
import Summary from '@/components/AboutSummary.vue';
import Educations from '@/components/AboutEducations.vue';
export default {
  components: {
    Directory,
    Heading,
    Summary,
    Educations,
  },
};
</script>

<style lang="scss" scoped>
#about {
  margin-top: -50px;
  padding-top: 50px;
}

.section {
  height: 100vh;
  border-top: 50px solid transparent;
  margin-top: -50px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}

#summary {
}

#education {
}
</style>
