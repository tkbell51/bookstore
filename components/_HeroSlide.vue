<template>
  <div class="relative hero-slide">
    <div
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    >
      <div class="hero-slide__text">
        <p class="font-bold">Find books to help grow</p>
        <h1 class="hero-slide__title">{{ title }}</h1>
        <nuxt-link
          to="/store"
          class="hero-btn text-white z-10 hover:text-white py-2 px-4 rounded font-bold"
          >Show Now</nuxt-link
        >
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
  height: 50rem;
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

    p {
      text-transform: uppercase;
    }
  }

  &__title {
    white-space: nowrap;
    // font-size: calc(60px + (100 - 50) * (100vw - 400px) / (1200 - 400));
    font-size: 10rem;
  }
}
</style>
