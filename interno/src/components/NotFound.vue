<template>
  <div class="error-block container">
    <div class="error">
      <h1>404</h1>
      <h2>Sorry, the page was not found</h2>
    </div>

    <img src="@/assets/images/404.jpg" alt="" class="not-found" />
  </div>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.error-block {
  position: relative;
}
.not-found {
  width: 100%;
}
.error {
  text-align: center;
  position: absolute;
  top: 37%;
  left: 37%;
  background-color: azure;
  padding: 40px;
}
</style>