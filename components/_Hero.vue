<template>
  <div class="home-hero">
    <div class="container">
      <VueSlickCarousel v-bind="settings" class="hero__carousel col-span-4">
        <HeroSlide title="Family" image="family" />
        <HeroSlide title="Relationships" image="relationship" />
        <HeroSlide title="Healthy Habits" image="healthy" />
        <HeroSlide title="Financially" image="finance" />
        <HeroSlide title="Spiritually" image="spiritual" />
        <HeroSlide title="Mentally" image="mental" />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        fade: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-hero {
  background: center / cover no-repeat url("../assets/img/b2g-header-bg.jpg");
  .container {
    height: inherit;
  }
  .hero__carousel {
    padding: 3rem 0;
    .hero-btn {
      background: $orange;
    }
    .slick__svg::before {
      fill: $white !important;
    }

    .slick-next {
      right: 1%;
    }
    .slick-prev {
      left: 1%;
      z-index: 1;
    }

    .slick-list,
    .slick-trac,
    .slick-slide,
    .slick-slide > div {
      height: inherit;
    }
  }
}
.sales__carousel {
  .sale {
    @apply rounded-xl shadow flex justify-center items-center;
    height: 30rem;
    transition: $transition;
    background-repeat: no-repeat;
    background-size: cover;
    &.sale-one {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url("../assets/img/b2g-bg-1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sale-two {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url("../assets/img/b2g-bg-5.jpg");
    }
    &.sale-three {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url("../assets/img/b2g-color-bg.jpg");
    }
    &__content {
      transition: $transition;

      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      color: $white;
    }
    &:hover {
      @apply shadow-lg;
    }
  }
}
</style>
