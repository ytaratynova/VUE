<template>
  <div>
    <img
      class="switch__img"
      :src="require('@/assets/images/' + project.pics[0])"
      alt="photo"
    />
    <div class="switch">
      <input
        class="switch__button"
        type="radio"
        v-for="pic in project.pics"
        :key="pic.id"
        :value="require('@/assets/images/' + pic)"
        @click="changeSwitch(pic)"
        name="slider"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComp",
  props: {
    project: Object,
  },

  data() {
    return {};
  },

  mounted() {
    let choosenSwitch = document.querySelector(".switch__button");
    choosenSwitch.checked = true;
  },

  methods: {
    changeSwitch(pic) {
      console.log(pic);
      const photoEl = document.querySelector(".switch__img");
      photoEl.setAttribute("src", require("@/assets/images/" + pic));
    },
  },
};
</script>

<style scoped>
.switch__img {
  margin-bottom: 30px;
}
.switch {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-bottom: 200px;
}
</style>
