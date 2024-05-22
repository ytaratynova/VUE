<template>
  <div class="page__name">
    <div class="page__nameBox">
      <p class="page__title subtitle">Articles & News</p>
      <p class="page__text description">Home / Blog</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.page__name {
  background-image: url("@/assets/images/banner_blog.jpg");
  background-repeat: no-repeat;
  /* background-size: 1200px; */
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-top: 178px;
  margin-bottom: 200px;
}

.page__nameBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 503px;
  height: 178px;
  background-color: white;
}

.description {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
}

.subtitle {
  font-weight: 400;
  font-family: DM Serif Display;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: center;
}
</style>