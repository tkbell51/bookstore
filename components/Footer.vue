<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top py-8">
        <div>
          <Logo color="white" class="footer__logo" />
        </div>
        <ul class="footer__social--menu flex items-center justify-center">
          <li
            class="footer__social--item mx-5"
            v-for="link in socialLinks"
            :key="link.name"
          >
            <a class="footer__social--link" :href="link.url" target="_blank">
              <Fab class="footer__social--icon" :i="link.name" />
              <span class="hidden"
                >Books 2 Grow <span class="capitalize">{{ link.name }}</span></span
              >
            </a>
          </li>
        </ul>
        <ul class="flex justify-center items-center">
          <li>
            <NuxtLink class="mx-4 text-gray-500" to="/digital-shopping"
              >Digital Shopping</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="mx-4 text-gray-500" to="/privacy-policy"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="mx-4 text-gray-500" to="/refund-policy"
              >Refund Policy</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom text-white py-2">
      <div class="container">
        <div class="flex justify-between items-center">
          <p class="white mx-4">
            &copy; {{ new Date().getFullYear() }} Designed by
            <a href="https://bellwebagency.com" target="_blank" title="Bell Web Agency"
              >Bell Web Agency</a
            >
          </p>

          <div class="flex justify-center">
            <svg-icon name="paypal" class="h-14 w-14" />
            <svg-icon name="mastercard" class="h-14 w-14" />
            <svg-icon name="visa" class="h-14 w-14" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      error: null,
      socialLinks: [
        {
          name: "pinterest",
          url: "https://pin.it/3yVieTm",
        },
        { name: "instagram", url: "https://www.instagram.com/books.2grow/" },
      ],
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async emailSubmit(e) {
      e.preventDefault();
      try {
        await this.$strapi.$emails.create({ name: this.email });
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $light-black;
  position: relative;
  &__top {
    h4 {
      @apply font-bold uppercase;
    }
    li {
      @apply my-2;
    }
    a,
    .snipcart-checkout {
      color: $footer-text;
      transition: $transition;
      &:hover {
        color: $orange;
      }
    }
  }
  &__social {
    &--icon {
      @apply my-4;
      font-size: 3rem;
    }
  }
  &__logo {
    width: 20rem;
  }
  .email-cta {
    &__title {
      color: $footer-text;
    }
  }
  .email-btn {
    background: $orange;
  }
  .email-input {
    margin: auto;
  }
  &__bottom {
    background: $black;
  }
}
</style>
