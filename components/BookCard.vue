<template>
  <div :key="book.slug" class="book hover:shadow-lg p-1">
    <div class="book__top relative">
      <nuxt-link
        :to="`/store/${book.slug}`"
        class="book__img-link shadowrelative flex justify-center items-center"
      >
        <img class="book__img" :src="src" :alt="book.title" />
        <svg-icon class="book__search absolute rounded-full" name="search" />
      </nuxt-link>
    </div>
    <div class="book__bottom">
      <nuxt-link :to="`/store/${book.slug}`" class="book__title font-bold">
        {{ book.title }}
      </nuxt-link>

      <PriceButton :book="book" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    src() {
      return this.$cloudinary.image.url(this.book.image, {
        gravity: "auto:subject",
        width: "986",
        height: 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.book {
  transition: all 0.3s ease;
  width: 28rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid $light-grey;
  justify-content: space-between;
  border-radius: 5px;
  margin-right: 1rem;
  padding: 2rem 3rem;

  &:hover .book__hover {
    bottom: 0;
  }

  &__top {
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    &:hover .book__search {
      opacity: 1;
    }
  }
  &__bottom {
    // padding: 0 3rem;
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
  &__hover {
    backface-visibility: hidden;

    position: absolute;
    bottom: -70px;
    left: 0;
    background: $orange;
    color: $white;
    width: 100%;

    transition: $transition;
    &:hover {
      background: $green;
    }
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
  &__img {
    // width: 30rem;
    height: 30rem;
  }
  &__category {
    background: $dark-grey-blue;
  }
  &:hover {
    background: $white;
  }
}
</style>
