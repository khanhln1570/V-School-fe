<template>
  <v-container>
    <page-header title="Phí thu">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
      <template #tabRight>
          <cus-icon-text-button
            smallIcon
            @click.native="selected.length ? modalSendNotification = true : modalSendNotification = false"
          >
            <template #icon>
              <img
                src="@/assets/images/sendNotification.svg"
                alt="sendNotification"
                class="mr-2"
              />
              <p class="mb-0 d-flex align-center black--text">Gửi thông báo</p>
            </template>
          </cus-icon-text-button>
          <cus-icon-text-button
            smallIcon
            @click.native="saveInvoicesBySchool"
          >
            <template #icon>
              <img
                src="@/assets/images/refresh.png"
                alt="sendNotification"
                class="mr-2"
              />
              <p class="mb-0 d-flex align-center black--text">Cập nhật hoá đơn</p>
            </template>
          </cus-icon-text-button>
        <table-search
          :search.sync="search"
          placeHolder="Nhập tiêu đề, BHTY, lớp …"
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
          <template #header-description="{ header }">
            <v-checkbox
              v-model="isSelectAll"
              dense
              hide-details
              class="ma-0"
              @change="handleSelectAll"
            >
              <template #label>
                <span class="mb-1 black--text font-weight-medium">
                  {{ header.text }}
                </span>
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
                <p class="mb-1 font-weight-bold">{{ item.description }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #BHYT="{ value }">
            <p class="mb-0 txt-active--text font-weight-regular">
              {{ value }}
            </p>
          </template>
          <template #ammount="{ value }">
            <p class="mb-0 font-weight-regular">
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
          <template #BHYT="{ value }">
            <p class="mb-0 txt-active--text font-weight-medium">
              {{ value }}
            </p>
          </template>
          <template #ammount="{ value }">
            <p class="mb-0 txt-success--text font-weight-medium">{{ value }}</p>
          </template>

          <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/invoices/${item.id}`"
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
          v-model="notificationObject.type"
        ></main-select>
        <v-lazy>
          <main-input
            v-show="notificationObject.type"
            label="Nội dung thông báo"
            type="textarea"
            v-model.trim="notificationObject.note"
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
import { ADD_NOTI_ACTION } from "~/store/notification/notification.constants";

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
          text: "",
          value: "description",
          sortable: false,
        },
        {
          text: "Tên học sinh",
          value: "name",
        },
        {
          text: "BHYT",
          value: "BHYT",
        },
        {
          text: "Số tiền",
          value: "ammount",
        },
        {
          text: "Lớp",
          value: "className",
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
      invoicesStatus: ["chuathu", "dathu"],
      status: "SUCCESS",
      isSelectAll: false,
      modalSendNotification: false,
      notificationObject: {
        type: null,
        note: null,
      },
      modalSendNotification: false,
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
      console.log("fetchItems", params);
      await this.$store.dispatch("invoice/getInvoicesByToken", params);
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
    async handleNextClick() {
      this.modalSendNotification = !this.modalSendNotification;

      //For now, the notification type is "TUITION" ONLY and to parant "Khanh" ONLY
      this.notificationObject.to = ["1"];

      //Get BHYT selected invoices


      //handle add notification
      await this.$store.dispatch(
        ADD_NOTI_ACTION,
        {
          invoiceIds: this.selected,
          type: this.notificationObject.type,
          content: this.notificationObject.note,
        }
      );

      this.selected = [];
      this.isSelectAll = false;

      // this.$nuxt?.$toast?.success("Gửi thông báo thành cồng !", {
      //   duration: 3000,
      // });
    },
    handleSelectClick(invoiceNotificationTypeId) {
      this.notificationObject.type = invoiceNotificationTypeId;
    },
    async saveInvoicesBySchool() {
      const d = new Date();
        let month = ('0'+d.getMonth()).slice(-2);
      await this.$store.dispatch(
          "invoice/saveInvoicesBySchool",
           {MONTH: month}
        );
    }
  },
  beforeDestroy() {
    this.$router.replace({'query': null});
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
