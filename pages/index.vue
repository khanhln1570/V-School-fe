<template>
  <v-container class="pa-8">
    <v-row>
      <v-col md="3" v-for="(collection, i) in stisticCollections" :key="`collection-${i}`">
        <mini-statistic :statisticCount="collection.count" :label="collection.label" v-if="collection" />
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
export default {
  components: {
    MiniStatistic: () => import('@/components/themes/widgets/mini-statistic/MiniStatistic'),
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading')
  },
  data() {
    return {
      stisticCollections: [
        {
          label: 'Total student',
          count: 192
        },
        {
          label: 'Parents',
          count: 500
        },
        null,
        {
          label: 'Incoming Tuition',
          count: 10
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
    };
  },
  methods: {
    
  },
};
</script>
