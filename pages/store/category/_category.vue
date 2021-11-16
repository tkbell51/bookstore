<template>
  <div class="flex flex-wrap gap-6">
    <div v-for="book in books" :key="book.slug" class="mx-auto">
      <ProductCard :product="book" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "store",

  async asyncData({ $content, params }) {
    const slug = params.category || "index";
    const categories = await $content("categories")
      .where({ slug: { $contains: slug } })
      .limit(1)
      .fetch();
    const category = categories.length > 0 ? categories[0] : {};
    const books = await $content("products")
      .where({ category: { $contains: category.name } })
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      category,
      books,
    };
  },
};
</script>

<style lang="scss" scoped></style>
