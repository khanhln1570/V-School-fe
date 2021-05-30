<template>
  <v-container>
    <page-header title="Niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
      <template #tabRight>
        <cus-icon-text-button @click.native="modalSendNotification = !modalSendNotification">
          <template #icon>
            <img
              src="@/assets/images/sendNotification.svg"
              alt="sendNotification"
              class="mr-2"
            />
            <p class="mb-0 d-flex align-center black--text">Gửi thông báo</p>
          </template>
        </cus-icon-text-button>
        <cus-icon-text-button>
          <template #icon>
            <img
              src="@/assets/images/excelExport.svg"
              alt="excelExport"
              class="mr-2"
            />
            <p class="mb-0 d-flex align-center black--text">Xuất excel</p>
          </template>
        </cus-icon-text-button>
        <table-search
          :search.sync="search"
          placeHolder="Hãy nhập gì đó …"
          @searchChange="handleChangeSearch"
        ></table-search>
      </template>

      <template #incoming>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="invoices"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
          :status="status"
        >
          <template #header-studentName="{ header }">
              <v-checkbox v-model="isSelectAll" dense hide-details class="ma-0" @change="handleSelectAll">
                <template #label>
                  <p class="mb-1 body-1 black--text font-weight-medium">{{ header.text }}</p>
                </template>
              </v-checkbox>
          </template>
          <template #studentName="{ value, item }">
            <div class="d-flex">
              <v-checkbox
                v-model="selected"
                dense
                hide-details
                :value="item.id"
              ></v-checkbox>
              <div>
                <p class="mb-1">{{ value }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #type="{ value }">
            <p class="mb-0 txt-active--text font-weight-medium">
              {{ value.label }}
            </p>
          </template>
          <template #amount="{ value }">
            <p class="mb-0 font-weight-medium">
              {{ numberToMoney(value) }}
            </p>
          </template>
          <template #unit="{ value }">
            <p class="mb-0 txt-success--text font-weight-medium">{{ value }}</p>
          </template>

          <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/schools/${item.id}`"
            >
              <p class="mb-0 font-weight-medium">View</p>
            </text-button>
          </template>
        </main-table>
      </template>

      <template #history>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="invoices"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
          :status="status"
        >
          <template #studentName="{ value, item }">
            <div class="d-flex">
              <v-checkbox
                v-model="selected"
                dense
                hide-details
                :value="item.id"
              ></v-checkbox>
              <div>
                <p class="mb-1">{{ value }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #type="{ value }">
            <p class="mb-0 txt-active--text font-weight-medium">
              {{ value.label }}
            </p>
          </template>
          <template #unit="{ value }">
            <p class="mb-0 txt-success--text font-weight-medium">{{ value }}</p>
          </template>

          <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/schools/${item.id}`"
            >
              <p class="mb-0 font-weight-medium">View</p>
            </text-button>
          </template>
        </main-table>
      </template>
    </main-tabs>
      <main-modal :modal="modalSendNotification">
      <template #modalBody>
       ád
      </template>
      </main-modal>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from '@/helpers/utils.helper';

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    TableSearch: () => import("@/components/commons/main-table/TableSearch"),
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    CusIconTextButton: () =>
      import(
        "@/components/commons/main-button/cus-icon-text-button/CusIconTextButton"
      ),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
      headers: [
        {
          text: "Tên học sinh",
          value: "studentName",
          sortable: false,
        },
        {
          text: "Loại phí",
          value: "type",
        },
        {
          text: "Số tiền",
          value: "amount",
        },
        {
          text: "Nội dung",
          value: "description",
        },
        {
          text: "Đơn vị",
          value: "unit",
        },
        {
          text: "",
          value: "action",
        },
      ],
      tabItem: [
        {
          label: "Chưa thu",
          value: "incoming",
        },
        {
          label: "Đã  thu",
          value: "history",
        },
      ],
      selected: [],
      search: "",
      invoicesStatus: ["SUCCESS", "PENDING"],
      status: "SUCCESS",
      isSelectAll: false,
      modalSendNotification: false,
    };
  },
  computed: {
    ...mapGetters({
      count: "invoice/getCountInvoice",
      invoices: "invoice/getInvoices",
    }),
  },
  // fetch() {
  //   this.$route.query.status = this.tabItem[0].value;
  // },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    async fetchItems(params) {
      await this.$store.dispatch("invoice/getInvoices", params);
    },
    handleChangeSearch(event) {
      this.search = event.target.value;
    },
    handleViewClick(item) {
      console.log(item);
    },
    handleChangeTab(tabIndex) {
      this.search = "";
    },
    handleSelectAll() {
      this.selected = [];
      if(this.isSelectAll) {
        this.invoices.map(invoice => {
          this.selected.push(invoice.id)
        })
      } else {
      }
    },
    numberToMoney: numberToMoney,
  },
  watch: {
    "$route.query.tab": {
      handler: function (value) {
        this.status = this.invoicesStatus[value];
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>