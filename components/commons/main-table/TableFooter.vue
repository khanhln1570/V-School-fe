<template>
  <v-container class="max-width px-0" v-if="showFooter">
    <v-row
      no-gutters
      align="center"
      class="d-flex justify-space-between flex-sm-row flex-column"
    >
      <v-col cols="6">
        <main-select
          item-text="label"
          item-value="value"
          maxWidth="100"
          v-model="limit"
          :items="footerSelectItem"
          label="Hiển thị"
          id="limit"
          v-if="footerSelectItem.length"
        ></main-select>
      </v-col>
      <v-col
        md="6"
        class="d-flex justify-center justify-sm-end"
        v-if="showPagination"
      >
        <v-pagination
          :disabled="disabled"
          class="my-4"
          v-model="currentPage"
          :length="pageCount"
          total-visible="7"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
  },
  props: {
    showPagination: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    footerSelectItem: {
      type: Array,
      default: () => [10, 25, 50, 100],
    },
    perpage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      limit: this.perpage || 10,
      currentPage: this.page
    }
  },
  methods: {
    toInt(value) {
      if (!value) return 0;

      return parseInt(value, 10);
    },
    changePagination(page) {
      return this.$parent.setPage(page);
    },
  },
  watch: {
    page(value) {
      this.currentPage = value;
    },
    currentPage(value) {
      return this.$parent.setPage(value);
    },
    limit(value) {
      this.$emit('setPerpage', value)
      // return this.$parent.setPerpage(value);
    },
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-pagination {
    li {
      .v-pagination__navigation {
        box-shadow: none;
        border: none;
      }
      .v-pagination__more {
        border: none;

        border-radius: 0;
        box-shadow: none;
      }
      .v-pagination__item {
        border: none;
        border-radius: 0;
        box-shadow: none;

        font-family: "Nunito Sans";

        &--active {
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
