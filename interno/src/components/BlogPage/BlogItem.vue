<template>
  <div class="blog-item">
    <div class="blog-item__img-box">
      <div>
        <img
          :src="require('@/assets/images/' + article.fileName)"
          alt="photo"
          class="blog-item__img"
        />
        <p class="blog-item__on-img">{{ article.category }}</p>
      </div>
      <p class="blog-item__title">{{ article.title }}</p>
    </div>
    <div class="blog-item__link-box">
      <p class="blog-item__date">{{ article.date }}</p>
      <router-link :to="`/blog_details/${article.id}`" class="blog-item__link">
        <svg
          width="7.946899"
          height="15.379547"
          viewBox="0 0 7.9469 15.3795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M1.00403 14.3755L6.9469 7.68977L1.00403 1.00406"
            stroke="#292F36"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
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
.blog-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;

  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.blog-item__img-box {
  position: relative;
}

.blog-item__img {
  height: 300px;
  width: 100%;
  border-radius: 50px 50px 0px 0px;
}

.blog-item__on-img {
  position: absolute;
  width: 122px;
  height: 29px;
  left: 20px;
  top: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 4px 5px 8px;

  border-radius: 8px 8px 8px 0px;
  background: rgb(255, 255, 255);
}

.blog-item__title {
  font-family: DM Serif Display;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: left;
  max-width: 305px;
}

.blog-item__link-box {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.blog-item__date {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 1%;
}

.blog-item__link {
  width: 52px;
  height: 52px;
  border-radius: 35px;
  background-color: #f4f0ec;
  align-items: center;
  justify-content: center;
  display: flex;
}

.blog-item__link:hover {
  background-color: white;
}

.blog-item:hover {
  background-color: rgb(244, 240, 236);
}
</style>