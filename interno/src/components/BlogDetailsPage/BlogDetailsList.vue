<template>
  <div class="details__content container">
    <div>
      <div v-if="activeTag === null && id !== null">
        <BlogDetailsItem :article="getArticleById(this.id)" />
        <BlogDetailsArticleBottom />
      </div>

      <BlogDatailsAllArticles :activeTag="this.activeTag" />
    </div>
    <TagsBlog @setActiveTag="setActiveTag" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BlogDetailsItem from "@/components/BlogDetailsPage/BlogDetailsItem.vue";
import BlogDetailsArticleBottom from "@/components/BlogDetailsPage/BlogDetailsArticleBottom.vue";
import BlogDatailsAllArticles from "@/components/BlogDetailsPage/BlogDatailsAllArticles.vue";
import TagsBlog from "@/components/BlogDetailsPage/TagsBlog.vue";

export default {
  name: "BlogDetailsList",
  components: {
    BlogDetailsItem,
    BlogDatailsAllArticles,
    BlogDetailsArticleBottom,
    TagsBlog,
  },

  data() {
    return {
      id: null,
      activeTag: null,
    };
  },

  mounted() {},

  methods: {
    setActiveTag(tagName) {
      this.activeTag = tagName;
    },
  },
  created() {
    this.id = this.$route.params.id;
  },
  computed: {
    ...mapState(["articlsData"]),
    ...mapGetters(["getArticleById"]),
  },
};
</script>

<style scoped>
.details__content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 52px;
  margin-bottom: 88px;
}
</style>