<template>
  <div class="wrapper my-8">
    <button class="accordion px-6 py-4 shadow" @click="toggle">
      <span class="accordion__title">
        <slot name="title"></slot>
      </span>
      <svg-icon
        :class="{ rotate: show }"
        class="accordion__icon fill-current"
        name="arrow"
      />
    </button>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="show" class="accordion__content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
    },
  },
};
</script>

<style lang="scss">
.accordion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  transition: $transition;
  width: 100%;

  &__icon {
    transform: rotate(0deg);
    height: 15px;
    width: 15px;
    transition: $transition;
    &.rotate {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
  }

  &__content {
    @apply mt-4;
    overflow: hidden;
    transition: $transition;
    padding: 0 2rem;

    p,
    a {
      margin-bottom: 1rem;
    }
  }

  &:hover {
    background: lighten($grey, 30%);
  }
  &:active {
    background: lighten($grey, 20%);
  }
}
</style>
