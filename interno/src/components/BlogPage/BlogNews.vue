<template>
  <div class="news container">
    <p class="news__title subtitle">Articles & News</p>
    <div class="blog__content" id="blog">
      <div
        class="blog-item"
        v-for="article in paginatedCatalog"
        :key="article.id"
      >
        <div class="blog-item__img-box">
          <img
            :src="require('@/assets/images/' + article.fileName)"
            alt="photo"
            class="blog-item__img"
          />
          <p class="blog-item__on-img">{{ article.category }}</p>
        </div>
        <p class="blog-item__title">{{ article.title }}</p>
        <div class="blog-item__link-box">
          <p class="blog-item__date">{{ article.date }}</p>
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
    <nav class="news__pagination">
      <li
        v-for="page in getArticlsTotalPages"
        :key="page"
        class="news__page-link"
      >
        <router-link :to="getPageLink(page)">{{ page }}</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "BlogNews",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params[0].slice(-1));
      return isNaN(pageNumberParam) || pageNumberParam < 1
        ? 1
        : pageNumberParam;
    },
    getPageLink(page) {
      return `/blog/${page}`;
    },
  },
  computed: {
    ...mapState(["articlesData"]),
    ...mapGetters(["getArticlsTotalPages", "paginatedArticls"]),
    paginatedCatalog() {
      return this.paginatedArticls(this.getCurrentPageNumber());
    },
  },
};
</script>

<style scoped>
.subtitle {
  font-weight: 400;
  font-family: DM Serif Display;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: center;
}
.news__title {
  margin-bottom: 30px;
}

.news__pagination {
  margin-top: 51px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.news__page-link {
  display: flex;
  border: 1px solid rgb(205, 162, 116);
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0%;
  cursor: pointer;
  margin-bottom: 200px;
}

.news__page-link:hover {
  background-color: rgb(244, 240, 236);
}

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
.blog__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 27px;
}
</style>