<template>
  <div class="reports__container">
    <page-heading pageTitle="Overview" />

    <v-container class="pa-8">
      <v-row>
        <v-col md="6">
          <mini-statistic statisticCount="1,145,623" label="Total weight of Durians /kg supplied" />
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <div>
        <v-row>
          <v-col md="3">
            <v-row class="my-1" no-gutters>
              <v-col md="12" class="py-0">
                <div class="d-flex align-center">
                  <v-subheader class="pl-0 text-no-wrap">Date</v-subheader>
                  <v-select
                    :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                    label="Last 7 days"
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

      <v-row v-for="(row, i) in rows" :key="`row-${i}`">
        <v-col md="12" class="pb-0">
          <p class="mb-0 body-1 font-weight-bold">{{ row.title }}</p>
        </v-col>
        <v-col md="3" v-for="(item, i) in row.items" :key="`collection-${i}`" class="pt-0">
          <mini-statistic :statisticCount="item.count" :label="item.label" v-if="item" />
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    MiniStatistic: () => import('@/components/themes/widgets/mini-statistic/MiniStatistic'),
    PageHeading: () => import('@/components/themes/widgets/page-heading/PageHeading'),
  },
  data() {
    return {
      rows: [
        {
          title: 'Musang King',
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
          title: 'D24',
          items: [
            {
              label: 'Total',
              count: '1600'
            },
            {
              label: 'Grade A',
              count: '1,000'
            },
            {
              label: 'Grade B',
              count: '600'
            },
            null
          ]
        },
        {
          title: 'IOI',
          items: [
            {
              label: 'Total',
              count: '1600'
            },
            {
              label: 'Grade A',
              count: '1,000'
            },
            {
              label: 'Grade B',
              count: '600'
            },
            null
          ]
        },
        {
          title: 'Other cultivars',
          items: [
            {
              label: 'Total',
              count: '1600'
            },
            {
              label: 'Grade A',
              count: '1,000'
            },
            {
              label: 'Grade B',
              count: '600'
            },
            null
          ]
        },
        {
          title: 'Rejected',
          items: [
            {
              label: 'Total',
              count: '1600'
            },
            null
          ]
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>
