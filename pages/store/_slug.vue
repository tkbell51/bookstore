<template>
  <div class="relative overflow-hidden">
    <div class="section__product-contents mt-16">
      <div class="container">
        <div class="product__content flex flex-wrap items-start">
          <div class="product__image mb-4 w-1/2 mx-auto">
            <VueSlickCarousel
              v-bind="settings"
              :class="product.type === 'art' ? 'w-11/12' : 'w-3/4 mx-auto'"
            >
              <div v-for="(image, index) in product.previewImages" :key="index">
                <cld-image
                  :public-id="image"
                  gravity="auto:subject"
                  fetchFormat="auto"
                  quality="auto"
                  class="mx-auto"
                />
              </div>
              <div class="flex items-center">
                <img
                  src="@/assets/img/digital-download.jpg"
                  alt="Digital Download"
                  class="digital-download my-auto"
                />
              </div>
            </VueSlickCarousel>
          </div>
          <div class="product__meta w-1/2 px-4">
            <p class="uppercase">{{ product.category }}</p>
            <h1 class="heading-primary mb-4">{{ product.title }}</h1>
            <p class="product__price text-4xl mb-4 font-semibold">${{ product.price }}</p>

            <p class="mb-6">{{ product.description }}</p>
            <button
              class="snipcart-add-item inline-block shadow w-3/4 px-6 py-4"
              :data-item-file-guid="product.snipcart"
              :data-item-id="product.slug"
              :data-item-price="product.price"
              :data-item-description="product.description"
              :data-item-image="prodImage"
              :data-item-name="product.title"
              :data-item-categories="product.category"
            >
              <!-- <Cart class="mr-2" color="black" /> -->

              Add to cart
            </button>
            <Accordion class="accordion__highlights">
              <template v-slot:title>Download Info</template>
              <template v-slot:content>
                <p class="flex items-center gap-4">
                  <Fas i="cloud-download-alt" />Digital Download
                </p>
                <p class="flex items-center gap-4">
                  <Fas i="paperclip" />Digital file type(s): 1 {{ product.fileType }}
                </p>
              </template>
            </Accordion>
            <Accordion>
              <template v-slot:title>Description</template>
              <template v-slot:content>
                <div v-if="product.type === 'art'">
                  <p>
                    Instant downloads are easy and affordable way to transform and update
                    your space. You will be able to download your files right after you
                    purchase. Also, you will receive an e-mail with a download link.
                    Kindly note - this is an INSTANT DOWNLOAD. No physical product will be
                    shipped. You can print at home or use on-line printing services.
                  </p>
                </div>
                <nuxt-content :document="product"></nuxt-content>
              </template>
            </Accordion>
            <Accordion>
              <template v-slot:title>Delivery</template>
              <template v-slot:content>
                <p class="text-4xl mb-4">Instant Download</p>
                <p>
                  Your files will be available to download once payment is confirmed.
                  <NuxtLink class="underline" to="/download-orders">Here's how.</NuxtLink>
                </p>

                <p>
                  I don't accept returns, exchanges, or cancellations. But please contact
                  me if you have any problems with your order.
                </p>
              </template>
            </Accordion>
            <!-- <Accordion>
              <template v-slot:title>Reviews</template>
              <template v-slot:content>
                <Review :product="product" :product-reviews="productReviews" />
                <form method="post" @submit.prevent="reviewSubmit">
                  <h3 class="font-bold text-3xl mb-4">Write a Review</h3>
                  <div class="flex items-center mb-4">
                    <p class="font-bold mr-4">Select a rating(required)</p>
                    <StarsRatings v-model="rating" :star-size="20"></StarsRatings>
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
              </template>
            </Accordion> -->

            <div class="flex items-center gap-4">
              <!-- <StarsRatings
                v-if="product.product_reviews.length !== 0"
                class="md:text-white"
                :rating="$getRatingAvg(product.product_reviews)"
                :read-only="true"
                :star-size="20"
                :increment="0.1"
              ></StarsRatings> -->

              <!-- <span class="mt-1">
                {{ $ratingGraph(product).totalCount }} reviews
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section__related-products">
      <div class="container">
        <h2 class="text-3xl font-semibold">Related products</h2>
        <VueSlickCarousel v-bind="relatedSettings">
          <ProductCard
            v-for="b in relatedProducts.filter((p) => p.title != product.title)"
            :key="b.slug"
            :product="b"
          />
        </VueSlickCarousel>
        <div class="flex flex-wrap gap-3"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueProductSlider } from "vue-product-slider";
export default {
  components: {
    VueProductSlider,
  },
  name: "MyComponent",

  async asyncData({ $content, params }) {
    const slug = params.slug || "index";
    const product = await $content("products", slug).fetch();
    let relatedProducts;
    if (product.type === "book") {
      relatedProducts = await $content("products")
        .where({ category: product.category })
        .fetch();
    }
    if (product.type === "art") {
      relatedProducts = await $content("products").where({ type: product.type }).fetch();
    }

    return {
      product,
      relatedProducts,
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
      settings: {
        edgeFriction: 0.35,
        arrows: true,
        dots: true,
        infinite: true,
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
      return this.$cloudinary.image.url(this.product.image, {
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
  &__image {
    .slick-prev {
      left: -33px;
    }
    .slick-prev,
    .slick-next {
      &::before {
        color: $black;
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

  &__meta {
    margin-top: 1rem;
    .vue-star-rating-rating-text {
      padding-top: 6px;
    }
    .snipcart-add-item {
      border-radius: 25px;
      padding: 1rem;
      font-size: $default-font-size;
      background: $black;
      color: $white;
      margin: 2rem 0;
      transition: $transition;

      &:hover {
        background: $primary-color;
      }
    }
  }
}
// .wishlist-icon {
//   height: 1.8rem;
//   width: 1.8rem;
// }
.section {
  &__product-contents {
    // margin-top: -30rem;
    position: relative;
    z-index: 4;
    .container {
      text-align: left;
    }
    .accordion__highlights button {
      background: lighten($grey, 30%);
    }

    .nuxt-content {
      & p {
        margin-bottom: 1rem;
      }
      & ul {
        @apply list-inside list-disc;
      }
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
</style>
