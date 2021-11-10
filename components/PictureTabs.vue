<template>
  <div class="flex gap-2">
    <ul class="w-2/12">
      <li class="mb-2" v-for="(item, index) in pictures" :key="index">
        <div @click="selectTab(index)" :class="{ selected: index == selectedIndex }">
          <nuxt-img
            v-if="index == pictures.length - 1"
            :src="item"
            fit="fill"
            class="cursor-pointer rounded-lg"
          />
          <nuxt-img
            v-else
            provider="cloudinary"
            :src="item"
            fit="fill"
            class="cursor-pointer rounded-lg"
          />
        </div>
      </li>
    </ul>
    <div class="w-10/12">
      <transition name="fade">
        <nuxt-img
          v-if="selectedIndex == pictures.length - 1"
          :src="pictures[selectedIndex]"
          fit="fill"
        />
        <nuxt-img
          v-else
          provider="cloudinary"
          :src="pictures[selectedIndex]"
          fit="fill"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: Array,
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.selected {
  border-radius: 12px;
  border: 6px solid $secondary-color;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
