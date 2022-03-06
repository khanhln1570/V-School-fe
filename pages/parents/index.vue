<template>
  <v-container>
    <page-header title="Phụ huynh niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
      <template #tabRight>
      </template>

      <template #incoming>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="parents"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
          :status="status"
          :showFooter="false"
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
          <template #name="{ value, item }">
            <div class="d-flex">
              <div>
                <p class="mb-1 font-weight-bold">{{ item.account.name }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #status="{ value, item }">
            <p :class="'mb-0 txt-active--text font-weight-regular'">
              {{ item.account.status }}
            </p>
          </template>
          <template #phone="{ value }">
            <p class="mb-0 txt-success--text font-weight-regular">
              {{ value }}
            </p>
          </template>
          <template #email="{ value, item }">
            <p class="mb-0 font-weight-regular">
              {{ item.account.email }}
            </p>
          </template>
          <template #createDate="{ value, item }">
            <p class="mb-0 font-weight-regular">
              {{ moment(item.account.createDate).format('DD-MM-YYYY') }}
            </p>
          </template>

          <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/parents/${item.id}`"
              small
            >
              <p class="mb-0">Chi tiết</p>
            </text-button>
          </template>
        </main-table>
      </template>

    </main-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from "@/helpers/utils.helper";
import { GET_ALL_INVOICES_ACTION } from "~/store/invoice/invoice.constants.js";
import { ADD_NOTI_ACTION } from "~/store/notification/notification.constants";
import moment from "moment";

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
          value: "name",
          sortable: false,
        },
        {
          text: "Trạng thái",
          value: "status",
        },
        {
          text: "Số điện thoại",
          value: "phone",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Ngày tạo",
          value: "createDate",
        },
        {
          text: "",
          value: "action",
          sortable: false,
        },
      ],
      tabItem: [
        {
          label: "Phụ huynh",
          value: "incoming",
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
        note: null,
      },
      modalSendNotification: false,
      moment: moment,
    };
  },
  computed: {
    ...mapGetters({
      count: "invoice/getCountInvoice",
      bills: "bill/getBills",
      parents: "parent/getParents",
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
      await this.$store.dispatch("parent/getParents", params);
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
  },
  beforeDestroy() {
    this.$router.replace({'query': null});
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
</style>
