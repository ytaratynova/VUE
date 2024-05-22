<template>
  <div>
    <BlogDetailsBanner />
    <TagsBlog />
  </div>
</template>

<script>
import BlogDetailsBanner from "@/components/BlogDetailsPage/BlogDetailsBanner.vue";
import TagsBlog from "@/components/BlogDetailsPage/TagsBlog.vue";

export default {
  name: "BlogDetailsPage",
  components: {
    BlogDetailsBanner,
    TagsBlog,
  },
};
</script>

<style>
</style>
