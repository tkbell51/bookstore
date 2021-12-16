<template>
  <div :key="product.slug" class="product shadow hover:shadow-lg p-1 mx-auto">
    <div class="product__top relative">
      <nuxt-link
        :to="`/store/${product.slug}`"
        class="product__img-link shadow relative flex justify-center items-center"
      >
        <nuxt-img
          provider="cloudinary"
          class="product__img"
          :src="product.image"
          :alt="product.title"
          fit="fill"
        />
        <svg-icon class="product__search absolute rounded-full" name="search" />
      </nuxt-link>
    </div>
    <div class="product__bottom">
      <h4>
        <nuxt-link :to="`/store/${product.slug}`" class="product__title font-bold">
          {{ product.title }}
        </nuxt-link>
      </h4>
      <p>${{ product.price }}</p>
    </div>

    <button
      class="snipcart-add-item snipcart-add-item product__btn w-full py-4 absolute"
      :data-item-id="product.slug"
      :data-item-file-guid="product.snipcart"
      :data-item-price="product.price"
      :data-item-description="product.short"
      :data-item-image="src"
      :data-item-name="product.title"
      :data-item-categories="product.category"
    >
      Add to Cart
    </button>
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
  computed: {
    src() {
      return this.$cloudinary.image.url(this.product.image, {
        gravity: "auto:subject",
        width: "986",
        height: 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  transition: all 0.3s ease;
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 2rem 2rem;
  overflow: hidden;
  position: relative;
  background: $white;
  @include respond(tab-port) {
    width: 20rem;
    padding: 2rem 1rem;
  }
  &__type {
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 5;
  }
  &:hover .product__hover {
    bottom: 0;
  }

  &__top {
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    &:hover .product__search {
      opacity: 1;
    }
  }
  &__img {
    // width: 30rem;
    height: 22rem;
  }
  &__search {
    fill: $white;
    background: $orange;
    width: 60px;
    height: 60px;
    padding: 10px 15px;
    transition: $transition;
    opacity: 0;
  }
  &__bottom {
    transition: $transition;
    background: $white;

    // padding: 0 3rem;
  }
  &__title {
    margin: 1rem 0;
    transition: $transition;
    display: inline-block;
    &:hover,
    &:focus {
      color: $orange;
    }
  }
  &__price {
    color: $orange;
    font-size: 3rem;
  }
  &__btn {
    right: 0;
    left: 0;
    bottom: 0;
    background: $orange;
    border-radius: 0 0 5px 5px;
    margin-top: 1rem;
    font-size: $default-font-size;
    transition: $transition;
    color: $white;
    opacity: 0;
    &:hover {
      background: $primary-color;
    }
    &:active {
      background: darken($primary-color, 10%);
    }
  }
  .book {
    background: $blue;
  }
  .art {
    background: $yellow;
  }
  &:hover {
    background: $white;
    align-self: flex-start;
    & .product__bottom {
      transform: translateY(-4rem);
    }
    & .product__btn {
      opacity: 1;
    }
  }
}
</style>
