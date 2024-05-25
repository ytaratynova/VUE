<template>
  <div class="details__btn-box">
    <p class="details__tags-title">Tags</p>
    <div class="details__buttons">
      <button
        v-for="tag in getTagsList"
        :key="tag.id"
        @click="changeActiveTag(tag)"
        class="details__tag-btn"
        :class="{ active: tag.name === activeTag }"
      >
        {{ tag.name }}
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
    changeActiveTag(tag) {
      this.$router.push({ path: `/blog_details/${tag.name}` });
      this.activeTag = tag.name;
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
.details__tags-title {
  margin-bottom: 24px;
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  align-items: center;
}
.details__btn-box {
  display: flex;
  flex-direction: column;
}

.details__tag-btn {
  background-color: rgb(244, 240, 236);
  padding: 9px 10px 9px 10px;
  border: none;
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
}

.details__tag-btn:hover {
  background-color: rgb(41, 47, 54);
  color: white;
}

.details__buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
.active {
  background-color: rgb(41, 47, 54);
  color: white;
}
</style>