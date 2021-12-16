<template>
  <header class="header relative shadow-md">
    <div class="header__sale">
      <p class="text-center">Buy 3, get 1 FREE, STOREWIDE</p>
    </div>
    <div class="container">
      <div
        class="flex items-center justify-between flex-wrap md:flex-nowrap p-2 relative"
      >
        <div class="nav__mobile" @click="toggleMenu">
          <span></span>
        </div>
        <div class="flex items-center">
          <nuxt-link class="header__logo flex" to="/">
            <Logo color="black " class="hidden md:block" />
            <MobileLogo class="mobile md:hidden" />
          </nuxt-link>
        </div>
        <NavLink />

        <Search class="header__search order-last md:order-none" />
        <div class="flex justify-between gap-1 md:gap-10">
          <!-- <button
            href="#"
            class="snipcart-customer-signin block flex items-center snipcart-btn"
          >
            <svg-icon class="header__user" name="clear-user" />
          </button> -->
          <button
            class="snipcart-checkout flex items-center buy-btn mx-2 relative snipcart-btn"
          >
            <Cart color="black" />
            <span
              class="snipcart-items-count rounded-full p-4 h-8 w-8 flex justify-center items-center"
            ></span>
          </button>
        </div>
      </div>
    </div>
    <NavMobile :show-nav="showNav" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      // mobileView: true,
      showNav: false,
    };
  },
  mounted() {},
  methods: {
    toggleMenu() {
      this.showNav = !this.showNav;
      const navMobile = document.querySelector(".nav__mobile");
      const overlay = document.querySelector(".overlay");
      const body = document.querySelector("body");
      // const hamMenu = document.querySelector('.nav__menu')
      // hamMenu.classList.toggle('show')
      overlay.classList.toggle("show");
      navMobile.classList.toggle("clicked");
      body.classList.toggle("overflow");
      // event.stopPropagation()
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  z-index: 5;
  background: #fff;
  padding: 0 0 1rem 0;

  &__user {
    fill: $black;
    height: 2.5rem;
    width: 2.5rem;
  }

  &__sale {
    background: $light-black;
    color: $white;
    padding: 0.5rem 0;
  }

  .mobile-menu {
    display: none;
    height: 2.5rem;
    width: 2.5rem;
    @include respond(tab-mid) {
      display: block;
    }
  }
  #menu-toggle:checked + #menu {
    display: block;
  }
  &__logo {
    svg {
      width: 12rem;
    }
  }

  .cart {
    position: relative;
  }
  .nuxt-link-exact-active {
    color: $black;
  }
  .nav__mobile {
    display: none;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    border-radius: 4px;
    z-index: 10;
    &:hover {
      cursor: pointer;
    }
    span {
      position: relative;
      margin-top: 9px;
      margin-bottom: 9px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -15px;
      margin-top: -1.5px;
      &,
      &:before,
      &:after {
        display: block;
        width: 30px;
        height: 4px;
        background-color: $black;
        outline: 1px solid transparent;
        -webkit-transition-property: background-color, -webkit-transform;
        -moz-transition-property: background-color, -moz-transform;
        -o-transition-property: background-color, -o-transform;
        transition-property: background-color, transform;
        -webkit-transition-duration: 0.3s;
        -moz-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
      }
      &:before,
      &:after {
        position: absolute;
        content: "";
      }
      &:before {
        top: -9px;
      }
      &:after {
        top: 9px;
      }
    }
    &.clicked span {
      background-color: transparent;
      &::before {
        -webkit-transform: translateY(9px) rotate(45deg);
        -moz-transform: translateY(9px) rotate(45deg);
        -ms-transform: translateY(9px) rotate(45deg);
        -o-transform: translateY(9px) rotate(45deg);
        transform: translateY(9px) rotate(45deg);
      }
      &::after {
        -webkit-transform: translateY(-9px) rotate(-45deg);
        -moz-transform: translateY(-9px) rotate(-45deg);
        -ms-transform: translateY(-9px) rotate(-45deg);
        -o-transform: translateY(-9px) rotate(-45deg);
        transform: translateY(-9px) rotate(-45deg);
      }
    }
    @include respond(tab-port) {
      display: block;
      position: relative;
      top: 0;
      right: 0;
    }
  }
  .snipcart-items-count {
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    top: 0;
    right: -5px;
    background: $secondary-color;
  }
  .snipcart-btn {
    @apply rounded-full p-3;
    transition: $transition;
    &:hover {
      background: $very-light-grey;
    }
    &:active {
      background: $very-light-grey;
    }
  }
}
</style>
