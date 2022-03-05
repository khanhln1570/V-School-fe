<template>
  <v-container>
    <page-header title="Học sinh niên khoá 2020-2021">
      <template #titleIcon>
        <!-- <img src="@/assets/images/school.svg" alt="school" /> -->
      </template>
    </page-header>

    <main-tabs :items="tabItem" @changeTab="handleChangeTab">
      <template #tabRight>
        <download-excel
          :data="yourChild"
          :fields="json_fields"
          name="Students.xls"
        >
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
        </download-excel>

        <cus-icon-text-button
          @click.native="selected.length ? modalSendNotification = !modalSendNotification :''"
        >
          <template #icon>
          <label for="excelUpload" class="d-flex cursor-pointer">
            <img
              src="@/assets/images/excelImport.svg"
              alt="sendNotification"
              class="mr-2"
            />
            <p class="mb-0 d-flex align-center black--text">Nhập excel</p>
          </label>
          </template>
        </cus-icon-text-button>

        <input type="file" id="excelUpload" accept=".xlsx, .xls, .csv" style="display:none" @change="previewFiles" ref="inputFile">
        <table-search
          :search.sync="search"
          placeHolder="Nhập tên, BHTY, lớp …"
          @searchChange="handleChangeSearch"
        ></table-search>
      </template>

      <template #incoming>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="yourChild"
          :count="countChild"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
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
                <span class="mb-1 black--text font-weight-medium">
                  {{ header.text }}
                </span>
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
                <p class="mb-1 font-weight-bold">{{ item.name }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #BHYT="{ item }">
            <p class="mb-0 txt-active--text">
              {{ item.BHYT }}
            </p>
          </template>
          <template #classcode="{ value }">
            <p class="mb-0 font-weight-regular">
              {{value}}
            </p>
          </template>
          <template #parentPhone="{ item }">
          <p class="mb-0 txt-success--text">
              {{ item.parent.phone }}
            </p>
          </template>

          <template #action="{ item }">
            <text-button
              small
              @click.native="handleViewClick(item)"
              :to="`/students/${item.id}`"
            >
              <p class="mb-0 font-weight-medium">Chi tiết</p>
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
            v-model.trim="notificationObject.content"
          ></main-input>
        </v-lazy>
      </template>
    </main-modal>

    <main-modal
      :modal="uploadFile.uploading"
      @closeClick="uploadFile.uploading = false"
      persistent
      hideAction
      >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Nhập Excel</h4>
      </template>
      <template #modalBody>
        <v-lazy class="py-5">
        <v-row justify="center" align="center" class="flex-column">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            class="d-block"
            v-if="uploadFile.uploading && !uploadFile.response"
          ></v-progress-circular>
          <v-icon
            size="50"
            color="blue darken-2"
            v-show="uploadFile.response && uploadFile.response.listFailed && !uploadFile.response.listFailed.length"
          >
            mdi-account-multiple-check
          </v-icon>
          <v-icon
            size="50"
            color="yellow darken-2"
            v-show="uploadFile.response && uploadFile.response.listFailed && uploadFile.response.listFailed.length || uploadFile.response && !uploadFile.response.ok"
          >
            mdi-account-multiple-remove
          </v-icon>
          <p class="mt-5 font-weight-bold text-center mx-15">
            {{ uploadFile.response && uploadFile.response.message || 'Xin vui lòng chờ giây lát, file đang được xử lý ...'}}
          </p>

          <div
            v-if="uploadFile.response && uploadFile.response.listFailed"
            class="mt-5 d-flex flex-column justify-content-center align-items-center"
          >
            <p class="mt-2 font-weight-regular text-center" v-for="(student, index) in uploadFile.response.listFailed">
              {{`${student.name} - ${student.BHYT}`}}
            </p>
          </div>
          <text-button :text="false" class="white--text mt-10" color="red" @click.native="uploadFile.uploading = false">Đóng</text-button>
        </v-row>
        </v-lazy>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_CHILD_BY_MST_ACTION, ADD_STUDENT_BY_EXCEL, GET_ALL_CHILD } from "~/store/yourChild/yourChild.constants";
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
      notificationObject: {
        type: "TUITION",
      },
      json_fields: {
        STT: "id",
        name: "name",
        classcode: "classcode",
        parentPhone: "parentPhone",
        BHYT: "BHYT",
        gender: "gender",
        schoolId: "schoolId",
      },
      selected: [],
      search: "",
      isSelectAll: false,
      modalSendNotification: false,
      uploadFile: {
        uploading: false,
        response: null,
      }
    };
  },
  computed: {
    ...mapGetters({
      getInvoiceTypes: "invoice/getInvoiceTypes",
      yourChild: "yourChild/getYourChild",
      countChild: "yourChild/getCountChild",
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
      {param: {
        limit: 10,
        page: 1,
        search: '',
      }}
    );
  },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    async fetchItems(params) {
      await this.$store.dispatch(GET_CHILD_BY_MST_ACTION, {mst: this.currentUser.MST, params: {page: params.page, limit: params.size, search: params.search}});
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
    async handleNextClick() {
      this.modalSendNotification = !this.modalSendNotification;

      //For now, the notification type is "TUITION" ONLY and to parant "Khanh" ONLY
      this.notificationObject.to = ["1"];
      //handle add notification
      this.selected.forEach(async selection => {
        await this.$store.dispatch(
          ADD_NOTI_ACTION,
          this.notificationObject
        );
      });

      this.selected = [];
      this.isSelectAll = false;
    },
    handleSelectClick(invoiceNotificationTypeId) {
      this.notificationObject.type = invoiceNotificationTypeId;
    },
    async previewFiles(e) {
      let data;
      var files = e.target.files, f = files[0];

      this.uploadFile.uploading = true;
      let formData = new FormData();
      console.log(f);
      formData.append('students', f);
      this.uploadFile.response = await this.$store.dispatch(ADD_STUDENT_BY_EXCEL, formData);
      this.$refs.inputFile.value = null;
    },
  },
  watch: {
    // "$route.query.tab": {
    //   handler: function (value) {
    //     this.status = this.invoicesStatus[value];
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>
