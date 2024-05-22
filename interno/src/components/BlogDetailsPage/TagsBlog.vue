<template>
  <div class="details__btn-box">
    <p class="details__tags-title">Tags</p>
    <div class="details__buttons">
      <button
        v-for="tag in getTagsList"
        :key="tag.id"
        @click="changeTab(tag)"
        class="details__tag-btn"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "TagsBlog",

  data() {
    return {
      activeTag: null,
    };
  },

  mounted() {},

  methods: {
    changeTab(tag) {
      this.$router.push({ name: "blog_details" });
      if (this.activeTag && tag.name === this.activeTag) {
        this.activeTag = null;
      } else {
        this.activeTag = tag.name;
      }
      this.$emit("setActiveTag", tag.name);
    },
  },
  computed: {
    ...mapState(["articlesData"]),
    ...mapGetters(["getTagsList"]),
  },
};
</script>

<style scoped>
</style>