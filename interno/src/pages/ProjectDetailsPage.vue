<template>
  <div>
    <ProjectDetailsBanner />
    <ProjectDetails />
  </div>
</template>

<script>
import ProjectDetailsBanner from "@/components/ProjectDetailsPage/ProjectDetailsBanner.vue";
import ProjectDetails from "@/components/ProjectDetailsPage/ProjectDetails.vue";
export default {
  name: "ProjectDetailsPage",
  components: {
    ProjectDetailsBanner,
    ProjectDetails,
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