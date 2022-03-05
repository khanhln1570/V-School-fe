<template>
  <v-container>
    <page-header title="Phí thu niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem">
      <template #tabRight>
        <table-search
          :search.sync="search"
          placeHolder="Hãy nhập gì đó …"
          @searchChange="handleChangeSearch"
        ></table-search>
      </template>

      <template #incoming>
        <!-- <p v-for="(invoice, index) in invoices" :key="index">{{ invoice }}</p> -->
        <div class="mt-10">
          <div v-for="(type, index) in invoiceTypes" :key="index">

          </div>
        </div>
      </template>
      <template #history>
        <div class="mt-10">
          <div v-for="(type, index) in invoiceTypes" :key="index">

          </div>
        </div>
      </template>
    </main-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_INVOICES_ACTION } from "@/store/invoice/invoice.constants";

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    TableSearch: () => import("@/components/commons/main-table/TableSearch"),
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    CusIconTextButton: () =>
      import(
        "@/components/commons/main-button/cus-icon-text-button/CusIconTextButton"
      ),
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
      search: "",
      headers: [
        {
          text: "Số tiền",
          value: "amount",
        },
        {
          text: "Học sinh",
          value: "studentName",
        },
        {
          text: "",
          value: "action",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      invoices: "invoice/getInvoices",
      invoiceTypes: "invoice/getInvoiceTypes",
      getInvoiceByType: "invoice/getInvoiceByType",
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
    },
  },
  fetch() {
    // if(this.currentUser.role !== "PARENT") this.$router.push("/invoicesSchool");
    // await this.$store.dispatch(GET_INVOICES_ACTION);
  },
  async created() {
    await this.$store.dispatch("invoice/getInvoicesByToken");
  },
};
</script>

<style lang="scss" scoped>
</style>
