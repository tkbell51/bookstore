<template>
  <div
    v-on-clickaway="closeMenu"
    class="relative mx-5 inline-block text-left text-gray-800"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          id="options-menu"
          type="button"
          class="category__btn uppercase"
          aria-haspopup="true"
          aria-expanded="true"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span> Ebooks</span>
          <svg-icon name="arrow" />
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          v-for="category in categories"
          :key="category.name"
          class="bg-white shadow-xs px-4 py-4"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <NuxtLink
            class="px-4 py-4 whitespace-nowrap"
            :to="`/store/category/${category.slug}`"
            @click.native="isMenuOpen = false"
          >
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      categories: [],
    };
  },
  async fetch() {
    this.categories = await this.$content("categories").fetch();
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.category__btn {
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  svg {
    height: 1.8rem;
    width: 1.8rem;
    margin-left: 6px;
  }
}
</style>
