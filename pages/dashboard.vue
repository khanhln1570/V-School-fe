<template>
  <v-container class="pa-8">
    <v-row>
      <v-col md="3" v-for="(collection, i) in stisticCollections" :key="`collection-${i}`">
        <mini-statistic :statisticCount="collection.count" :label="collection.label" v-if="collection" />
      </v-col>
      <v-col cols="6">
        <v-card
          class="mx-auto text-center"
          color="green"
          dark
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item">
                  ${{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Sales Last 24h
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn
              block
              text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <div>
      <v-row>
        <v-col md="3">
          <v-row class="my-1" no-gutters>
            <v-col md="6" class="py-0">
              <div class="d-flex align-center">
                <v-subheader class="pl-0 text-no-wrap">Sort by</v-subheader>
                <v-select
                  :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                  label="Grade"
                  hide-details
                  dense
                  solo
                ></v-select>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-row>
      <v-col md="6" v-for="(collection, i) in accumulated" :key="`accumulated-${i}`">
        <mini-statistic :statisticCount="collection.count" :label="collection.label" v-if="collection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_PROFILE_ACTION } from "~/store/auth/auth.constants";

export default {
  components: {
    MiniStatistic: () => import('@/components/themes/widgets/mini-statistic/MiniStatistic'),
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading')
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      yourChild: "yourChild/getYourChild",
      countChild: "yourChild/getCountChild",
    }),
  },
  data() {
    return {
      stisticCollections: [
        {
          label: 'Học sinh',
          count: this.countChild || 590
        },
        {
          label: 'Phụ huynh',
          count: 485
        },
        {
          label: 'Hoá đơn đã thu',
          count: 5
        },
        {
          label: 'Hoá đơn chưa thu',
          count: 485
        },
      ],
      accumulated: [
        {
          label: 'Accumulated Tuition (vnđ)',
          count: '1,351,436'
        },
        {
          label: 'Accumulated Tuition bill',
          count: '1,000'
        },
      ],
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    };
  },
  methods: {

  },
  async fetch() {
    // await this.$store.dispatch(GET_PROFILE_ACTION);
    if(this.currentUser.role === "PARENT") this.$router.push('/your-child')
  }
};
</script>
