<template>
  <div class="reports__container">
    <page-heading pageTitle="Farmers details" backTo="/reports/farmers" />

    <dynamic-columns :loading-rightbar="loadingDetail">
      <template #main-content>
        <v-row>
          <v-col :md="screenHeadingColumn">
            <p class="heading">Farmer Details</p>

            <v-card outlined width="345">
              <v-card-text>
                <v-row class="my-0" no-gutters>
                  <v-col md="6">Farmer Name</v-col>
                  <v-col md="6" class="text-right">Ah Keong</v-col>
                </v-row>
                <v-row  class="my-0" no-gutters>
                  <v-col md="6">Farmer ID</v-col>
                  <v-col md="6" class="text-right">1122334455</v-col>
                </v-row>
                <v-row class="my-0" no-gutters>
                  <v-col md="6">Farm Location</v-col>
                  <v-col md="6" class="text-right">Sunggai Ruan</v-col>
                </v-row>
                <v-row class="my-0" no-gutters>
                  <v-col md="6">Farmer acreage</v-col>
                  <v-col md="6" class="text-right">50 acre</v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="8" class="px-16" v-if="!showRightbar">
            <p class="heading">Total cultivars collected</p>
            <v-card outlined color="transparent" class="px-0" max-width="345">
              <v-card-title class="body-1 font-weight-bold pa-0">Musang King</v-card-title>
              <v-row dense>
                <v-col md="6">
                  <v-card outlined>
                    <v-card-text class="py-2">
                      <v-row no-gutters>
                        <v-col>Grade A</v-col>
                        <v-col class="text-right">14,000</v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col md="6">
                  <v-card outlined>
                    <v-card-text class="py-2">
                      <v-row no-gutters>
                        <v-col>Grade B</v-col>
                        <v-col class="text-right">600</v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col md="6">
                  <v-card outlined>
                    <v-card-text class="py-2">
                      <v-row no-gutters>
                        <v-col>Grade C</v-col>
                        <v-col class="text-right">53</v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <main-table
          :headers="headers"
          :items="farmers"
          :count="countFarmers"
          :showPagination="false"
          :fetchItems="fetchItems"
          @click:row="goDetail"
          :footerSelectItem="[]"
          :showSearch="false"
          class="pointer"
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
      </template>

      <!-- Rightbar section -->
      <template #rightbar-content v-if="showRightbar">
        <right-fixed-section title="Cultivar detail (kg)" icon="mdi-flag-variant">
          <!-- Implement slot heading -->
          <template #heading>
            <div class="my-4">
              <span class="d-block">Delivery note no:</span>
              <h3>SR21-000-010</h3>
            </div>
          </template>

          <!-- Implement slot context -->
          <template #context>
            <template v-for="(cultivar, i) in cultivarDetails">
                <v-card outlined color="transparent" class="px-0 mb-3" :key="`cultivar-${i}`">
                  <v-card-title class="body-1 font-weight-bold pa-0">{{ cultivar.label }}</v-card-title>
                  <v-row dense>
                    <v-col md="6" v-for="(item, i) in cultivar.items" :key="`cultivar-item-${i}`">
                      <v-card outlined>
                        <v-card-text class="py-2">
                          <v-row no-gutters>
                            <v-col>{{ item.label }}</v-col>
                            <v-col class="text-right">{{ item.count }}</v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
          </template>
        </right-fixed-section>
      </template>
    </dynamic-columns>
  </div>
</template>

<script>

const CULTIVAR_DETAIL = [
  {
    label: 'Musang King',
    items: [
      {
        label: 'Total',
        count: '14,623'
      },
      {
        label: 'Grade A',
        count: '14,000'
      },
      {
        label: 'Grade B',
        count: '600'
      },
      {
        label: 'Grade C',
        count: '23'
      },
    ]
  },
  {
    label: 'D24',
    items: [
      {
        label: 'Total',
        count: '14,623'
      },
      {
        label: 'Grade A',
        count: '14,000'
      },
      {
        label: 'Grade B',
        count: '600'
      },
    ]
  },
  {
    label: 'IOI',
    items: [
      {
        label: 'Total',
        count: '14,623'
      },
      {
        label: 'Grade A',
        count: '14,000'
      },
      {
        label: 'Grade B',
        count: '600'
      },
    ]
  },
  {
    label: 'Other cultivars',
    items: [
      {
        label: 'Total',
        count: '14,623'
      },
      {
        label: 'Grade A',
        count: '14,000'
      },
      {
        label: 'Grade B',
        count: '600'
      },
    ]
  },
  {
    label: 'Rejected',
    items: [
      {
        label: 'Total',
        count: '14,623'
      },
    ]
  },
]

const HEADING_SCREEN_NORMAL = '4';
const HEADING_SCREEN_INCLUDE_RIGHTBAR = '6';

import { TOGGLE_RIGHTBAR } from '@/store/dynamic-columns/dynamic-columns.constant';
import { mapGetters } from "vuex";

export default {
  components: {
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading'),
    RightFixedSection: () => import('@/components/themes/widgets/right-fixed-section/RightFixedSection'),
    DynamicColumns: () => import('@/components/themes/containers/dynamic-columns/DynamicColumns'),
  },
  
  data: () => {
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
      loadingDetail: false,
      cultivarDetails: []
    };
  },
  computed: {
    ...mapGetters({
      farmerDetail: "reports/farmerDetail",
      farmers: "reports/listFarmers",
      countFarmers: "reports/countFarmers",
      showRightbar: 'dynamic-columns/showRightbar',
    }),
    screenHeadingColumn() {
      console.log(this.showRightbar)
      if(!this.showRightbar) return HEADING_SCREEN_NORMAL;
      
      return HEADING_SCREEN_INCLUDE_RIGHTBAR;
    }
  },
  fetch() {
    const farmerId = this.$route.params?.id;
    this.fetchFarmerDetail(farmerId);
  },
  methods: {
    async fetchFarmerDetail(farmerId) {
      await this.$store.dispatch('reports/getFarmerDetail', farmerId);

      console.log(this.farmerDetail)
    },
    async fetchItems(params) {
      await this.$store.dispatch('reports/getFarmers', params);
    },
    // DEMO sample data
    setCultivarDetails() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(CULTIVAR_DETAIL)
        }, 1000)
      })
    },
    getCultivarDetails() {
      return this.setCultivarDetails().then(rs => {
        this.cultivarDetails = rs;
      });
    },
    // 
    getSelectedItem(items) {
      console.log(items);
    },
    async goDetail(item) {
      this.loadingDetail = true;
      if(!this.showRightbar) {
        this.$store.commit(`dynamic-columns/${ TOGGLE_RIGHTBAR }`, true);
      }

      await this.getCultivarDetails();
      this.loadingDetail = false;
      return;
    }
  },
};
</script>