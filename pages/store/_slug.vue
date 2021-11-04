<template>
  <div class="relative overflow-hidden">
    <section class="product__header absolute">
      <div
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(242,243,245, 1) 98%), url(${prodImage})`,
        }"
      ></div>
    </section>
    <div class="section__product-contents mt-16">
      <div class="container">
        <div class="product__content flex flex-wrap items-start">
          <div class="product__image col-span-1 mb-4 w-1/2 mx-auto">
            <img :src="prodImage" :alt="book.title" class="shadow-lg w-1/2 mx-auto" />
          </div>
          <div class="product__meta w-1/2 px-4">
            <h1 class="italic">{{ book.title }}</h1>
            <p class="product__price text-4xl mb-4 font-semibold">${{ book.price }}</p>

            <p>{{ book.description }}</p>
            <div class="flex items-center gap-4">
              <!-- <StarsRatings
                v-if="book.product_reviews.length !== 0"
                class="md:text-white"
                :rating="$getRatingAvg(book.product_reviews)"
                :read-only="true"
                :star-size="20"
                :increment="0.1"
              ></StarsRatings> -->

              <!-- <span class="mt-1">
                {{ $ratingGraph(product).totalCount }} reviews
              </span> -->
            </div>
            <div class="flex my-8">
              <button
                class="snipcart-add-item inline-block bg-white border font-semibold px-4 rounded-xl shadow"
                :data-item-file-guid="book.snipcart"
                :data-item-id="book.slug"
                :data-item-price="book.price"
                :data-item-description="book.description"
                :data-item-image="prodImage"
                :data-item-name="book.title"
                :data-item-categories="book.category"
              >
                <!-- <Cart class="mr-2" color="black" /> -->

                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section__description">
      <div class="container">
        <div class="description__container">
          <Tabs>
            <Tab title="Description">
              <nuxt-content :document="book"></nuxt-content>
            </Tab>
            <Tab title="Reviews">
              <!-- <Review :product="product" :product-reviews="productReviews" /> -->
              <div>
                <form method="post" @submit.prevent="reviewSubmit">
                  <h3 class="font-bold text-3xl mb-4">Write a Review</h3>
                  <div class="flex items-center mb-4">
                    <p class="font-bold mr-4">Select a rating(required)</p>
                    <!-- <StarsRatings v-model="rating" :star-size="20"></StarsRatings> -->
                  </div>
                  <div>
                    <p for="descriptionTextarea" class="font-bold mr-4">
                      Details please! Your review helps other shoppers.
                    </p>
                    <textarea
                      id="descriptionTextarea"
                      v-model="comment"
                      rows="7"
                      class="border p-4 w-full mt-2"
                      placeholder="What did you like or dislike? What should other shoppers know before buying?"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="email-btn rounded-lg px-2 py-2">
                    Submit
                  </button>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
    <section class="section__related-products">
      <div class="container">
        <h2 class="text-3xl font-semibold">Related products</h2>
        <VueSlickCarousel v-bind="relatedSettings">
          <BookCard
            v-for="b in relatedBooks.filter((p) => p.title != book.title)"
            :key="b.slug"
            :book="b"
          />
        </VueSlickCarousel>
        <div class="flex flex-wrap gap-3"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyComponent",

  async asyncData({ $content, params }) {
    const slug = params.slug || "index";
    const book = await $content("books", slug).fetch();
    console.log(book.category);
    const relatedBooks = await $content("books")
      .where({ category: book.category })
      .fetch();

    return {
      book,
      relatedBooks,
    };
  },
  data() {
    return {
      onWishlist: {},
      comment: "",
      rating: 0,
      reviewSettings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
      relatedSettings: {
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
      // image: "",
      readMore: {},
      monthPublished: "",
      error: null,
      storeUrl: process.env.storeUrl,
    };
  },
  computed: {
    prodImage() {
      return this.$cloudinary.image.url(this.book.image, {
        gravity: "auto:subject",
        width: "986",
        height: 200,
      });
    },
  },

  methods: {
    showMore(id) {
      this.$set(this.readMore, id, true);
    },
    showLess(id) {
      this.$set(this.readMore, id, false);
    },
    // async addToWishlist(e) {
    //   e.preventDefault()
    //   try {
    //     await this.$strapi.$wishlists.create({
    //       user: this.loggedInUser,
    //       product: this.product,
    //     })
    //     this.$nuxt.refresh()
    //   } catch (error) {
    //     this.error = error
    //   }
    // },
    // removeFromWishlist(e) {
    //   console.log('Remove from wishlist')
    //   e.preventDefault()

    //   try {
    //     this.onWishlist.filter(async (w) => {
    //       await this.$strapi.$wishlists.delete(w.id)
    //       this.$nuxt.refresh()
    //     })
    //   } catch (error) {
    //     this.error = error
    //   }
    // },
  },
};
</script>

<style lang="scss">
.product {
  &__header {
    height: 40rem;
    width: 100%;
    padding: 0;

    div {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      filter: blur(15px);
      height: 102%;
      width: 102%;
      transform: scale(1.5);
    }
  }

  &__meta {
    margin-top: 1rem;
    .vue-star-rating-rating-text {
      padding-top: 6px;
    }
    h1 {
      font-size: 4rem;
    }
  }
  &__description {
    & p {
      margin-bottom: 1rem;
    }
    & ul {
      @apply list-inside list-disc;
    }
  }
}
.wishlist-icon {
  height: 1.8rem;
  width: 1.8rem;
}
.section {
  &__product-contents {
    // margin-top: -30rem;
    position: relative;
    z-index: 4;
    .container {
      text-align: left;
    }
  }
  &__description {
    .tab {
      @apply w-full;
    }
    .description__container {
      width: 75%;
      margin: 0 auto;
    }
  }
  &__related-products {
    .slick-prev,
    .slick-next {
      &::before {
        color: $secondary-color;
        font-size: 8rem;
        line-height: none;
      }
    }
    .slick-prev::before {
      content: "\2039";
    }
    .slick-next::before {
      content: "\203A";
    }
  }
}
.nuxt-content {
  .heading-secondary {
    margin: 2rem 0;
  }
}
</style>
