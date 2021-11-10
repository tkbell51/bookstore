<template>
  <nav class="relative flex justify-center py-2 uppercase">
    <ul class="flex">
      <li v-for="(item, index) in navLinks" :key="index">
        <div
          v-if="item.submenu != undefined"
          @mouseenter="item.hover = true"
          @mouseleave="item.hover = false"
        >
          <NuxtLink
            class="header__link block border-b-2 border-transparent mx-5"
            :to="item.link"
          >
            {{ item.title }}
          </NuxtLink>
          <transition name="dropdown-fade">
            <ul v-if="item.hover" class="dropdown__menu" @click="item.hover = false">
              <li
                v-for="(sublink, index) in item.submenu"
                :key="index"
                class="dropdown__item"
              >
                <nuxt-link
                  class="dropdown__link whitespace-nowrap"
                  :to="`/store/category/${sublink.slug}`"
                >
                  {{ sublink.name }}
                </nuxt-link>
              </li>
            </ul>
          </transition>
        </div>
        <nuxt-link
          v-else
          class="header__link block border-b-2 border-transparent mx-5"
          :to="item.link"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      bookCategories: [],
      navLinks: [
        { title: "Home", link: "/" },
        { title: "Store", link: "/store" },
        {
          title: "Ebooks",
          link: "/store/books",
          hover: false,
          submenu: [],
        },
        { title: "Wall Art", link: "/store/art" },
      ],
    };
  },
  async fetch() {
    this.bookCategories = await this.$content("categories").fetch();
    this.bookCategories.filter((b) => this.navLinks[2].submenu.push(b));
  },
};
</script>

<style lang="scss">
.header {
  &__menu {
  }

  &__link {
    @apply font-semibold;
    transition: $transition;
    position: relative;
    &:hover {
      color: $orange;
    }
  }
}
.dropdown {
  position: relative;
  &:hover,
  &:focus {
    color: $secondary-color;
    cursor: pointer !important;
    @include respond(phone) {
      background: $primary-color;
    }
  }
  &__menu {
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    z-index: 40;
    list-style-type: none;
    background: $white;
    box-shadow: 0px 3px 6px rgba($black, 0.5);
    // width: 24rem;
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
