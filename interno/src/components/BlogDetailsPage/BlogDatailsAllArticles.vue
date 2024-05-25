<template>
  <div class="blog-details__all">
    <div v-if="activeTag === null">
      <li v-for="item in getArticlesList" :key="item.id">
        <BlogDetailsItem :article="item" />
      </li>
    </div>

    <div v-else>
      <li v-for="item in getArticlsByTag(activeTag)" :key="item.id">
        <BlogDetailsItem :article="item" />
      </li>
    </div>
  </div>
</template>



<script>
import { mapState, mapGetters } from "vuex";
import BlogDetailsItem from "@/components/BlogDetailsPage/BlogDetailsItem.vue";

export default {
  name: "BlogDatailsAllArticles",
  components: {
    BlogDetailsItem,
  },
  props: {
    article: Object,
    activeTag: String,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    ...mapState(["articlesData"]),
    ...mapGetters(["getArticlesList", "getArticlsByTag"]),
  },
};
</script>

<style scoped>
</style>