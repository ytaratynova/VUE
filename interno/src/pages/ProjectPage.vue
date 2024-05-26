<template>
  <div>
    <ProjectBanner />
    <ProjectList />
  </div>
</template>

<script>
import ProjectBanner from "@/components/ProjectPage/ProjectBanner.vue";
import ProjectList from "@/components/ProjectPage/ProjectList.vue";

export default {
  name: "ProjectPage",
  components: {
    ProjectBanner,
    ProjectList,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>