<template>
  <nav class="nav flex justify-center py-2 uppercase">
    <ul class="flex">
      <li>
        <nuxt-link class="nav__link block border-b-2 border-transparent mx-5" to="/store">
          Store
        </nuxt-link>
      </li>
      <li>
        <div @mouseenter="ifHover = true" @mouseleave="ifHover = false" class="relative">
          <nuxt-link
            class="nav__link block border-b-2 border-transparent mx-5"
            to="/store"
          >
            Categories
            <Fas i="caret-down" />
          </nuxt-link>
          <transition name="dropdown-fade">
            <div v-if="ifHover" class="dropdown__menu rounded">
              <ul @click="ifHover = false">
                <li
                  v-for="link in bookCategories"
                  :key="link.name"
                  class="dropdown__item"
                >
                  <nuxt-link
                    class="dropdown__link whitespace-nowrap"
                    :to="`/store/category/${link.slug}`"
                  >
                    {{ link.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </li>
      <!-- <li>
        <nuxt-link
          class="nav__link block border-b-2 border-transparent mx-5"
          to="/blog"
        >
          Blog
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      ifHover: false,
      bookCategories: [],
      types: [],
    };
  },
  async fetch() {
    this.bookCategories = await this.$content("categories").fetch();
  },
};
</script>

<style lang="scss">
.nav {
  @include respond(tab-mid) {
    display: none;
  }
}
.dropdown {
  &__menu {
    overflow: hidden;
    position: absolute;
    z-index: 40;
    list-style-type: none;
    background: $white;
    box-shadow: 0px 3px 6px rgba($black, 0.5);
    @include respond(tab-port) {
      position: relative;
      width: 100%;
      box-shadow: none;
      background: lighten($primary-color, 10%);
    }
  }
  &__link {
    &,
    &:link,
    &:visited {
      text-decoration: none;
      font-size: $default-font-size;
      color: $black;
      display: block;
      text-align: left;
      padding: 1rem 4rem;
      @include respond(tab-port) {
        color: $white;
      }
    }
    &:hover,
    &:focus {
      background: $primary-color;
      color: $white;
      // border: 1px solid $primary-color;
      @include respond(tab-port) {
        color: $secondary-color;
      }
    }
    &:active {
      background: darken($primary-color, 10%);
    }
  }
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
