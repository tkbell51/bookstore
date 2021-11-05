<template>
  <div class="store-grid flex flex-wrap gap-3">
    <div v-for="book in books" :key="book.slug" class="store-grid__item">
      <ProductCard :product="book" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "store",
  async asyncData({ $content }) {
    const books = await $content("products").where({ type: "book" }).fetch();
    return {
      books,
    };
  },
};
</script>

<style lang="scss">
.store-grid {
}
</style>
