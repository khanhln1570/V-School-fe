<template>
  <v-container>
    <page-header title="Danh sách trường học">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="school" />
      </template>
    </page-header>

    <main-table
      :showSearch="false"
      :headers="headers"
      :items="schools"
      :count="count"
      :showPagination="true"
      @selected-items="getSelectedItem"
      :fetchItems="fetchItems"
      searchLabel="Search name or ID"
    >
      <template #name="{ value, item }">
        <div class="d-flex"> 
          <v-checkbox v-model="selected" dense hide-details :value="item.id"></v-checkbox>
        <div>
          <p class="mb-1">{{ value }}</p>
          <span class="font-italic txt-secondary--text">id: {{ item.id }}</span>
        </div>
        </div>
        
      </template>
      <template #mst="{ value }">
        <p class="mb-0 txt-success--text font-weight-medium">{{ value }}</p>
      </template>
      <template #phone="{ value }">
        <p class="mb-0 txt-active--text font-weight-medium">{{ value }}</p>
      </template>
    </main-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    IconButton: () =>
      import("@/components/commons/main-button/icon-button/IconButton"),
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
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
          value: "mst",
        },
        {
          text: "Số điện thoại",
          value: "phone",
        },
        {
          text: "Địa chỉ",
          value: "address",
        },
      ],
      items: [],
      sortBy: ["Alphabetical order", "abc order", "Number order"],
      selected: []
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
      await this.$store.dispatch(
        "school/getSchools",
        params
      );
    },
    handleShowPassword(item) {
      let pass = document.getElementById(`pass-${item.id}`);

      if (pass.textContent === "Show") {
        pass.innerHTML = item.password;
      } else pass.innerHTML = "Show";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>