<template>
  <div class="tags">
    <div class="project__tags">
      <button
        v-for="tag in getProjectTagsList"
        :key="tag.id"
        @click="changeActiveTag(tag)"
        class="project__tag"
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
  name: "ProjectTabs",

  data() {
    return {
      activeTag: null,
    };
  },

  mounted() {},

  methods: {
    changeActiveTag(tag) {
      this.$router.push({ path: `/project/${tag.name}` });
      this.activeTag = tag.name;
      this.$emit("setActiveTag", tag.name);
    },
  },
  computed: {
    ...mapState(["projectsData"]),
    ...mapGetters(["getProjectTagsList"]),
  },
};
</script>

<style scoped>
.tags {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}
.project__tags {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: 75px;
  width: 880px;
}

.project__tag {
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: center;
}

li {
  list-style-type: none;
}
</style>