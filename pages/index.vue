<template>
  <div>
    <Hero />
    <StoreInfo />

    <section class="section__featured">
      <div class="container">
        <h2 class="heading-secondary">Featured Books</h2>
        <div class="flex flex-wrap">
          <div
            v-for="product in featuredProducts()"
            :key="product.slug"
            class="w-1/2 md:w-1/3 lg:w-1/4 my-4"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="section__categories">
      <div class="container">
        <h2 class="heading-secondary">Categories</h2>

        <div class="grid gap-3">
          <NuxtLink
            v-for="category in categories"
            :key="category.name"
            :to="`/store/category/${category.slug}`"
            class="category-link flex flex-col items-center"
          >
            <svg-icon :name="category.icon" class="category-icon" />
            <p class="text-center font-bold">{{ category.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section__featured-category">
      <div class="container">
        <h2 class="heading-secondary">Featured Category : Mental Health</h2>
        <VueSlickCarousel v-bind="productsSettings">
          <div
            v-for="product in products.filter((p) => p.category === 'Mental Health')"
            :key="product.title"
          >
            <ProductCard :product="product" />
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <!-- <HomeBlog /> -->
  </div>
</template>

<script>
import SEO from "~/mixins/SEO.js";

export default {
  mixins: [SEO],

  async asyncData({ $content, error }) {
    const products = await $content("products")
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: "Books not found" });
      });

    const categories = await $content("categories")
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: "Categories not found" });
      });
    return {
      products,
      categories,
    };
  },

  data() {
    return {
      seo: {
        title: "Home",
      },
      selectedCategory: "",
      books: [],

      productsSettings: {
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) return this.books;
      return this.books.filter((books) => books.category === this.selectedCategory);
    },
  },
  methods: {
    featuredProducts() {
      return this.products.filter((product) => product.featured === true);
    },

    categoryFilter(categoryName) {
      if (categoryName === "") {
        this.selectedCategory = "All Books";
        this.filteredBooks = this.books;
      } else {
        this.selectedCategory = categoryName;

        this.filteredBooks = this.books.filter((e) => {
          return e.category === categoryName;
        });
      }
    },
  },
};
</script>

<style lang="scss">
.section {
  &__categories {
    .grid.gap-3 {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      grid-gap: 1rem;
    }
    .category-icon {
      width: 6rem;
      height: 6rem;
      transition: $transition;
    }
    .category-link {
      @apply uppercase shadow hover:shadow-xl w-full flex justify-center items-center  rounded-lg p-8;
      // width: 10rem;
      margin: 0 auto;
      background: $white;

      // filter: blur
      span {
        transition: $transition;
        text-align: center;
      }
      &:hover {
        transform: translateY(-1rem);
        background: $very-light-grey;
        color: $black;

        .category-icon {
          fill: $green;
        }
      }
      &.more-to-come {
        background: center / cover no-repeat url("../assets/img/b2g-color-bg.jpg");
      }
    }
  }

  &__featured-category {
    .slick-prev:before,
    .slick-next:before {
      color: $black;
    }
    // background: center / cover no-repeat url("../assets/img/feature-background.jpg");
    .hover-btn {
      align-self: flex-start;
    }
  }
}
</style>
