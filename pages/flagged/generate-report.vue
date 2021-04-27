<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Generate report" backTo="/flagged/history">
      </page-heading>
      <v-container fluid>
        
        <v-card
          class="mx-auto mt-3"
        >
          <v-card-text>
            <v-row class="flex-sm-row flex-column">
              <v-col lg="3" md="4" sm="6" cols="12" class="d-flex flex-column justify-space-between">
                <h2 class="mb-3">Date range</h2>
                <div class="d-flex">
                  <div class="d-flex align-center">
                    <h3 class="mr-2 font-weight-regular">Start date</h3>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          append-outer-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          dense
                          solo
                          hide-details="auto"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @input="menu = false"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </div>
              </v-col>
              <v-col lg="3" md="4" sm="6" cols="12" class="d-flex flex-column justify-end">
                <div class="d-flex">
                  <div class="d-flex align-center">
                    <h3 class="mr-2 font-weight-regular">End date</h3>
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date2"
                          append-outer-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          dense
                          solo
                          hide-details="auto"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date2"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </div>
              </v-col> 
              <v-col lg="3" md="4" sm="8" cols="12" class="d-flex flex-column justify-space-between">
                <h2 class="mb-3">Collecting center</h2>
                <div class="d-flex align-center">
                  <main-select :items="selectItem"></main-select>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col>
                <main-checkbox :listCheckbox="flaggedEntryCheckbox" heading="General"></main-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end mt-16">
            <text-button>generate report</text-button>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
  
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
    selectItem: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    selected: [],
    flaggedEntryCheckbox: [
      {
        label: "All",
        value: "all"
      },
      {
        label: "Approved",
        value: "approved"
      },
      {
        label: "Rejected",
        value: "rejected"
      }
    ],
  }),
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    MainSelect: () => import('@/components/commons/main-select/MainSelect'),
    MainCheckbox: () => import('@/components/commons/main-checkbox/MainCheckbox'),
    TextButton: () => import('@/components/commons/main-button/text-button/TextButton'),
  }
}
</script>

<style>

</style>