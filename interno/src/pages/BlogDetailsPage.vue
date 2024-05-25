<template>
  <div>
    <BlogDetailsBanner />
    <BlogDetailsList />
  </div>
</template>

<script>
import BlogDetailsBanner from "@/components/BlogDetailsPage/BlogDetailsBanner.vue";
import BlogDetailsList from "@/components/BlogDetailsPage/BlogDetailsList.vue";

export default {
  name: "BlogDetailsPage",
  components: {
    BlogDetailsBanner,
    BlogDetailsList,
  },
};
</script>

<style>
</style>
