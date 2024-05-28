<template>
  <div>
    <HomeBanner />
    <HomeProject />
    <HomeCounter />
    <HomeBlog />
  </div>
</template>

<script>
import HomeBlog from "@/components/HomePage/HomeBlog.vue";
import HomeBanner from "@/components/HomePage/HomeBanner.vue";
import HomeProject from "@/components/HomePage/HomeProject.vue";
import HomeCounter from "@/components/HomePage/HomeCounter.vue";

export default {
  name: "HomePage",
  components: {
    HomeBanner,
    HomeProject,
    HomeCounter,
    HomeBlog,
  },
};
</script>

<style>
</style>