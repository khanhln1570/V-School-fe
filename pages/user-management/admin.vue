<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Admin">
        <template #actions>
          <text-button to="/user-management/addNewAdmin"
            >Add new admin</text-button
          >
        </template>
      </page-heading>
      <v-container class="max-width">
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="items"
          :count="count"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
        >
          <template v-slot:image="{ value }">
            <img :src="value" width="45" />
          </template>
          <template v-slot:shops="{ value }">
            <span class="d-block" v-for="shop in value" :key="shop.id">
              {{ shop.name }}
            </span>
          </template>
          <template v-slot:products="{ value }">
            <span class="d-block" v-for="product in value" :key="product.id">
              {{ product.name }}
            </span>
          </template>
          <template v-slot:actions="{}">
            <div class="d-flex">
              <icon-button color="primary">
                <v-icon> mdi-pencil </v-icon>
              </icon-button>
              <icon-button color="error">
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
export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    IconButton: () =>
      import("@/components/commons/main-button/icon-button/IconButton"),
    MainTable: () => import("@/components/commons/main-table/MainTable"),
  },
  data() {
    return {
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "image",
          width: 30,
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Mobile number",
          value: "album_name",
        },
        {
          text: "Login",
          value: "album_type",
        },
        {
          text: "Password",
          value: "album_type",
        },
        {
          text: "Roles",
          value: "album_type",
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
    };
  },
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    fetchItems(params) {
      return this.$api.auth.getProduct(params).then(({ items, count }) => {
        this.items = items.map(this.convertData);
        this.count = count;
      });
    },
    convertData(item) {
      return {
        id: item.id,
        image: item.url,
        name: item.title,
        album_type: item.album?.type,
        album_name: item.album?.title,
      };
    },
  },
};
</script>

<style>
</style>