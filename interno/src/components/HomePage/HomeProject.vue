<template>
  <section class="project container">
    <div class="project__text-content text-content">
      <p class="project__title subtitle">Follow Our Projects</p>
      <p class="project__description description">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
    </div>
    <div class="project__content">
      <div
        class="project-item"
        v-for="project in getProjectsPreview"
        :key="project.id"
        :item="project"
      >
        <ProjectItem :project="project" />
      </div>
    </div>
  </section>
</template>



<script>
import { mapState, mapGetters } from "vuex";
import ProjectItem from "@/components/ProjectPage/ProjectItem.vue";

export default {
  name: "HomeProject",
  components: {
    ProjectItem,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(["projectsData"]),
    ...mapGetters(["getProjectsPreview"]),
  },

  mounted() {},

  methods: {},
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
.project__text-content {
  margin-bottom: 93px;
}

.project__title {
  max-width: 737px;
  font-family: DM Serif Display;
}

.project__description {
  max-width: 737px;
  text-align: center;
}

.project__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 46px;
  margin-bottom: 96px;
}

.project-item__content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-item__content {
  border-radius: 200px;
}

.project-item__img {
  width: 100%;
}

.img_01 {
  border-radius: 0 80px 0 0;
}
.img_02 {
  border-radius: 80px 0 0 0;
}
.img_03 {
  border-radius: 0 0 80px 0;
}
.img_04 {
  border-radius: 0 0 0 80px;
}

.project-item__about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.project-item__text {
  display: flex;
  flex-direction: column;
}

.project-item__title {
  font-family: DM Serif Display;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: left;
}

.project-item__link {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #f4f0ec;
  padding: 26px 30px;
}
</style>