<template>
  <div class="container">
    <p class="article__title subtitle">
      Let’s Get Solution for Building Construction Work
    </p>
    <div class="article__img-box">
      <img class="article__img" src="../assets/kitchen_1.jpg" alt="kitchen" />
    </div>
    <div class="article__date-box">
      <p class="article__date">26 December,2022</p>
      <p class="article__img-desc">Interior / Home / Decore</p>
    </div>
    <p class="article__text description">
      Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
      turpmaximus.posuere in.Contrary to popular belief.There are many
      variations of passages of Lorem Ipsum available, but the majority have
      suffered alteration in some form, by injecthumour, or randomised words
      which don't look even slightly believable. Embarrassing hidden in the
      middle of text. All the Lorem Ipsum generators on the Internet tend to
      repeat predefined chunks as necessary.
    </p>

    <p class="article__title subtitle">Design sprints are great</p>
    <p class="article__text description">
      Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
      turpmaximus.posuere in.Contrary to popular belief.There are many
      variations of passages of Lorem Ipsum available, but the majority have
      suffered.
    </p>

    <div class="article__ul-element">
      <div class="article__ol-element">
        <p class="article__ol-number">1.</p>
        <p class="article__ol-text description">
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </p>
      </div>
      <div class="article__ol-element">
        <p class="article__ol-number">2.</p>
        <p class="article__ol-text description">
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </p>
      </div>
      <div class="article__ol-element">
        <p class="article__ol-number">3.</p>
        <p class="article__ol-text description">
          Contrary to popular belief.There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered.
        </p>
      </div>

      <div class="article__img-box">
        <img class="article__img" src="../assets/kitchen_2.jpg" alt="kitchen" />
      </div>

      <p class="article__text description">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "KitchenBlog",

  data() {
    return {};
  },
};
</script>

<style scoped>
.article__title {
  margin-bottom: 20px;
}

.article__text {
  margin-bottom: 24px;
}

.article__img {
  width: 100%;
  border-radius: 50px;
  margin-bottom: 46px;
}

.article__date-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
}

.article__ul-element {
  display: flex;
  flex-direction: column;
}

.article__ol-element {
  display: grid;
  grid-template-columns: 0.03fr 1fr;
  margin-bottom: 24px;
}

.article__ol-number {
  color: rgb(77, 80, 83);
  font-family: DM Serif Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 2%;
  text-align: left;
  color: rgb(205, 162, 116);
}
</style>