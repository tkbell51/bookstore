<template>
  <div class="store-grid flex flex-wrap gap-3">
    <div v-for="item in art" :key="item.slug" class="store-grid__item">
      <ProductCard :product="item" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "store",
  async asyncData({ $content }) {
    const art = await $content("products").where({ type: "art" }).fetch();
    return {
      art,
    };
  },
};
</script>

<style lang="scss" scoped>
.store-grid {
  .product {
    width: 30rem;
  }
}
</style>
