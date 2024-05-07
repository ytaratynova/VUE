<template>
  <div>
    <h2>Our shop</h2>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h4>{{ product.name }}</h4>
        <p>${{ (product.price / usd).toFixed(2) }}</p>
        <p>{{ product.available ? "Available" : "Out of stock" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",

  data() {
    return {
      products: [
        { name: "apple", price: 100, available: true },
        { name: "bread", price: 38, available: true },
        { name: "potato", price: 99, available: true },
        { name: "peach", price: 270, available: false },
      ],
      usd: 0,
    };
  },

  mounted() {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((data) => data.json())
      .then((responce) => {
        this.usd = responce.Valute.USD.Value;
      });
  },

  methods: {},
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
