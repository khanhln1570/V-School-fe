<template>
  <div>
    <v-container class="px-0">
      <v-row align="center">
        <v-col md="8" lg="9">
          <table-search v-if="showSearch" :search.sync="search" :disabled="loading" :searchLabel="searchLabel"/>
        </v-col>
        <v-col md="4" lg="3">
          <slot name="filter"></slot>
        </v-col>
      </v-row>
    </v-container>
    
  
    <v-skeleton-loader v-if="firstLoad" :loading="loading" type="table"></v-skeleton-loader>
    <v-data-table
      v-show="!firstLoad"
      v-model="selected"
      :show-select="selectItem"
      :headers="headers"
      :items="items"
      :header-props="{ 'sort-icon': 'mdi-arrow-up' }"
      @input="setSelectedItem"
      disable-pagination
      hide-default-footer
      :loading="loading"
      :server-items-length="pageCount"
      @click:row="rowClick"
    >
      <template v-slot:top>
        <slot name="top"></slot>
      </template>
      <template v-for="keyname in headers" v-slot:[getToKey(keyname.value)]="{item, value}">
        <slot :name="keyname.value" :item="item" :value="value">
          {{ value }}
        </slot>
      </template>
    </v-data-table>

    <table-footer :footerSelectItem="footerSelectItem" :showPagination="showPagination" :page="page" :pageCount="pageCount" :disabled="loading" />
  </div>
</template>

<script>
import { toString } from "lodash";

export default {
  components: {
    MainSelect: () => import('@/components/commons/main-select/MainSelect'),
    TableSearch: () => import('./TableSearch'),
    TableFooter: () => import('./TableFooter'),
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
    searchLabel: {
      type: String,
      default: "Enter your search keyword..."
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    selectItem: {
      type: Boolean,
      default: false,
    },
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    fetchItems: {
      type: Function,
      require: true
    },
    footerSelectItem: {
      type: Array,
      default: () => [10, 25, 50, 100]
    }
  },
  data: () => {
    return {
      firstLoad: true,
      selected: [],
      search: "",
      page: 1,
      perpage: 10,
      options: {},
      loading: false,
    };
  },
  computed: {
    pageCount() {
      /**
       * !TODO: Update caculate page count after have the API
       */
      return parseInt(this.count / this.perpage) + 1;
    },
  },
  fetch() {
    /**
     * if exist query page -> call to watch param page and
     * else trigger fetch data from parent.
     */
    if (this.$route.query.page && this.$route.query.page > 1) {
      this.page = parseInt(this.$route.query.page);
    } else {
      this.onFetchItems();
    }
  },
  methods: {
    rowClick(response) {
      return this.$emit('click:row', response);
    },
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      if (searchTitle) {
        params["search"] = searchTitle;
      }

      if (page) {
        params["page"] = page;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    async onFetchItems() {
      this.loading = true;
      /**
       * Pass this params to url request API (Pagination, search...)
       * !TODO custom params and custom search query at here.
       */
      const params = this.getRequestParams(
        this.search,
        this.page,
        this.perpage
      );

      await this.fetchItems(params);

      this.loading = false;
      if (this.firstLoad) this.firstLoad = false;
    },
    setSelectedItem() {
      return this.$emit("selected-items", this.selected);
    },
    toInt(value) {
      if (!value) return 0;

      return parseInt(value, 10);
    },
    getToKey(value, prefix = "item.") {
      return toString(prefix + value);
    },
    setPage(page) {
      return (this.page = page);
    },
    enterSearch() {
      // Submit search and reset page to fisrt.2
      this.page = 1;
      this.onFetchItems();
    },
  },
  watch: {
    page() {
      const { query } = this.$route;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...query,
          page: this.page,
        },
      });

      this.onFetchItems();
    },
  },
};
</script>

<style lang="scss" src="./MainTable.scss">
</style>