<template>
  <div>
    <ProjectTags @setActiveTag="setActiveTag" />

    <div class="project__list container">
      <li v-for="project in paginatedCatalog" :key="project.id">
        <ProjectItem :project="project" />
      </li>
    </div>
    <nav class="news__pagination">
      <li
        v-for="page in getProjectsTotalPages(this.activeTag)"
        :key="page"
        class="news__page-link"
      >
        <router-link :to="getPageLink(page)">{{ page }}</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ProjectItem from "@/components/ProjectPage/ProjectItem.vue";
import ProjectTags from "@/components/ProjectPage/ProjectTags.vue";

export default {
  name: "ProjectList",
  components: {
    ProjectItem,
    ProjectTags,
  },

  data() {
    return {
      activeTag: null,
    };
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
      if (this.activeTag === null) {
        return `/project/${page}`;
      } else {
        return `/project/${this.activeTag}/${page}`;
      }
    },
    setActiveTag(tagName) {
      this.activeTag = tagName;
    },
  },
  computed: {
    ...mapState(["projectsData"]),
    ...mapGetters(["paginatedProjects", "getProjectsTotalPages"]),
    paginatedCatalog() {
      return this.paginatedProjects(
        this.getCurrentPageNumber(),
        this.activeTag
      );
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.project__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, auto);
  grid-auto-flow: row;
  gap: 30px;
  margin-bottom: 60px;
}
.news__pagination {
  margin-top: 51px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.news__page-link {
  display: flex;
  border: 1px solid rgb(244, 240, 236);
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
</style>