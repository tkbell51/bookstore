<template>
  <div>
    <Hero />

    <section class="section__product-types">
      <div class="container">
        <div class="grid grid-cols-4 h-96 gap-3">
          <NuxtLink
            to="/store/books"
            class="product-links__book uppercase shadow hover:shadow-lg w-full flex justify-center items-center rounded"
            ><span class="text-4xl font-bold">Ebooks</span>
          </NuxtLink>
          <nuxt-link
            to="/store"
            class="product-links__sale col-span-2 shadow hover:shadow-xl w-full flex justify-center items-center rounded flex flex-col text-white cursor-pointer"
          >
            <span class="text-6xl uppercase font-bold">Buy 3</span>
            <span class="text-4xl uppercase">Get the 4th</span>
            <span class="text-6xl uppercase font-bold">Free </span>
            <span class="text-4xl uppercase">Storewide!</span>
          </nuxt-link>

          <NuxtLink
            to="/store/art"
            class="product-links__art uppercase shadow hover:shadow-lg w-full flex justify-center items-center rounded"
          >
            <span class="text-4xl font-bold"> Printable <br />Wall Art </span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section__featured-category">
      <div class="container">
        <h3 class="heading-tertiary text-white">Featured Category</h3>
        <div class="flex justify-between">
          <h2 class="heading-primary text-white">Mental Health</h2>
          <NuxtLink to="/store/category/mental-health">View All</NuxtLink>
        </div>
        <div class="flex flex-wrap justify-around">
          <div
            v-for="product in products.filter((p) => p.category === 'Mental Health')"
            :key="product.title"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="section__featured">
      <div class="container">
        <h2 class="heading-primary">Featured Products</h2>
        <div class="flex flex-wrap">
          <div
            v-for="product in featuredProducts()"
            :key="product.slug"
            class="w-1/4 my-4"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- <HomeBlog /> -->

    <section class="section__store-info my-0 py-8">
      <div class="container">
        <div class="store-info grid grid-cols-3">
          <div class="store-info__item flex items-center gap-5">
            <Fas i="rocket" class="" />
            <div>
              <h5 class="font-bold">Instand Downloads</h5>
              <p>No waiting on your download email after purchase</p>
            </div>
          </div>

          <div class="store-info__item flex items-center gap-5">
            <Fas i="credit-card" class="" />
            <div>
              <h5 class="font-bold">Frequent New Arrivals</h5>
              <p>Check back every month for new arrivals</p>
            </div>
          </div>
          <div class="store-info__item flex items-center gap-5">
            <Fas i="star" class="" />
            <div>
              <h5 class="font-bold">Payment Method</h5>
              <p>100% secured payment options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const products = await $content("products")
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: "Books not found" });
      });

    const books = products.filter((p) => p.type === "book");
    const categories = await $content("categories")
      .fetch()
      .catch((error) => {
        error({ statusCode: 404, message: "Categories not found" });
      });
    return {
      products,
      books,
      categories,
    };
  },

  data() {
    return {
      selectedCategory: "",
      books: [],

      featuredCategory: {
        centerMode: true,
        slidesToShow: 5,
        infinite: true,
        dots: true,
      },
      bookSettings: {
        infinite: true,
        slidesToShow: 5,
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

<style lang="scss" scoped>
.section {
  &__product-types {
    .product-links {
      &__sale {
        background: radial-gradient(lighten(red, 10%), darken(red, 20%));

        span {
          transition: $transition;
          transform: scale(1.5);
          line-height: 4rem;
        }
        &:hover {
          color: $white;
          span {
            line-height: 5rem;
            transform: scale(2);
          }
        }
      }
      &__book {
        background: center / cover no-repeat url("assets/img/b2g-bg-1.jpg");
      }
      &__art {
        background: center / cover no-repeat url("assets/img/beach-scene.jpg");
      }
      &__book,
      &__art {
        // filter: blur
        span {
          @apply rounded flex justify-center items-center;
          width: 50%;
          height: 50%;
          background: rgba($white, 0.5);
          backdrop-filter: blur(6px);
          transition: $transition;
          text-align: center;
        }
        &:hover {
          span {
            backdrop-filter: blur(10px);

            width: 100%;
            height: 100%;
            font-size: 4rem;
            color: $black;
            line-height: 5rem;
          }
        }
      }
    }
  }

  &__featured-category {
    background: center / cover no-repeat url("../assets/img/feature-background.jpg");
  }
  &__store-info {
    .store-info {
      border-top: 1px solid rgba($grey, 0.5);
      padding: 3rem 0;
      &__item {
        padding: 0 6rem;
        &:not(:last-of-type) {
          border-right: 1px solid rgba($grey, 0.5);
        }
      }
      h5 {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.3rem;
      }
      svg {
        color: rgba($grey, 0.5);
        height: 4rem;
        width: 4rem;
      }
    }
  }
}
</style>
