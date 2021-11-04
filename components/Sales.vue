<template>
  <section class="section__sales">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3">
       
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section__sales {
  .sale-one,
  .sale-two,
  .sale-three {
    @apply mx-4;
    transition: $transition;
    &:hover {
      @apply shadow-lg;
      //   & > div {
      //     width: 100%;
      //     height: 100%;
      //   }
    }
  }
  .sale-one {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url('../assets/img/b2g-bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sale-two {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url('../assets/img/b2g-bg-5.jpg');
  }
  .sale-three {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url('../assets/img/b2g-color-bg.jpg');
  }
  .sale-one,
  .sale-two,
  .sale-three {
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    &__content {
      transition: $transition;

      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      color: $white;
    }
  }
}
</style>
