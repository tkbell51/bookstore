<template>
  <div class="page">
    <div class="overlay"></div>
    <div class="body">
      <Header />
      <div class="content store-content">
        <StoreHeader />
        <div class="container">
          <div class="md:flex gap-8">
            <StoreLinks class="md:w-1/5" />
            <Nuxt class="md:w-4/5" />
          </div>
        </div>
        <!-- <Snipcart /> -->
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.store-content {
  margin-bottom: 3rem;
}
</style>
