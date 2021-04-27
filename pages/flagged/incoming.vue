<template>
  <div class="incomming__container">
    <page-heading pageTitle="Incoming Flags" >
      <template #actions>
        <text-button class="ml-5" to="/flagged/addNew"
          >New flag entry</text-button
        >
      </template>
    </page-heading>

    <dynamic-columns :loading-rightbar="loadingDetail">
      <template #main-content>
        <main-table
          :showSearch="false"
          :headers="headers"
          :items="flags"
          :count="countFlags"
          :showPagination="true"
          @selected-items="getSelectedItem"
          :fetchItems="fetchItems"
        >
          <template v-slot:noteNo="{ value }">
            <p class="font-weight-bold">{{value}}</p>
          </template>
          <template v-slot:farmerDetails="{ value }">
            <div>
              <p class="mb-0">{{value.name}}</p>
              <p class="mb-0">{{value.id}}</p>
            </div>
          </template>
          <template v-slot:flaggedBy="{ value }">
            <div>
              <p class="mb-0 font-weight-bold">{{value.role}}</p>
              <p class="mb-0">{{value.name}}</p>
            </div>
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
        <right-fixed-section title="Flagged entry">
          <!-- Implement slot heading -->
          <template #heading>
            <div class="my-4">
              <span class="d-block">Delivery note no:</span>
              <h3>{{flaggedDetails.noteNo}}</h3>
            </div>
          </template>

          <!-- Implement slot context -->
          <template #context>
            <v-card class="incoming__card__details" :elevation="0">
              <v-card-title class="d-block pa-0">
                <p class="mb-0">Delivery note to:</p>
                <h3 class="d-block">{{ flaggedDetails.id }}</h3>
              </v-card-title>
              <v-card-text class="pa-0">
                <h5 class="">Reason</h5>
                <p class="mb-0">{{flaggedDetails.reason}}</p>
              </v-card-text>

              <v-card-text
                v-for="(durian, index) in flaggedDetails.cultivars"
                :key="index"
                v-show="index === 0 || !flaggedDetailsCollapse"
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
                  <v-col
                    cols="6 pt-1"
                    v-for="(grade, index) in Object.keys(
                      durian.originEntry
                    )"
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
                <v-row
                  class="incoming__card__details__durians"
                  v-if="Object.keys(durian.updateEntry).length"
                >
                  <v-col cols="12 pb-0">
                    <h5 class="mb-0">
                      {{ durian.name }}
                      <span class="font-italic font-weight-light"
                        >Updated entry</span
                      >
                    </h5>
                  </v-col>
                  <v-col
                    cols="6 pt-1"
                    v-for="(grade, index) in Object.keys(
                      durian.originEntry
                    )"
                    :key="index"
                  >
                    <div
                      class="incoming__card__details__durians__items rounded-lg d-flex justify-space-between pa-2"
                      :class="
                        durian.updateEntry[grade]
                          ? 'incoming__card__details__durians__items--updated'
                          : ''
                      "
                    >
                      <p class="mb-0">{{ `Grade ${grade}` }}</p>
                      <p class="mb-0">
                        {{
                          durian.updateEntry[grade]
                            ? durian.updateEntry[grade]
                            : durian.originEntry[grade]
                        }}
                      </p>
                    </div>
                  </v-col>
                  <v-col class="py-0">
                    <nuxt-link
                      color="primary"
                      class="primary--text"
                      text
                      to="#"
                      v-show="flaggedDetailsCollapse"
                      @click.native="flaggedDetailsCollapse = false"
                    >
                      View full entry
                    </nuxt-link>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions class="pa-0 py-6 d-flex justify-space-between">
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
              </v-card-actions>
            </v-card>
          </template>
        </right-fixed-section>
      </template>
    </dynamic-columns>

    <!-- Modal for admin verification -->
    <main-modal :modal="modalVerify" :width="500">
      <template v-slot:modalHeader>
        <p class="mb-0">Admin verification</p>
      </template>
      <template v-slot:modalBody>
        <v-card-text class="pt-5">
          <group-validator :validation="$v.adminVerification.password">
            <template slot-scope="{ errors }">
              <main-input
                label="Password"
                name="password"
                type="password"
                v-model.trim="$v.adminVerification.password.$model"
                :errors="errors"
              />
            </template>
          </group-validator>
        </v-card-text>
      </template>

      <template v-slot:modalActions>
        <text-button @click.native="modalVerify = false">Close</text-button>
      </template>
    </main-modal>
  </div>
</template>

<script>
import { TOGGLE_RIGHTBAR } from "@/store/dynamic-columns/dynamic-columns.constant";
import { mapGetters } from "vuex";
import {
  adminVerification,
} from "@/validations/flag/flag.validation.js";
export default {
  components: {
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading'),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainTable: () => import("@/components/commons/main-table/MainTable"),
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),
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
      flags: "flags/listFlags",
      countFlags: "flags/countFlags",
      flaggedDetails: "flags/flagDetails",
    }),
  },
  data() {
    return {
      headers: [
        {
          text: "Flagged entry details",
          value: "noteNo",
        },
        {
          text: "Farmer details",
          value: "farmerDetails",
        },
        {
          text: "Flagged by",
          value: "flaggedBy",
        },
        {
          text: "Reason",
          value: "reason",
        },
        {
          text: "",
          align: "end",
          sortable: false,
          value: "actions",
          width: 30,
        },
      ],
      loadingDetail: false,
      flaggedDetailsCollapse: true,
      modalVerify: false,
      adminVerification: {
        password: null,
      },

    };
  },
  
  methods: {
    getSelectedItem(items) {
      console.log(items);
    },
    async fetchItems(params) {
      await this.$store.dispatch('flags/getFlags', params);
    },
    async handleViewClick(item) {
      this.loadingDetail = true;
      if (!this.showRightbar) {
        this.$store.commit(`dynamic-columns/${TOGGLE_RIGHTBAR}`, true);
      }

      await this.$store.dispatch('flags/getFlagDetails', item.id);
      
      this.flaggedDetailsCollapse = true;
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
@import "@/pages/__styles/Incoming.scss";
</style>