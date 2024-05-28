<template>
  <!-- <div class="project-item"> -->
  <div class="project-item__content">
    <div class="project-item__img-container">
      <img
        :src="require('@/assets/images/' + project.fileName)"
        alt="photo"
        class="project-item__img"
        :class="`img_0${project.id}`"
      />
    </div>
    <div class="project-item__about">
      <div class="project-item__text">
        <p class="project-item__title">{{ project.category }}</p>
        <p class="project-item__description description">
          {{ project.subCategory }}
        </p>
      </div>
      <router-link
        :to="`/project_details/${project.id}`"
        class="project-item__link"
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
      ></router-link>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
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
.project-item__link:hover {
  background-color: white;
}

.project-item__content:hover {
  background-color: rgb(244, 240, 236);
}
</style>