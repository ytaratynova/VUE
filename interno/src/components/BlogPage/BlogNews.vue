<template>
  <div class="news container">
    <p class="news__title subtitle">Articles & News</p>
    <div class="blog__content">
      <div
        class="blog-item"
        v-for="article in paginatedCatalog"
        :key="article.id"
      >
        <BlogItem :article="article" />
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
import BlogItem from "@/components/BlogPage/BlogItem.vue";
export default {
  name: "BlogNews",
  components: {
    BlogItem,
  },

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

.blog__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 27px;
}
</style>