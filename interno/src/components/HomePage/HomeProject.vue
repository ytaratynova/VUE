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
        <div class="project-item__content">
          <div class="project-item__img-container">
            <img
              :src="require('@/assets/images/' + project.fileName)"
              alt="photo"
              class="project-item__img"
            />
          </div>
          <div class="project-item__about">
            <div class="project-item__text">
              <p class="project-item__title">{{ project.category }}</p>
              <p class="project-item__description description">
                {{ project.subCategory }}
              </p>
            </div>
            <a href="#" class="project-item__link"
              ><svg
                width="10.004051"
                height="20.008301"
                viewBox="0 0 10.0041 20.0083"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M1.00405 19.0042L9.00405 10.0042L1.00405 1.00415"
                  stroke="#292F36"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomeProject",

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

.project-item__img {
  width: 100%;
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