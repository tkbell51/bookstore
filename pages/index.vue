<template>
  <div>
    <Hero />

    <section class="section__browse-categories">
      <div class="container">
        <div class="browse-categories flex justify-center gap-4">
          <NuxtLink
            v-for="(category, index) in categories"
            :key="index"
            class="browse-categories__link"
            :to="`/store/category/${category.slug}`"
          >
            <svg-icon :name="category.slug" />

            <span>{{ category.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section__featured">
      <div class="container">
        <h2>Featured</h2>
        <div class="flex">
          <div v-for="book in featuredBooks()" :key="book.slug">
            <BookCard :book="book" />
          </div>
        </div>
      </div>
    </section>
    <section class="section__sales"><div class="container">sales</div></section>
    <!-- <HomeBlog /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const books = await $content("books")
      // .where({ featured: true })
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
      books,
      categories,
    };
  },

  data() {
    return {
      selectedCategory: "",
      books: [],
      // categories: [],
      filterBooks: this.books,
      categorySettings: {
        slidesToShow: 4,
        arrows: true,
      },

      bookSettings: {
        arrows: true,
        infinite: true,
        slidesToShow: 5,
      },
      featureSettings: {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        fade: true,
        slidesToShow: 1,
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
    featuredBooks() {
      return this.books.filter((books) => books.featured === true);
    },
    // categoryFilter(category) {
    //   this.selected === category
    //     ? (this.selected = null)
    //     : (this.selected = category)
    // },
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
  &__browse-categories {
    .browse-categories {
      &__link {
        @apply rounded relative inline-block p-4 text-center;
        background: $white;
        border: 1px solid $light-grey;
        color: black;
        width: 15rem;
        text-align: center;
        // height: 60rem;
        // padding: 6rem;
        & svg {
          width: 5rem;
          height: 5rem;
          margin: 0 auto;
        }
        &:hover {
          background: $light-grey;
          transform: translateY(-1rem);
        }
      }
    }
  }
  &__categories {
    h2 {
      color: $orange;
    }
    .categories-row {
    }
  }
  &__home-books {
    height: 30rem;
    .slick-next,
    .slick-prev {
      &::before {
        font-family: "";
      }
    }
    .slick-next {
      right: 22%;
      top: 95%;
      &::before {
        content: "";
        background-image: url("../assets/sprite/svg/arrow-right.svg");
      }
    }
    .slick-prev {
      left: 75%;
      top: 95%;
      z-index: 1;
    }
    .slick-dots {
      bottom: 3%;
      text-align: right;
      right: 26%;
      li button:before {
        color: $white;
      }
    }
  }
  &__book-tabs {
    .book-tabs {
      &__btn {
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $orange;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out 0s;
        }
        &:hover {
          &::before {
            visibility: visible;
            transform: scaleX(1);
          }
        }
        &.selected {
          @apply font-semibold rounded;
          background: $orange;
          color: $white;
        }
      }
    }
  }
  .company {
    &-move {
      transition: all 600ms ease-in-out 50ms;
    }
    &-enter-active {
      transition: all 300ms ease-out;
    }

    &-leave-active {
      transition: all 200ms ease-in;
      position: absolute;
      z-index: 0;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-enter {
      transform: scale(0.9);
    }
  }
}
</style>
