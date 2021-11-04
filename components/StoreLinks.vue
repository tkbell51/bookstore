<template>
  <aside>
    <ul class="store__list store__accordion-content flex flex-col mb-3">
      <li class="store__item my-1">
        <nuxt-link class="store__link pl-3" to="/store">All Books</nuxt-link>
      </li>
      <li v-for="category in categories" :key="category.slug" class="store__item my-1">
        <nuxt-link class="store__link pl-3" :to="`/store/category/${category.slug}`">
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      isOpen: true,
    };
  },
  async fetch() {
    this.categories = await this.$content("categories").fetch();
  },
  computed: {
    accordionClasses() {
      return {
        "is-closed": !this.isOpen,
        "is-primary": this.isOpen,
        "is-dark": !this.isOpen,
      };
    },
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply font-bold;
}
.store {
  &__accordion {
    @apply px-2 shadow;
    margin-bottom: 1rem;
    &-header {
      cursor: pointer;
    }
    &-body {
      padding: 0;
      max-height: 10em;
      overflow: hidden;
      transition: 0.3s ease all;
    }
  }
}
.is-closed .store__accordion-body {
  max-height: 0;
}
</style>
