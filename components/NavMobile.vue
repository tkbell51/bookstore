<template>
  <div v-if="showNav" class="mobile-nav">
    <ul class="mobile-nav__menu">
      <li class="mobile-nav__item border-t border-grey-400" @click="closeMenu">
        <NuxtLink class="mobile-nav__link" to="/store">Store</NuxtLink>
      </li>
      <li class="mobile-nav__item border-t border-grey-400" @click="closeMenu">
        <NuxtLink class="mobile-nav__link" to="/store">All Books</NuxtLink>
      </li>
      <li
        class="mobile-nav__item border-t border-grey-400"
        v-for="(category, index) in bookCategories"
        :key="index"
        @click="closeMenu"
      >
        <NuxtLink class="mobile-nav__link" :to="`/store/category/${category.slug}`">
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["showNav"],
  data() {
    return {
      bookCategories: [],
    };
  },
  async fetch() {
    this.bookCategories = await this.$content("categories").fetch();
  },
  methods: {
    closeMenu() {
      this.$parent.toggleMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  position: fixed;
  background: rgba($black, 0.95);
  z-index: 9;
  top: 12rem;
  right: 0;
  width: 100%;
  overflow-y: auto;
  .logo {
    display: block;
    width: 13rem;
    margin: 0 auto;
  }
  &__menu {
    // display: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__link {
    &,
    &:link,
    &:visited {
      text-decoration: none;
      font-size: $default-font-size;
      color: $white;
      display: block;
      text-align: left;
      padding: 2rem 4rem;
    }
    &:hover,
    &:focus {
      background: $primary-color;
    }
  }
  &__link &__cta {
    margin-bottom: 0;
  }
  &__icon {
    font-size: 4rem;
    color: $white;
    &:hover,
    &:focus {
      background: $primary-color;
    }
  }
}
</style>
