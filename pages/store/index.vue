<template>
  <div class="store-grid flex flex-wrap gap-6">
    <div v-for="product in products" :key="product.slug" class="store-grid__item mx-auto">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "store",
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
}
</style>
