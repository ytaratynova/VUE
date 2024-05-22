<template>
  <div class="container">
    <div class="project-details__item">
      <p class="project-details__subtitle subtitle">
        {{ getProjectById(this.id).title }}
      </p>
      <p class="project-details__description description">
        {{ getProjectById(this.id).text }}
      </p>
    </div>
    <img
      :src="require('@/assets/images/' + getProjectById(this.id).fileName)"
      alt="getProjectById(this.id).category"
      class="project-details__img"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ProjectDetails",

  data() {
    return {
      id: null,
    };
  },

  mounted() {},

  methods: {},
  created() {
    this.id = this.$route.params.id;
  },

  computed: {
    ...mapState(["projectsData"]),
    ...mapGetters(["getProjectById"]),
  },
};
</script>

<style scoped>
.description {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
}

.subtitle {
  font-weight: 400;
  font-family: DM Serif Display;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: center;
}
.project-details__item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  max-width: 658px;
  margin: 0 auto;
  margin-bottom: 100px;
  align-content: center;
}
.project-details__description {
  white-space: pre-wrap;
  margin-top: 11px;
}

.project-details__img {
  width: 100%;
}
</style>