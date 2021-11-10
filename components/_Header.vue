<template>
  <header class="header relative">
    <div class="header__top">
      <div class="container">
        <div class="nav">
          <div class="flex items-center justify-between flex-wrap p-2">
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
              <svg-icon name="menu" class="mobile-menu" />
            </label>
            <input type="checkbox" class="hidden" ide="menu-toggle" />
            <div class="flex items-center">
              <nuxt-link class="header__logo flex" to="/">
                <Logo color="black" />
                <span>Books2Grow</span>
              </nuxt-link>
            </div>
            <Search />
            <div class="flex justify-between gap-20">
              <button href="#" class="snipcart-customer-signin block flex items-center">
                <svg-icon class="header__user mr-2" name="clear-user" />
                My Account
              </button>
              <button class="snipcart-checkout flex items-center buy-btn mx-2">
                <Cart color="black" />
                <div class="ml-4">
                  <span class="whitespace-nowrap flex items-center">
                    My Cart -
                    <span class="snipcart-items-count block text-left mr-1"></span>
                    item
                  </span>

                  <span class="snipcart-total-price block text-left"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <NavLink />
    </div>
  </header>
</template>

<script>
import CategoryDropdown from "./CategoryDropdown.vue";
export default {
  components: { CategoryDropdown },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  z-index: 5;
  background: $white;
  &__top {
    border-bottom: 1px solid rgba($black, 0.3);
  }
  &__user {
    fill: $black;
    height: 3rem;
    width: 3rem;
  }
  &__bottom {
    @apply py-2;
    &--flex {
      display: flex;
      align-items: center;
    }
  }

  &__search,
  .mobile-menu {
    height: 3rem;
    width: 3rem;
  }
  #menu-toggle:checked + #menu {
    display: block;
  }
  &__logo {
    // display: inline-block;
    width: 6rem;
  }
  // .buy-btn {
  //   margin-left: auto;
  // }

  .cart {
    position: relative;
  }
  .nuxt-link-exact-active {
    color: $black;
  }
}
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
