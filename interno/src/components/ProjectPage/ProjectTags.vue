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
      if (this.activeTag !== tag.name) {
        this.$router.push({ path: `/project/${tag.name}` });
        this.activeTag = tag.name;
        this.$emit("setActiveTag", tag.name);
      } else {
        this.$router.push({ path: `/project` });
        this.activeTag = null;
        this.$emit("setActiveTag", null);
      }
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
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  height: 75px;
  border-radius: 15px;
  border: 1px solid rgb(205, 162, 116);
}

.project__tag {
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: center;
  padding: 26px 66px;
  background-color: white;
  border: none;
}

.project__tag:hover {
  background-color: rgb(205, 162, 116);
  border-radius: 15px;
  color: white;
}

.active {
  background-color: rgb(205, 162, 116);
  border-radius: 15px;
  color: white;
}

li {
  list-style-type: none;
}
</style>