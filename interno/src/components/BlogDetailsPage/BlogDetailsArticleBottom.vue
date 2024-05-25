<template>
  <div class="article__bottom">
    <p class="article__bottom_coma">,,</p>
    <p class="article__bottom_text">
      The details are not the details. They make the design.
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogDetailsArticleBottom",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.article__bottom {
  padding: 0px 227px 100px 227px;
  background-color: rgb(244, 240, 236);
  border-radius: 50px;
  margin-bottom: 27px;
}
.article__bottom_coma {
  font-weight: 400px;
  font-size: 200px;
  color: rgb(205, 162, 116);
  text-align: center;
}
.article__bottom_text {
  font-weight: 400px;
  font-size: 25px;
  color: rgb(205, 162, 116);
  text-align: center;
  vertical-align: text-top;
}
</style>