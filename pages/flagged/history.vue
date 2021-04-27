<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Flagged History">
        <template #actions>
          <text-button class="ml-5" to="/flagged/generate-report"
            >Generate report</text-button
          >
        </template>
      </page-heading>
      <v-container class="max-width">
        <main-table :showSearch="true" :headers="headers" :items="items" :count="count" :showPagination="true" @selected-items="getSelectedItem" :fetchItems="fetchItems" :footerSelectItem="selectItem">
          <template v-slot:filter>
            <main-select
              :items="selectItem"
              label="Date"
            ></main-select>
          </template>
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
          <template v-slot:actions="{  }">
            <icon-button to="/flagged/edit">
              <v-icon>mdi-pencil</v-icon>
            </icon-button>
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
    IconButton: () => import('@/components/commons/main-button/icon-button/IconButton'),
    TextButton: () => import('@/components/commons/main-button/text-button/TextButton'),
    MainTable: () => import('@/components/commons/main-table/MainTable'),
    MainSelect: () => import('@/components/commons/main-select/MainSelect'),
  },
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'image',
          width: 30
        },
        {
          text: 'Entry details',
          value: 'name',
        },
        { 
          text: 'Farmer details',
          value: 'album_name',
        },
        {
          text: 'Flagged by',
          value: 'album_type'
        },
        {
          text: 'Reason',
          value: 'album_type'
        },
        {
          text: '',
          align: 'end',
          sortable: false,
          value: 'actions',
          width: 30
        },
      ],
      items: [],
      count: 0,
      selectItem: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods: {
    getSelectedItem(items) {
      console.log(items)
    },
    fetchItems(params) {
      return this.$api.auth.getProduct(params).then(({items, count}) => {
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
}
</script>

<style>

</style>