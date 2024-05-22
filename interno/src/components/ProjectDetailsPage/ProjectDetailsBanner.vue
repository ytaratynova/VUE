<template>
  <div class="project__banner"></div>
</template>

<script>
export default {
  name: "ProjectDetailsBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.project__banner {
  background-image: url("@/assets/images/projectDetails_banner.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-top: 178px;
  margin-bottom: 200px;
}
</style>
