<template>
  <div class="mainTable">
    <v-container class="px-0">
      <v-row align="center">
        <v-col md="8" lg="9">
          <table-search
            v-if="showSearch"
            :search.sync="search"
            :disabled="loading"
            :searchLabel="searchLabel"
          />
        </v-col>
        <v-col md="4" lg="3">
          <slot name="filter"></slot>
        </v-col>
      </v-row>
    </v-container>

    <v-skeleton-loader
      v-if="firstLoad"
      :loading="loading"
      type="table-tbody"
    ></v-skeleton-loader>
    <v-data-table
      v-show="!firstLoad"
      v-model="selected"
      disable-pagination
      hide-default-footer
      class="mb-5"
      :show-select="selectItem"
      :headers="headers"
      :items="items"
      :header-props="{ 'sort-icon': 'mdi-arrow-up' }"
      :loading="loading"
      :server-items-length="pageCount"
      @input="setSelectedItem"
      @click:row="rowClick"
      @update:sort-by="handleSortClick($event)"
      @update:sort-desc="handleSortClick($event)"
    >
      <template
        v-for="keyname in headers"
        v-slot:[getToKeyHeader(keyname.value)]="{ header }"
      >
        <slot :name="`header-${keyname.value}`" :header="header">
          <span class="font-weight-medium">
            {{ header.text }}
          </span>
        </slot>
      </template>
      <template v-slot:top>
        <slot name="top"></slot>
      </template>
      <template
        v-for="keyname in headers"
        v-slot:[getToKey(keyname.value)]="{ item, value }"
      >
        <slot :name="keyname.value" :item="item" :value="value">
          <span class="font-weight-regular">
            {{ value }}
          </span>
        </slot>
      </template>
    </v-data-table>

    <table-footer
      :showFooter="showFooter"
      :perpage="perpage"
      :footerSelectItem="
        footerSelectItem.length ? footerSelectItem : limitTable
      "
      :showPagination="showPagination"
      :page="page"
      :pageCount="pageCount"
      :disabled="loading"
      @setPerpage="setPerpage"
    />
  </div>
</template>

<script>
import { toString } from "lodash";
import LIMIT_LIST from "@/shared/limitTable-list";

export default {
  components: {
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    TableSearch: () => import("./TableSearch"),
    TableFooter: () => import("./TableFooter"),
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
    showFooter: {
      type: Boolean,
      default: true,
    },
    searchLabel: {
      type: String,
      default: "Enter your search keyword...",
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
      require: true,
    },
    footerSelectItem: {
      type: Array,
      default: () => [],
    },
    search: {
      type: String,
      require: "",
    },
    status: {
      type: String,
      require: "",
    },
  },
  data: () => {
    return {
      firstLoad: true,
      selected: [],
      page: 1,
      perpage: 10,
      options: {},
      loading: false,
      limitTable: LIMIT_LIST,
      refetch: true,
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
      return this.$emit("click:row", response);
    },
    getRequestParams(search, page, pageSize, status) {
      let params = {};

      params["search"] = "";
      if (search) {
        params["search"] = search;
      }

      if (page) {
        params["page"] = page;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      if (status) {
        params["status"] = status;
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
        this.perpage,
        this.status
      );
      await this.fetchItems({...params, limit: this.perpage});

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
    getToKeyHeader(value, prefix = "header.") {
      return toString(prefix + value);
    },
    setPage(page, fetch = true) {
      this.page = page;
      this.refetch = fetch;
    },
    enterSearch() {
      // Submit search and reset page to fisrt.2
      this.page = 1;
      this.onFetchItems();
    },
    setPerpage(perpage) {
      this.perpage = perpage;
    },
    handleSortClick(s) {
      console.log(s);
    },
  },
  watch: {
    page(value) {
      const { query } = this.$route;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...query,
          page: value,
        },
      });

      if (this.refetch) this.onFetchItems();
    },
    perpage(value) {
      const { query } = this.$route;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...query,
          views: value,
        },
      });

      if (this.page !== 1) return this.setPage(1);

      return this.onFetchItems();
    },
    search(value) {
      this.enterSearch();
    },
    async status(value) {
      console.log(value);
      const params = this.getRequestParams(
        this.search,
        this.page,
        this.perpage,
        this.status
      );
      await this.fetchItems({...params, limit: this.perpage});
    },
  },
  beforeDestroy() {
    this.refetch = true;
  },
};
</script>

<style lang="scss" src="./MainTable.scss">
</style>
