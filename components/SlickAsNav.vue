<template>
  <div>
    <div>
      <VueSlickCarousel ref="c1" :asNavFor="c2" :focusOnSelect="true">
        <div v-for="(item, index) in pictures" :key="index">
          <div class="w-2/3 mx-auto">
            <nuxt-img
              v-if="index == pictures.length - 1"
              :src="item"
              fit="fill"
              class="cursor-pointer rounded-lg"
            />
            <nuxt-img
              v-else
              provider="cloudinary"
              :src="item"
              fit="fill"
              class="cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div>
      <VueSlickCarousel
        ref="c2"
        :asNavFor="c1"
        :focusOnSelect="true"
        :slidesToShow="pictures.length - 1"
      >
        <div v-for="(item, index) in pictures" :key="index">
          <nuxt-img
            v-if="index == pictures.length - 1"
            :src="item"
            fit="fill"
            class="cursor-pointer rounded-lg"
          />
          <nuxt-img
            v-else
            provider="cloudinary"
            :src="item"
            fit="fill"
            class="cursor-pointer rounded-lg"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  props: {
    pictures: Array,
  },
  data: () => ({
    c1: undefined,
    c2: undefined,
  }),
  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
  },
  components: {
    VueSlickCarousel,
  },
};
</script>
