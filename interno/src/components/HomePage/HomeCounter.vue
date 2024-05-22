<template>
  <div class="counter">
    <div class="counter__box">
      <p class="counter__count">12</p>
      <p class="counter__description description">Years Of Experiance</p>
    </div>

    <div class="counter__box">
      <p class="counter__count">85</p>
      <p class="counter__description description">Success Project</p>
    </div>

    <div class="counter__box">
      <p class="counter__count">15</p>
      <p class="counter__description description">Active Project</p>
    </div>

    <div class="counter__box">
      <p class="counter__count">95</p>
      <p class="counter__description description">Happy CUstomers</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCounter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.description {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
}
.counter {
  background-color: rgb(244, 240, 236);
  height: 457px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin-bottom: 96px;
}

.counter__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(205, 162, 116);
  height: 155px;
}

.counter__box:last-child {
  border: none;
}

.counter__count {
  font-weight: 400;
  font-size: 85px;
  line-height: 125%;
  letter-spacing: 2%;
  align-content: left;
  color: rgb(205, 162, 116);
}
</style>