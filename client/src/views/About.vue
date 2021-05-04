<template>
  <div id="about">
    <Directory />
    <Heading />
    <Summary />
    <Educations />
  </div>
</template>

<script>
import Directory from '@/components/about/Directory.vue';
import Heading from '@/components/about/Heading.vue';
import Summary from '@/components/about/Summary.vue';
import Educations from '@/components/about/Educations.vue';
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
.section {
  height: calc(100vh - var(--header-height));
}
</style>
