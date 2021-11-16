<template>
  <div class="store-grid">
    <div v-for="product in products" :key="product.slug" class="store-grid__item mx-auto">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import SEO from "~/mixins/SEO.js";

export default {
  layout: "store",
  mixins: [SEO],
  data() {
    return {
      seo: {
        title: "Store",
      },
    };
  },
  async asyncData({ $content }) {
    const products = await $content("products").fetch();
    return {
      products,
    };
  },
};
</script>

<style lang="scss">
.store-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-gap: 1rem;
}
</style>
