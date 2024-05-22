<template>
  <div class="tags">
    <nav class="project__tags">
      <li v-for="tag in getProjectTagsList" :key="tag.id">
        <router-link to="`/project/${tag}`" class="project__tag"
          >{{ tag.name }}
        </router-link>
      </li>
    </nav>
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
    // toggleTagActive(cat) {
    //         this.$router.push({ name: 'project' });
    //         if (this.activeTag && cat.name === this.activeCat) {
    //             this.activeCat = null;
    //         } else {
    //             this.activeCat = cat.name;
    //         }
    //         this.$emit('setActiveCat', cat.name);
    //     },
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