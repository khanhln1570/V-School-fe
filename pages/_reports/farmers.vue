<template>
  <div class="reports__container">
    <page-heading pageTitle="Farmers">
      <template v-slot:actions>
        <v-btn small>Export</v-btn>
      </template>
    </page-heading>

    <v-container class="pa-8">
      <main-table
        :headers="headers"
        :items="farmers"
        :count="countFarmers"
        :showPagination="true"
        :fetchItems="fetchItems"
        @click:row="goDetail"
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
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading'),
  },
  data() {
    return {
      count: 0,
      headers: [
        {
          text: "Farmer name",
          value: "name",
        },
        {
          text: "Farm location",
          value: "location",
        },
        {
          text: "Total cultivar supplied (kg)",
          value: "total_cultivar_supplied",
        },
        {
          text: "Total cultivar rejected (kg)",
          value: "total_cultivar_rejected",
        },
      ],
      items: [],
    };
  },
  computed: {
    ...mapGetters({
      farmers: "reports/listFarmers",
      countFarmers: "reports/countFarmers",
    }),
  },
  methods: {
    async fetchItems(params) {
      await this.$store.dispatch('reports/getFarmers', params);
    },
    getSelectedItem(items) {
      console.log(items);
    },
    goDetail(item) {
      return this.$router.push(`/reports/farmers/${item.id}`);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>