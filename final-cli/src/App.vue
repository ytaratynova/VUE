<template>
  <div id="app">
    <BlogHeader />
    <BlogDetails />
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import BlogDetails from "./components/BlogDetails.vue";
import BlogFooter from "./components/BlogFooter.vue";

export default {
  name: "App",
  components: {
    BlogHeader,
    BlogDetails,
    BlogFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
