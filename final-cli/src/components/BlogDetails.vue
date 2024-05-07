<template>
  <div>
    <section class="banner__details"></section>

    <section class="details__content" id="details">
      <component :is="chooseTab"></component>
      <div class="details__btn-box">
        <p class="details__tags-title">Tags</p>
        <div class="details__buttons">
          <button
            v-for="button in nameButtons"
            :key="button.id"
            @click="changeTab(button)"
            class="details__tag-btn"
          >
            {{ button }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import KitchenBlog from "../components/KitchenBlog.vue";
import BedroomBlog from "../components/BedroomBlog.vue";
import BuildingBlog from "../components/BuildingBlog.vue";
import ArchitectureBlog from "../components/ArchitectureBlog.vue";
import BathroomBlog from "../components/BathroomBlog.vue";
import KitchenPlanningBlog from "../components/KitchenPlanningBlog.vue";

export default {
  name: "BlogDetails",
  components: {
    KitchenBlog,
    BedroomBlog,
    BuildingBlog,
    ArchitectureBlog,
    BathroomBlog,
    KitchenPlanningBlog,
  },

  data() {
    return {
      nameButtons: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "KitchenPlanning",
        "Bathroom",
      ],
      currentTab: "KitchenBlog",
    };
  },
  computed: {
    chooseTab() {
      return `${this.currentTab}`;
    },
  },
  methods: {
    changeTab(button) {
      this.currentTab = button + "Blog";
    },
  },
};
</script>

<style scoped>
.banner__details {
  background-image: url(../assets/banner_details.jpg);
  height: 350px;
  margin-bottom: 184px;
}

.details__content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 52px;
  margin-bottom: 88px;
}

.details__tags-title {
  margin-bottom: 24px;
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  align-items: center;
}

.details__btn-box {
  display: flex;
  flex-direction: column;
}

.details__tag-btn {
  background-color: rgb(244, 240, 236);
  padding: 9px 10px 9px 10px;
  border: none;
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
}

.details__tag-btn:hover {
  background-color: rgb(41, 47, 54);
  color: white;
}

.details__buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>