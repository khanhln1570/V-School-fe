<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Supervisor">
        <template #actions>
          <text-button to="/user-management/addNewSupervisor"
            >Add new</text-button
          >
        </template>
      </page-heading>
      <v-container class="max-width pa-0">
        <main-table
          :showSearch="true"
          :headers="headers"
          :items="supervisors"
          :count="countSupervisors"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
          searchLabel="Search name or ID"
        >
          <template #filter>
            <main-select :items="sortBy" label="Sort by" id="sortBy"></main-select>
          </template>
          <template #password="{ item }">
            <span
              :id="`pass-${item.id}`"
              style="cursor: pointer"
              class="primary--text text-decoration-underline"
              @click="handleShowPassword(item)"
              >Show</span
            >
          </template>
          <template #login="{ value }">
            <span class="font-italic txt-disable--text">{{ value }}</span>
          </template>
          <template #actions="{}">
            <div class="d-flex">
              <icon-button :ripple="false" color="back">
                <v-icon> mdi-pencil </v-icon>
              </icon-button>
              <icon-button :ripple="false" color="back">
                <v-icon> mdi-delete </v-icon>
              </icon-button>
            </div>
          </template>
        </main-table>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    IconButton: () =>
      import("@/components/commons/main-button/icon-button/IconButton"),
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
  },
  data() {
    return {
      headers: [
        {
          text: "Supervisor",
          value: "name",
        },
        {
          text: "Mobile number",
          value: "mobileNumber",
        },
        {
          text: "Login ID",
          value: "login",
        },
        {
          text: "Password",
          value: "password",
        },
        {
          text: "",
          align: "end",
          sortable: false,
          value: "actions",
          width: 30,
        },
      ],
      items: [],
      count: 0,
      sortBy: ["Alphabetical order", "abc order", "Number order"],
    };
  },
  computed: {
    ...mapGetters({
      supervisors: "user-management/supervisors/listSupervisors",
      countSupervisors: "user-management/supervisors/countSupervisors",
    }),
  },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    async fetchItems(params) {
      await this.$store.dispatch(
        "user-management/supervisors/getSupervisors",
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

<style>
</style>