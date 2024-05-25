<template>
  <div>
    <p class="article__title subtitle">
      {{ article.title }}
    </p>
    <div class="article__img-box">
      <img
        class="article__img"
        :src="require('@/assets/images/' + article.fileName)"
        :alt="article.subCategory"
      />
    </div>
    <div class="article__date-box">
      <p class="article__date">{{ article.date }}</p>
      <p class="article__img-desc">{{ article.subCategory }}</p>
    </div>
    <p class="article__text description">
      {{ article.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogDetailsItem",
  props: {
    article: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.article__title {
  margin-bottom: 20px;
}

.article__text {
  margin-bottom: 24px;
}

.article__img {
  width: 100%;
  border-radius: 50px;
  margin-bottom: 46px;
}

.article__date-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
}
</style>