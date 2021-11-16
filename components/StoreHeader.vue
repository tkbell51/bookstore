<template>
  <section class="store-hero">
    <p v-if="$fetchState.pending">Fetching Featured Books...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <VueSlickCarousel v-else v-bind="settings" class="feature-book__carousel">
      <BookSlide v-for="book in featureBooks" :key="book.slug" :product="book" />
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featureBooks: [],
      settings: {
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        centerMode: true,
        centerPadding: "300px",
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              centerPadding: "200px",

              // slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              centerPadding: "100px",

              // slidesToShow: 3,
            },
          },
          {
            breakpoint: 765,
            settings: {
              arrows: false,

              centerMode: false,
              slidesToShow: 1,
            },
          },
        ],
      },

      error: null,
    };
  },
  async fetch() {
    this.featureBooks = await this.$content("products").where({ featured: true }).fetch();
  },
};
</script>

<style lang="scss">
.store-hero {
  height: 40rem;
  width: 100%;
  margin-bottom: 4rem;
  margin-top: 0;
  padding-top: 0;
  .container {
    height: inherit;
  }
  .feature-book__carousel {
    height: inherit;
    .hero-btn {
      background: $orange;
      @apply py-2 px-4 rounded-xl font-bold;
    }
    .slick-prev,
    .slick-next {
      z-index: 1;
      &::before {
        font-size: 4rem;
      }
    }
    .slick-prev {
      left: 25rem;
      @include respond(tab-land) {
        left: 18rem;
      }
      @include respond(tab-mid) {
        left: 10rem;
      }
    }
    .slick-next {
      right: 30rem;
      @include respond(tab-land) {
        right: 22rem;
      }
      @include respond(tab-mid) {
        right: 14rem;
      }
    }

    .slick-dots {
      bottom: 3%;
      // text-align: right;
      // right: 26%;
      li button:before {
        color: $white;
        font-size: 1.5rem;
      }
    }
    .slick-list {
      height: inherit;
      .slick-track {
        height: inherit;
        .slick-slide {
          height: inherit;
          div {
            height: inherit;
          }
        }
      }
    }
  }
}
</style>
