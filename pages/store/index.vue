<template>
  <div class="store-grid flex flex-wrap gap-3">
    <div v-for="book in books" :key="book.slug" class="store-grid__item">
      <BookCard :book="book" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "store",
  async asyncData({ $content }) {
    const books = await $content("books").fetch();
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
