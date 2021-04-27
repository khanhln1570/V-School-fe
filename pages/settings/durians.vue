<template>
  <div>
    <main-table
      :headers="headers"
      :items="items"
      :count="count"
      :showPagination="true"
      @selected-items="getSelectedItem"
      :fetchItems="fetchItems"
      :showSearch="false"
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
      <template v-slot:actions="{ item }"> Action more {{ item.id }} </template>
    </main-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      count: 0,
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "image",
          width: 30,
        },
        {
          text: "Photo name",
          value: "name",
          mustSort: true,
        },
        {
          text: "Album name",
          value: "album_name",
        },
        {
          text: "Album type",
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
    };
  },
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
  },
  computed: {
    ...mapGetters({
      durians: "durian/getDurians",
    }),
  },
  methods: {
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
    getSelectedItem(items) {
      console.log(items);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>