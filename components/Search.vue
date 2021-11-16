<template>
  <ais-instant-search :searchClient="searchClient" index-name="books">
    <ais-configure :attributesToSnippet="['bodyPlainText']" :hits-per-page.camel="5">
      <ais-autocomplete v-on-clickaway="onClickOutside">
        <div slot-scope="{ currentRefinement, indices, refine }">
          <div class="search__container">
            <svg-icon class="search__icon" name="search" />
            <input
              type="search"
              ref="searchInput"
              :placeholder="searchPlaceholder"
              class="w-full py-2 px-3"
              :value="currentRefinement"
              @input="refine($event.currentTarget.value)"
              autocomplete="off"
              @focus="showResults = true"
              @keydown.up.prevent="highlightPrevious"
              @keydown.down.prevent="highlightNext(indices[0].hits.length)"
              @keydown.enter="goToDoc(indices)"
            />
          </div>
          <div
            v-show="currentRefinement.length && showResults"
            class="search__results absolute z-10 transform mt-3"
          >
            <div class="rounded-md shadow-lg overflow-hidden">
              <div class="relative grid gap-6 bg-white">
                <div
                  v-if="currentRefinement"
                  v-for="section in indices"
                  :key="section.objectID"
                  class="divide-y divide-blue-900"
                >
                  <nuxt-link
                    :to="`/store/${hit.objectID}`"
                    v-for="(hit, index) in section.hits"
                    :key="hit.objectID"
                    class="result__link block col-span-2 py-2 transition ease-in-out duration-150 px-5 py-6"
                    :class="{ 'bg-gray-300': isCurrentIndex(index) }"
                  >
                    <div class="px-2" @mouseover="highlightedIndex = index">
                      <ais-highlight
                        attribute="title"
                        :hit="hit"
                        class="block font-medium title"
                      />
                      <ais-snippet
                        attribute="bodyPlainText"
                        :hit="hit"
                        class="block font-base"
                      />
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-configure>
  </ais-instant-search>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import algoliasearch from "algoliasearch/lite";
export default {
  mixins: [clickaway],

  data() {
    return {
      searchClient: algoliasearch("76BK156RW5", "9d6c2127fb777e4e60ef5c8e199e5185"),

      showResults: false,
      highlightedIndex: -1,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener("keydown", (event) => {
        if (event.metaKey && event.key === "k") {
          this.$refs.searchInput.focus();
          event.preventDefault();
        }
      });
    });
  },
  watch: {
    $route() {
      this.showResults = false;
      this.$refs.searchInput.blur();
    },
  },
  computed: {
    searchPlaceholder() {
      if (navigator.appVersion.indexOf("Mac") !== -1) {
        return "Search - ⌘k to focus";
      } else if (navigator.appVersion.indexOf("Win") !== -1) {
        return "Search - Win + k to focus";
      } else {
        return "Search";
      }
    },
  },
  methods: {
    onClickOutside() {
      this.showResults = false;
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1;
      }
    },
    highlightNext(resultsCount) {
      if (this.highlightedIndex < resultsCount - 1) {
        this.highlightedIndex += 1;
      }
    },
    isCurrentIndex(index) {
      return index === this.highlightedIndex;
    },
    goToDoc(indices) {
      this.$nuxt.$router.push(indices[0].hits[this.highlightedIndex].objectID);
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.ais-InstantSearch {
  width: 45%;
  @include respond(tab-port) {
    flex: 100%;
    margin: 0.5rem 0;
  }
}
.search {
  &__container {
    font-size: $default-font-size;
    border-radius: 25px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background: darken(#f7f7f7, 10%);
    input {
      background: darken(#f7f7f7, 10%);
    }
  }
  &__icon {
    width: 1.8rem;
    height: 1.8rem;
    // float: left;
  }
  &__results {
    flex: 100%;
    max-width: 34rem;
  }
}
.result__link {
  &:hover {
    color: $black;
  }
}
</style>
