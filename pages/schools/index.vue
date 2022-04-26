<template>
  <v-container>
    <page-header title="Danh sách trường học">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="school" />
      </template>
    </page-header>

    <main-tabs :items="tabItem">
      <template #tabRight>
      <cus-icon-text-button
            smallIcon
            @click.native="modalAddSchool = !modalAddSchool"
          >
            <template #icon>
              <img
                src="@/assets/images/school.svg"
                alt="school"
                class="mr-2"
              />
              <p class="mb-0 d-flex align-center black--text">Thêm trường</p>
            </template>
          </cus-icon-text-button>
        <table-search :search.sync="search" placeHolder="Hãy nhập gì đó …" @searchChange="handleChangeSearch"></table-search>
      </template>

      <template #table>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="schools"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          :search="search"
          searchLabel="Search name or ID"
        >
          <template #name="{ value, item }">
            <div class="d-flex">
              <v-checkbox
                v-model="selected"
                dense
                hide-details
                :value="item.id"
              ></v-checkbox>
              <div>
                <p class="mb-1">{{ item.account.name }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #MST="{ value, item }">
            <p class="mb-0 txt-success--text font-weight-medium">{{ value, item }}</p>
          </template>
          <template #phone="{ value, item }">
            <p class="mb-0 txt-active--text font-weight-medium">{{ value }}</p>
          </template>
          <template #address="{ value, item }">
            <p class="mb-0 font-weight-medium">{{ item.account.address }}</p>
          </template>
          <template #action="{ value, item }">
              <text-button @click.native="handleViewClick(item)" :to="`/schools/${item.id}`">
                <p class="mb-0 font-weight-medium">
                  View
                </p>
              </text-button>
          </template>
        </main-table>
      </template>
    </main-tabs>

    <main-modal
      :modal="modalAddSchool"
      @closeClick="modalAddSchool = false"
      @nextClick="handleNextClick"
      persistent
      >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Thêm trường mới</h4>
      </template>
      <template #modalBody>
        <main-input label="Mã số thuế" v-model.trim="form.mst"></main-input>
        <main-input label="Tên" v-model.trim="form.name"></main-input>
        <main-input label="Email" v-model.trim="form.email"></main-input>
        <main-input label="Địa chỉ" v-model.trim="form.address"></main-input>
        <main-input label="Số điện thoại" v-model.trim="form.phone"></main-input>
        <main-input label="merchant_name" v-model.trim="form.merchant_name"></main-input>
        <main-input label="merchant_code" v-model.trim="form.merchant_code"></main-input>
        <main-input label="hash_key" v-model.trim="form.hash_key"></main-input>
        <main-input label="access_code" v-model.trim="form.access_code"></main-input>
      </template>
    </main-modal>
  </v-container>
</template>

<script>
import { GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
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
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),

  },
  data() {
    return {
      headers: [
        {
          text: "Tên trường",
          value: "name",
        },
        {
          text: "Mã số thuế",
          value: "MST",
        },
        {
          text: "Số điện thoại",
          value: "phone",
        },
        {
          text: "Địa chỉ",
          value: "address",
        },
        {
          text: "",
          value: "action",
        },
      ],
      tabItem: [
        {
          label: "Bảng",
          value: "table",
        },
      ],
      selected: [],
      search: '',
      modalAddSchool: false,
      form: {
        mst: '',
        name: '',
        email: '',
        address: '',
        phone: '',
        merchant_name: '',
        merchant_code: '',
        hash_key: '',
        access_code: '',

      }
    };
  },
  computed: {
    ...mapGetters({
      schools: "school/getSchools",
      count: "school/getCountSchool",
    }),
  },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    async fetchItems(params) {
      await this.$store.dispatch("school/getSchools", params);
    },
    handleChangeSearch(event) {
      this.search = event.target.value;
    },
    handleViewClick(item) {
      console.log(item);
    },
    async handleNextClick() {
      console.log("abc");

      this.modalUpdateProfile = !this.modalUpdateProfile;
      // await this.$store.dispatch("school/addSchool", this.form);
      await this.$store.dispatch("school/addSchool", {
        ...this.form,
      });
    },
  },
  async fetch() {
    // await this.$store.dispatch(GET_PROFILE_ACTION);
  }
};
</script>

<style lang="scss" scoped>
</style>
