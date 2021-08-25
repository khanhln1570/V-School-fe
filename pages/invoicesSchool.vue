<template>
  <v-container>
    <page-header title="Niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
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
          <template #header-description="{ header }">
            <v-checkbox
              v-model="isSelectAll"
              dense
              hide-details
              class="ma-0"
              @change="handleSelectAll"
            >
              <template #label>
                <p class="mb-1 body-1 black--text font-weight-medium">
                  {{ header.text }}
                </p>
              </template>
            </v-checkbox>
          </template>
          <template #description="{ value, item }">
            <div class="d-flex">
              <v-checkbox
                v-model="selected"
                dense
                hide-details
                :value="item.id"
              ></v-checkbox>
              <div>
                <p class="mb-1 font-weight-bold">{{ value }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template mplate te #BHYT="{ value, item }">
            <p class="mb-0 txt-active--text">
              {{ item.BHYT }}
            </p>
          </template>
          <template #ammount="{ value }">
            <p class="mb-0 txt-success--text">
              {{ numberToMoney(value) }}
            </p>
          </template>

          <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/invoices/${item.id}`"
              small
            >
              <p class="mb-0">Chi tiết</p>
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
          <template #description="{ value, item }">
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
          <template #BHYT="{ value, item }">
            <p class="mb-0 txt-active--text">
              {{ item.BHYT }}
            </p>
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
    <main-modal
      :modal="modalSendNotification"
      @closeClick="modalSendNotification = false"
      @nextClick="handleNextClick"
      persistent
    >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Gủi thông báo phí thu</h4>
      </template>
      <template #modalBody>
        <main-select
          label="Loại thông báo"
          :items="getInvoiceTypes"
          itemText="label"
          itemValue="id"
          class="mb-5"
          @input="handleSelectClick"
        ></main-select>
        <v-lazy>
          <main-input
            v-show="notificationObject.type"
            label="Nội dung thông báo"
            type="textarea"
          ></main-input>
        </v-lazy>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from "@/helpers/utils.helper";
import { GET_ALL_INVOICES_ACTION } from "~/store/invoice/invoice.constants.js";

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
    MainInput: () => import("@/components/commons/main-input/MainInput"),
  },
  data() {
    return {
      headers: [
        {
          text: "Tiêu đề phí thu",
          value: "description",
          sortable: false,
        },
        {
          text: "Tháng",
          value: "month",
        },
        {
          text: "Số tiền",
          value: "ammount",
        },
        {
          text: "BHYT",
          value: "BHYT",
        },
        {
          text: "Lớp",
          value: "classCode",
        },
        {
          text: "",
          value: "action",
          sortable: false,
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
      notificationObject: {
        type: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      count: "invoice/getCountInvoice",
      invoices: "invoice/getInvoices",
      getInvoiceTypes: "invoice/getInvoiceTypes",
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
      await this.$store.dispatch(GET_ALL_INVOICES_ACTION, {params: { page: params.page, limit: params.size }});
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
      if (this.isSelectAll) {
        this.invoices.map((invoice) => {
          this.selected.push(invoice.id);
        });
      } else {
      }
    },
    numberToMoney: numberToMoney,
    // handleCloseClick() {

    // },
    handleNextClick() {
      this.modalSendNotification = !this.modalSendNotification;
      this.notificationObject = {
        type: null,
      };
      this.selected = [];
      return this.$nuxt?.$toast?.success("Gửi thông báo thành cồng !", {
        duration: 3000,
      });
    },
    handleSelectClick(invoiceNotificationTypeId) {
      this.notificationObject.type = invoiceNotificationTypeId;
    },
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