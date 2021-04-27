<template>
  <div>
      <page-heading pageTitle="Farmer">
        <template #actions>
          <text-button to="/user-management/addNewSupervisor"
            >Download all QR code</text-button
          >
        </template>
      </page-heading>
      <v-container class="max-width">
        
        <main-table :showSearch="true" searchLabel="Search name or ID" :headers="headers" :items="items" :count="count" :showPagination="true" @selected-items="getSelectedItem" :fetchItems="fetchItems">
          <template v-slot:filter>
            <main-select
              :items="selectItem"
              leftLabel="Sort by"
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
            <text-button text>View</text-button>
          </template> 
        </main-table>
      </v-container>
  </div>
 
</template>

<script>
export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
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
          text: 'Name',
          value: 'name',
        },
        { 
          text: 'ID',
          value: 'album_name',
        },
        {
          text: 'Mobile number',
          value: 'album_type'
        },
        {
          text: 'Effective tonnage & acreage',
          value: 'album_type'
        },
        {
          text: 'QR code',
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