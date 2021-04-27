<template>
  <v-row no-gutters>
    <v-col cols="12" md="2">
      <!-- Icon button component, props type is name of Component. Note: name capitalize and normal -->
      <icon-button type="Pdf" />
      <icon-button type="Excel" />
      <icon-button type="Sync" />
    </v-col>
    <v-col cols="12" md="8">
      <main-chart
        chartType="ChartLine"
        :chartdata="chartdata"
        :options="options"
      />
      <br />
      <main-chart
        chartType="ChartRadar"
        :chartdata="chartdata"
        :options="options"
      />
      <br />
      <main-chart
        chartType="ChartBar"
        :chartdata="chartdata"
        :options="options"
      />
      <br />
    </v-col>
    <v-col cols="12" md="2"></v-col>

    <v-container class="max-width">
      <main-table :headers="headers" :items="items" :count="count" :showPagination="true" @selected-items="getSelectedItem" :fetchItems="fetchItems">
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
        <template v-slot:actions="{ item }">
          Action more {{ item.id }}
        </template> 
      </main-table>
    </v-container>


    <v-container>
      <form>
        <group-validator :validation="$v.form.email">
          <template  slot-scope="{errors}">
            <main-input type="email" v-model.trim="$v.form.email.$model" label="E-mail" :errors="errors" />
          </template>
        </group-validator>
        <group-validator :validation="$v.form.email">
          <template  slot-scope="{errors}">
            <main-input type="password" v-model.trim="$v.form.password.$model" label="Password" :errors="errors" />
          </template>
        </group-validator>
        <group-validator :validation="$v.form.email">
          <template  slot-scope="{errors}">
            <main-input type="textarea" v-model.trim="$v.form.note.$model" label="Note" :errors="errors" />
          </template>
        </group-validator>
        <v-btn
          class="mr-4"
          @click="submit"
        >
          submit
        </v-btn>
      </form>
    </v-container>
  </v-row>
</template>

<script>
import testValidation from "@/validations/test/test.validate";

export default {
  components: {
    MainChart: () => import('@/components/commons/main-chart/MainChart'),
    IconButton: () => import('@/components/commons/main-button/icon-button/IconButton'),
    MainTable: () => import('@/components/commons/main-table/MainTable'),
    MainInput: () => import('@/components/commons/main-input/MainInput'),
    GroupValidator: () => import('@/components/commons/group-validator/GroupValidator'),
  },
  data() {
    return {
      chartdata: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "rgba(248,121,121,0.4)",
            borderColor: "#f87979",
            data: [40, 62, 34, 20],
          },
          {
            label: "Data Two",
            backgroundColor: "rgba(1,197,142,0.4)",
            borderColor: "#00c58e",
            data: [25, 54, 48, 62],
          },
          {
            label: "Data Three",
            backgroundColor: "rgba(57,169,220,0.4)",
            borderColor: "#39A9DC",
            data: [55, 44, 52, 42],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
      },
      ///////////////////////////////////////
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'image',
          width: 30
        },
        {
          text: 'Photo name',
          value: 'name',
        },
        { 
          text: 'Album name',
          value: 'album_name',
        },
        {
          text: 'Album type',
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

      form: {
        email: '',
        password: '',
        note: ''
      }
    };
  },
  methods: {
    submit () {
      this.$v.form.$touch()
    },
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
  validations: {
    form: testValidation,
  },
};
</script>
