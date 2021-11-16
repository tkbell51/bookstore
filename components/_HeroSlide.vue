<template>
  <div class="relative hero-slide">
    <div
      class="rounded-lg shadow-lg"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    >
      <div class="hero-slide__text">
        <p class="font-bold">Find books to help grow</p>
        <h1 class="hero-slide__title lg:whitespace-nowrap">{{ title }}</h1>
        <nuxt-link to="/store" class="hover-btn">Show Now</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  computed: {
    backgroundURL() {
      return require(`~/assets/img/hero-${this.image}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-slide {
  height: 40rem;
  border-radius: 10px;
  & > div {
    height: 100%;
  }
  .bg-white {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__text {
    @include absCenter;
    color: $white;
    text-align: center;
    z-index: 10;
    p {
      text-transform: uppercase;
    }
  }

  &__title {
    font-size: clamp(6rem, 12vw, 10rem);
    margin: 2rem auto 8%;
    line-height: 7rem;
    // font-size: 10rem;
  }
  .hover-btn {
    background: rgba($black, 0.5);
    backdrop-filter: blur(26px);
    &:hover {
      color: $white;
      background: $secondary-color;
      border: 1px solid $secondary-color;
    }
  }
}
</style>
