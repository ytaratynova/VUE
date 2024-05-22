<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
  created() {
    this.$router.push({ name: "Home" });
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.jost-regular {
  font-family: "Jost", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.jost-SemiBold {
  font-family: "Jost", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.dm-serif-display-regular {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-style: normal;
}

.dm-serif-display-regular-italic {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-style: italic;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
