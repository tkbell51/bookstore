<template>
  <section class="section__store-info my-0 py-8">
    <div class="container">
      <div class="store-info grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          class="store-info__item flex flex-row md:flex-col lg:flex-row items-center gap-5"
        >
          <Fas i="rocket" class="md:mr-auto lg:mr-0" />
          <div>
            <h5 class="font-bold">Instand Downloads</h5>
            <p>No waiting on your download email after purchase</p>
          </div>
        </div>

        <div
          class="store-info__item flex flex-row md:flex-col lg:flex-row items-center gap-5"
        >
          <Fas i="credit-card" class="md:mr-auto lg:mr-0" />
          <div>
            <h5 class="font-bold">Frequent New Arrivals</h5>
            <p>Check back every month for new arrivals</p>
          </div>
        </div>
        <div
          class="store-info__item flex flex-row md:flex-col lg:flex-row items-center gap-5"
        >
          <Fas i="star" class="md:mr-auto lg:mr-0" />
          <div>
            <h5 class="font-bold">Payment Method</h5>
            <p>100% secured payment options</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section__store-info {
  background: lighten($very-light-grey, 5%);
  .store-info {
    // border-top: 1px solid rgba($grey, 0.5);
    padding: 3rem 0;
    &__item {
      padding: 0 6rem;
    }
    h5 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.3rem;
    }
    svg {
      color: rgba($grey, 0.5);
      height: 4rem;
      width: 4rem;
    }
  }
}
</style>
