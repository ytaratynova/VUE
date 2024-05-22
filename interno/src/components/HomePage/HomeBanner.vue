<template>
  <section class="banner container">
    <div class="banner__content">
      <div class="banner__text">
        <h1 class="banner__title">Let Your Home Be Unique</h1>
        <p class="banner__description description">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <a href="#" class="banner__button btn">
          <span class="btn__text"> Get Started </span>
          <svg
            width="17.151062"
            height="16.005859"
            viewBox="0 0 17.1511 16.0059"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M1.00992 7.93823L14.7331 7.80151M9.62808 1.41431L16.1511 7.93726L9.49667 14.5918"
              stroke="#CDA274"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
a {
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: 1353px;
  margin: 0 auto;
  padding: 0px 63px 0px 90px;
}

.description {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.btn {
  border-radius: 18px;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  background: rgb(41, 47, 54);
}

.btn__text {
  color: rgb(255, 255, 255);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: center;
}

.banner__content {
  max-width: 1200px;
  height: 758px;
  background-image: url("@/assets/images/banner.jpg");
  background-repeat: no-repeat;
  background-size: 1200px;
  background-position: center;
  border-radius: 50px;
  padding: 200px 50px;
  margin-bottom: 80px;
}

.banner__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 65px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: left;
  max-width: 433px;
  margin-bottom: 18px;
}

.banner__description {
  margin-bottom: 18px;
  max-width: 433px;
}

.banner__button {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  height: 75px;
  gap: 10px;
}
</style>

