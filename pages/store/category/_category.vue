<template>
  <div class="store-grid">
    <div v-for="book in books" :key="book.slug" class="mx-auto">
      <ProductCard :product="book" />
    </div>
  </div>
</template>

<script>
import SEO from "~/mixins/SEO.js";
export default {
  layout: "store",
  mixins: [SEO],
  data() {
    return {};
  },
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
      seo: {
        title: category.name,
        description: category.description,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
