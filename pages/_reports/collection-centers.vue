<template>
  <div class="incomming__container">
    <page-heading pageTitle="Collection Centers">
      <template #actions>
        <text-button class="ml-5">Export</text-button>
      </template>
    </page-heading>

    <dynamic-columns :loading-rightbar="loadingDetail">
      <template #main-content>
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
          <template v-slot:actions="{ item }">
            <div class="d-flex">
              <v-btn color="primary" @click="handleViewClick(item)">
                View
              </v-btn>
            </div>
          </template>
        </main-table>
      </template>

      <!-- Rightbar section -->
      <template #rightbar-content v-if="showRightbar">
        <right-fixed-section title="Flagged entry" icon="mdi-flag-variant">
          <!-- Implement title btn lag -->
          <template #titleBtn={icon} >
            <v-icon color="black" v-if="icon" @click="flagModal = !flagModal">{{
              icon
            }}</v-icon>
          </template>
          <!-- Implement slot heading -->
          <template #heading>
            <div class="my-4">
              <span class="d-block">Delivery note no:</span>
              <h3>SR21-000-010</h3>
            </div>
          </template>

          <!-- Implement slot context -->
          <template #context>
            <v-card class="incoming__card__details" :elevation="0">
              <v-card-title class="d-block pa-0">
                <p class="mb-0">Delivery note to:</p>
                <h3 class="d-block">{{ collectionDetails.id }}</h3>
              </v-card-title>
              <v-card-text class="pa-0">
                <h5 class="">Reason</h5>
                <p class="mb-0">Wrong entry</p>
              </v-card-text>

              <v-card-text
                v-for="(durian, index) in fakeDataCollectionDetails"
                :key="index"
                class="pa-0"
              >
                <v-row class="incoming__card__details__durians">
                  <v-col cols="12 pb-0">
                    <h5 class="mb-0">
                      {{ durian.name }}
                      <span class="font-italic font-weight-light"
                        >Original entry</span
                      >
                    </h5>
                  </v-col>
                  <v-col cols="6 pt-1">
                    <div
                      class="incoming__card__details__durians__items rounded-lg d-flex justify-space-between pa-2"
                    >
                      <p class="mb-0">{{ `Total` }}</p>
                      <p class="mb-0">{{ durian.total }}</p>
                    </div>
                  </v-col>
                  <v-col
                    cols="6 pt-1"
                    v-for="(grade, index) in Object.keys(durian.originEntry)"
                    :key="index"
                  >
                    <div
                      class="incoming__card__details__durians__items rounded-lg d-flex justify-space-between pa-2"
                    >
                      <p class="mb-0">{{ `Grade ${grade}` }}</p>
                      <p class="mb-0">{{ durian.originEntry[grade] }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <!-- <v-card-actions class="pa-0 py-6 d-flex justify-space-between">
                <text-button
                  color="primary"
                  :ripple="false"
                  @click.native="modalVerify = true"
                >
                  Approve
                </text-button>
                <text-button
                  color="primary"
                  class="red--text"
                  :ripple="false"
                  @click.native="modalVerify = true"
                  text
                >
                  Reject
                </text-button>
              </v-card-actions> -->
            </v-card>
          </template>
        </right-fixed-section>
      </template>
    </dynamic-columns>

    <!-- Modal for admin verification -->
    <main-modal :modal="flagModal" :width="500" v-if="collectionDetails">
      <template v-slot:modalHeader>
        <p class="mb-0">Flag cultivars - <span>{{collectionDetails.id}}</span></p>
      </template>
      <template v-slot:modalBody>
        <v-card-text class="pt-5">
          <div class="newFlag__body__cultivars">
            <v-row
              v-for="(cultivar, index) in fakeDataNewEntry.cultivars"
              :key="index"
            >
              <v-col cols="12">
                <label :for="`${index}`" class="mb-0">Select durian type</label>
                <main-select
                  :placeholder="cultivar.name"
                  :id="`${index}`"
                  :items="fakeDataNewEntry.cultivars"
                  itemText="name"
                  itemValue="id"
                ></main-select>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="py-0"
                v-for="(grade, index) in Object.keys(cultivar.originEntry)"
                :key="index"
              >
                <group-validator :validation="{}">
                  <template slot-scope="{ errors }">
                    <main-input
                      :label="grade"
                      :name="`${cultivar.name}+${grade}`"
                      type="text"
                      :errors="errors"
                      :value="cultivar.originEntry[grade]"
                      :clearable="false"
                    />
                  </template>
                </group-validator>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </template>

      <template v-slot:modalActions>
        <text-button @click.native="flagModal = false">Close</text-button>
      </template>
    </main-modal>
  </div>
</template>

<script>
import { TOGGLE_RIGHTBAR } from "@/store/dynamic-columns/dynamic-columns.constant";
import { mapGetters } from "vuex";
import { adminVerification } from "@/validations/flag/flag.validation.js";
export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    RightFixedSection: () =>
      import(
        "@/components/themes/widgets/right-fixed-section/RightFixedSection"
      ),
    DynamicColumns: () =>
      import("@/components/themes/containers/dynamic-columns/DynamicColumns"),
  },
  computed: {
    ...mapGetters({
      showRightbar: "dynamic-columns/showRightbar",
    }),
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
          text: "Flagged entry details",
          value: "name",
        },
        {
          text: "Farmer details",
          value: "album_name",
        },
        {
          text: "Flagged by",
          value: "album_type",
        },
        {
          text: "Reason",
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
      loadingDetail: false,

      collectionDetails: null,
      collectionDetailsCollapse: true,
      fakeDataCollectionDetails: [
        {
          name: "Musan King",
          total: 130,
          originEntry: {
            A: 50,
            B: 40,
            C: 30,
            D: 10,
          },
        },
        {
          name: "Musan Queen",
          total: 150,
          originEntry: {
            A: 50,
            B: 50,
            C: 50,
          },
        },
      ],
      flagModal: false,
      fakeDataNewEntry: {
        cultivars: [
          {
            id: 12,
            name: "Musan King",
            originEntry: {
              A: 50,
              B: 40,
              C: 30,
              D: 10,
            },
          },
          {
            id: 13,
            name: "Musan Queen",
            originEntry: {
              A: 50,
              B: 50,
              C: 50,
            },
          },
          {
            id: 11,
            name: "asd",
            originEntry: {
              A: 50,
              B: 50,
              C: 50,
            },
          },
        ],
      },
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
    handleViewClick(item) {
      this.loadingDetail = true;
      if (!this.showRightbar) {
        this.$store.commit(`dynamic-columns/${TOGGLE_RIGHTBAR}`, true);
      }

      this.collectionDetails = item;
      this.collectionDetailsCollapse = true;
      this.loadingDetail = false;

      return;
    },
  },
  validations: {
    adminVerification: adminVerification,
  },
};
</script>

<style lang="scss" scoped>
@import '@/pages/__styles/Incoming.scss';
</style>