<template>
  <div class="body">
    <Header />
    <Nuxt class="content" />

    <!-- <Snipcart /> -->

    <Footer />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;

  //This defines what 1rem is
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  @include respond(tab-land) {
    font-size: 60%; //1rem = 9px, 9/16 = 56.25%
  }
  @include respond(tab-port) {
    font-size: 65%; //1rem = 8px, 8/16 = 50%
  }
  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12px, 12/16 = 75%
  }
}
body {
  background: $white;
}
html,
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: rgba($black, 0.8);
    opacity: 0;
    visibility: hidden;
    &.show {
      opacity: 0.8;
      visibility: visible;
    }
  }
  .content {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  transition: $transition;
  &:hover {
    color: $orange;
  }
}
.btn-transparent {
  transition: $transition;
  @apply bg-transparent font-semibold border border-white rounded-lg py-2 px-3 mt-3 shadow;

  :hover {
    background: $white;
    color: $black;
  }
}

::selection {
  background-color: $primary-color !important;
  color: $white;
}

h2 {
  @apply mb-3;
}

.grid-item {
  width: 14rem;
}
p,
a,
li {
  font-size: $default-font-size;
}
.heading-primary {
  backface-visibility: hidden;
  display: block;
  font-size: 5rem;
  font-weight: 400;
  @include respond(tab-port) {
    letter-spacing: 0.2rem;
    font-size: 4rem;
    line-height: 4.2rem;
  }
}
.heading-secondary {
  font-size: 3.5rem;
  // font-family: 'Montserrat SemiBold';
  margin-bottom: 2rem;
  // @include respond(tab-port) {
  //   font-size: 2rem;
  // }
  @include respond(phone) {
    font-size: 2.5rem;
  }
}
.heading-tertiary {
  font-size: $default-font-size;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.container {
  margin: 0 auto;
  @include respond(phone) {
    padding: 0 3rem;
  }
}
section {
  padding: 8rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
}
</style>
