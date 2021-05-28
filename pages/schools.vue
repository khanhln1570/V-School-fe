<template>
  <v-container>
    <page-header title="Danh sách trường học">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="school" />
      </template>
    </page-header>

    <main-tabs :items="tabItem">
      <template #tabRight>
        <cus-icon-text-button>
          <template #icon>
            <img src="@/assets/images/ban-user.svg" alt="ban-user" class="mr-2">
            <p class="mb-0 d-flex align-center black--text">Khoá tài khoản</p>
          </template>
        </cus-icon-text-button>
        <cus-icon-text-button>
          <template #icon>
            <img src="@/assets/images/rotation-lock.svg" alt="ban-user" class="mr-2">
            <p class="mb-0 d-flex align-center black--text">Đặt lại mật khẩu</p>
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
                <p class="mb-1">{{ value }}</p>
                <span class="font-italic txt-secondary--text"
                  >id: {{ item.id }}</span
                >
              </div>
            </div>
          </template>
          <template #MST="{ value }">
            <p class="mb-0 txt-success--text font-weight-medium">{{ value }}</p>
          </template>
          <template #phone="{ value }">
            <p class="mb-0 txt-active--text font-weight-medium">{{ value }}</p>
          </template>
          <template #action="{ item }">
              <text-button @click.native="handleViewClick(item)" :to="`/schools/${item.id}`">
                <p class="mb-0 font-weight-medium">
                  View
                </p>
              </text-button>
          </template>
        </main-table>
      </template>
    </main-tabs>
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
        {
          label: "test",
          value: "test",
        },
      ],
      selected: [],
      search: '',
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
    }
  },
  async fetch() {
    // await this.$store.dispatch(GET_PROFILE_ACTION);
  }
};
</script>

<style lang="scss" scoped>
</style>