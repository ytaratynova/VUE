<template>
  <div>
    <ProjectBanner />
    <ProjectTags />
    <ProjectList />
  </div>
</template>

<script>
import ProjectBanner from "@/components/ProjectPage/ProjectBanner.vue";
import ProjectTags from "@/components/ProjectPage/ProjectTags.vue";
import ProjectList from "@/components/ProjectPage/ProjectList.vue";

export default {
  name: "ProjectPage",
  components: {
    ProjectBanner,
    ProjectTags,
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