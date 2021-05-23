<template>
  <v-container>
    <page-header title="Niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem">
      <template #tabRight>
        <table-search :search.sync="search" placeHolder="Hãy nhập gì đó …" @searchChange="handleChangeSearch"></table-search>
      </template>

      <template #table>

        <p v-for="(invoice, index) in invoices" :key="index"> {{invoice}}</p>

      </template>
    </main-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    TableSearch: () => import("@/components/commons/main-table/TableSearch"),
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    CusIconTextButton: () => import("@/components/commons/main-button/cus-icon-text-button/CusIconTextButton"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
      tabItem: [
        {
          label: "Chưa thu",
          value: "incoming",
        },
        {
          label: "Đã thu",
          value: "history",
        },
      ],
      selected: [],
      search: '',
    };
  },
  computed: {
    ...mapGetters({
      invoices: "invoice/getInvoices",
      count: "invoice/getCountSchool",
    }),
  },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    handleChangeSearch(event) {
      this.search = event.target.value;
    },
    handleViewClick(item) {
      console.log(item);
    }
  },
  async created() {
    await this.$store.dispatch("invoice/getInvoices");
  }
};
</script>

<style lang="scss" scoped>
</style>