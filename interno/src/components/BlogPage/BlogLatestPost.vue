<template>
  <div class="latest-post container">
    <p class="latest-post__title subtitle">Latest Post</p>
    <div class="latest-post__content">
      <div class="latest-post__img-box">
        <img
          :src="require('@/assets/images/' + getArticleLast.fileName)"
          alt="photo"
          class="latest-post__img"
        />
      </div>
      <div class="latest-post__description">
        <p class="latest-post__title">{{ getArticleLast.title }}</p>
        <p class="latest-post__text description">
          {{ getArticleLast.text }}
        </p>

        <div class="blog-item__link-box">
          <p class="blog-item__date">{{ getArticleLast.date }}</p>
          <a href="#" class="blog-item__link">
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
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "BlogLatestPost",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapState(["articlsData"]),
    ...mapGetters(["getArticleLast"]),
  },
};
</script>

<style scoped>
.latest-post {
  margin-bottom: 156px;
}

.latest-post__title {
  margin-bottom: 30px;
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: left;
}

.latest-post__content {
  padding: 22px;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;

  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.latest-post__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 54px;

  max-width: 489px;
  gap: 15px;
}

.latest-post__text {
  margin-bottom: 15px;

  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
  white-space: pre-wrap;
}

.latest-post__img {
  width: 100%;
  border-radius: 50px;
}

.subtitle {
  font-weight: 400;
  font-family: DM Serif Display;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: center;
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
</style>