<template>
  <v-container>
    <page-header title="Niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
      <template #tabRight>
        <cus-icon-text-button
          @click.native="selected.length ? modalSendNotification = !modalSendNotification :''"
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
          :items="yourChild"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
          :status="status"
        >
          <template #header-studentName="{ header }">
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
          <template #studentName="{ value, item }">
            <div class="d-flex">
              <v-checkbox
                v-model="selected"
                dense
                hide-details
                :value="item.id"
              ></v-checkbox>
              <div>
                <p class="mb-1">{{ item.name }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #BHYT="{ item }">
            <p class="mb-0 txt-active--text font-weight-medium">
              {{ item.BHYT }}
            </p>
          </template>
          <template #classcode="{ value }">
            <p class="mb-0 font-weight-medium">
            {{value}}
            </p>
          </template>

          <!-- <template #action="{ item }">
            <text-button
              @click.native="handleViewClick(item)"
              :to="`/invoices/${item.id}`"
            >
              <p class="mb-0 font-weight-medium">View</p>
            </text-button>
          </template> -->
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
            v-model.trim="notificationObject.content"
          ></main-input>
        </v-lazy>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from "@/helpers/utils.helper";
import { GET_CHILD_BY_MST_ACTION } from "~/store/yourChild/yourChild.constants";
import { ADD_ACTION } from "~/store/notification/notification.constants";

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
          text: "Tên học sinh",
          value: "studentName",
          sortable: false,
        },
        {
          text: "BHYT",
          value: "BHYT",
        },
        {
          text: "Lớp",
          value: "classcode",
        },
        {
          text: "Số phụ huynh",
          value: "parentPhone",
        },
        {
          text: "",
          value: "action",
        },
      ],
      tabItem: [
        {
          label: "Tất cả",
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
        type: "TUITION",
      },
    };
  },
  computed: {
    ...mapGetters({
      count: "invoice/getCountInvoice", 
      invoices: "invoice/getInvoices",  
      getInvoiceTypes: "invoice/getInvoiceTypes",
      yourChild: "yourChild/getYourChild",
      currentUser: "auth/getCurrentUser",
    }),
  },
  // fetch() {
  //   this.$route.query.status = this.tabItem[0].value;
  // },
  async created() {
    // this.$store.dispatch(GET_PROFILE_ACTION);
    await this.$store.dispatch(
      GET_CHILD_BY_MST_ACTION,
      this.currentUser.MST
    );
  },
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
      if (this.isSelectAll) {
        this.yourChild.map((child) => {
          this.selected.push(child.id);
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
      //handle add notification
      this.selected.forEach(async selection => {
        await this.$store.dispatch(
          ADD_ACTION,
          this.notificationObject
        );
      });
      
      this.selected = [];
      this.isSelectAll = false;
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