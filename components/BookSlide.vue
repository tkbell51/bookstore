<template>
  <div :key="product.slug" class="product__slide flex items-center">
    <div
      class="product__slide--bg"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${src})`,
      }"
    ></div>
    <div
      class="product__slide--content flex items-center justify-center top-50 gap-8 mt-6"
    >
      <div class="product__slide-img">
        <img :src="src" :alt="`${product.title}`" class="shadow-xl" />
      </div>
      <div class="text-white mt-10 w-1/2">
        <h3 class="text-4xl font-bold mb-4">{{ product.title }}</h3>
        <!-- <StarsRatings
          v-if="product.product_reviews.length != 0"
          :rating="$getRatingAvg(product.product_reviews)"
          :read-only="true"
          :star-size="20"
          :increment="0.5"
          :show-rating="false"
        ></StarsRatings> -->
        <p class="mb-4 hidden md:block">{{ product.description }}</p>
        <nuxt-link
          :key="product.slug"
          class="hover-btn my-3 inline-block"
          :to="`/store/${product.slug}`"
          >Shop Now</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      productType: {},
    };
  },

  computed: {
    src() {
      return this.$cloudinary.image.url(this.product.image, {
        gravity: "auto:subject",
        width: "300",
        height: 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product__slide {
  width: 40rem;
  position: relative;
  overflow: hidden;
  &--content {
    position: absolute;
    top: 57%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 2;

    .product__category {
      font-size: $default-font-size;
      text-transform: uppercase;
    }
  }
  &-img {
    img {
      width: 22rem;
    }
  }
  &--bg {
    position: absolute;
    height: 102%;
    width: 102%;
    z-index: 0;

    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    filter: blur(15px);
    transform: scale(1.5);
  }
  .vue-star-rating {
    height: 1rem !important;
    margin-bottom: 1rem;
  }
}
</style>
