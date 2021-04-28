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
.section {
  height: calc(100vh - var(--header-height));
}
</style>
