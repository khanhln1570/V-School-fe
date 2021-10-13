<template>
  <div class="tableSearch d-flex align-center">
    <input
      class="tableSearch__input"
      type="text"
      :placeholder="placeHolder"
      :value="search"
      @input="handleInput($event)"
    />
    <img src="@/assets/images/search-fat.svg" alt="search" />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    search: {
      type: String,
      default: null,
    },
    searchLabel: {
      type: String,
      default: "Enter your search keyword...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeHolder: {
      type: String,
      default: null,
    },
  },
  created() {
    this.handleInput = _.debounce(this.handleInput, 1000);
  },
  methods: {
    // enterSearch() {
    //   return this.$parent.enterSearch();
    // }
    handleInput($event) {
      this.$emit("searchChange", $event);
    },
  },
  watch: {
    
  },
};
</script>
<style lang="scss" scoped>
.tableSearch {
  &__input {
    padding: 0 0.5rem;
    border-left: 1px solid #76839e;
  }

  &__input:focus {
    outline: none;
  }
}
</style>