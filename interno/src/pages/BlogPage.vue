<template>
  <div>
    <BlogBanner />
    <BlogLatestPost />
    <BlogNews />
  </div>
</template>

<script>
import BlogBanner from "../components/BlogPage/BlogBanner.vue";
import BlogLatestPost from "../components/BlogPage/BlogLatestPost.vue";
import BlogNews from "../components/BlogPage/BlogNews.vue";

export default {
  name: "BlogPage",
  components: {
    BlogBanner,
    BlogLatestPost,
    BlogNews,
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