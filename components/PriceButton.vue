<template>
  <button
    class="snipcart-add-item snipcart-add-item price-btn"
    :data-item-id="book.slug"
    :data-item-file-guid="book.snipcart"
    :data-item-price="book.price"
    :data-item-description="book.short"
    :data-item-image="src"
    :data-item-name="book.title"
    :data-item-categories="book.category"
  >
    <span class="price-btn__price">${{ book.price }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76.142"
      height="37.395"
      viewBox="0 0 76.142 37.395"
      class="price-btn__btn"
    >
      <path
        id="Path_19"
        data-name="Path 19"
        d="M18.7,18l18.7,17.959V94.142H0V35.959Z"
        transform="translate(94.142) rotate(90)"
        fill="#f1802e"
      />
      <path
        id="Path_20"
        data-name="Path 20"
        d="M.829.369a.713.713,0,0,0,0,1.425H3.567L6.01,13.351c.1.435.381.8.74.794H18.592a.713.713,0,1,0,0-1.425H7.327l-.3-1.425H19.54a.733.733,0,0,0,.688-.557l1.658-7.126a.745.745,0,0,0-.688-.868H5.225L4.84.933a.734.734,0,0,0-.7-.564Zm4.692,3.8h3.7l.355,2.138h-3.6Zm5.151,0h4.47l-.355,2.138h-3.76Zm5.921,0H20.3l-.5,2.138H16.239ZM6.276,7.732H9.814L10.17,9.87H6.728Zm4.988,0h3.286L14.2,9.87H11.62Zm4.737,0h3.471l-.5,2.138H15.646ZM9.118,14.62A2.375,2.375,0,1,0,11.487,17,2.382,2.382,0,0,0,9.118,14.62Zm7.105,0A2.375,2.375,0,1,0,18.592,17,2.382,2.382,0,0,0,16.224,14.62ZM9.118,16.045a.95.95,0,1,1-.947.95A.938.938,0,0,1,9.118,16.045Zm7.105,0a.95.95,0,1,1-.947.95A.938.938,0,0,1,16.224,16.045Z"
        transform="translate(30.904 8.828)"
        fill="#fff"
      />
      <g id="Group_4" data-name="Group 4" transform="translate(396.232 212.33)">
        <path
          id="Path_21"
          data-name="Path 21"
          d="M0,0V11.734"
          transform="translate(-376.105 -199.5)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-width="3"
        />
        <path
          id="Path_22"
          data-name="Path 22"
          d="M0,0V10.79"
          transform="translate(-370.71 -193.633) rotate(90)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-width="3"
        />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    src() {
      return this.$cloudinary.image.url(this.book.image, {
        gravity: "auto:subject",
        width: "986",
        height: 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.price-btn {
  display: flex;
  align-items: center;
  width: 100%;
  &__price {
    padding: 0.5rem 2rem;
    background-color: lighten($secondary-color, 30%);
    border-radius: 5px;
    color: $secondary-color;
    font-size: $default-font-size;
    width: 80%;
    transition: $transition;
  }
  &__btn {
    margin-left: -1.5rem;
    height: 2.5rem;
    transition: $transition;
  }
  &:hover .price-btn__price {
    border: 1px solid $primary-color;
    background-color: lighten($primary-color, 10%);
    color: $white;
  }
  &:hover .price-btn__btn #Path_19 {
    fill: $primary-color;
  }
}
</style>
