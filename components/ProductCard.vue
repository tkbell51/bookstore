<template>
  <div :key="product.slug" class="product shadow hover:shadow-lg p-1">
    <div class="product__top relative">
      <nuxt-link
        :to="`/store/${product.slug}`"
        class="product__img-link shadowrelative flex justify-center items-center"
      >
        <img
          :class="product.type === 'art' ? 'product__img--art' : 'product__img'"
          :src="src"
          :alt="product.title"
        />
        <svg-icon class="product__search absolute rounded-full" name="search" />
      </nuxt-link>
    </div>
    <div class="product__bottom">
      <nuxt-link :to="`/store/${product.slug}`" class="product__title font-bold">
        {{ product.title }}
      </nuxt-link>
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
  width: 23rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid $light-grey;
  justify-content: space-between;
  border-radius: 5px;
  margin-right: 1rem;
  padding: 2rem 3rem;
  overflow: hidden;
  position: relative;

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
