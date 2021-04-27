<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Edit history" backTo="/flagged/history">
      </page-heading>
      <v-container fluid>
        <v-card
          flat
          rounded="0"
          class="overflow-y-auto mt-4"
          max-height="75vh"
        >
          <v-card-text>
            <v-container>
              <v-row>
                <v-col md="9">
                  <v-row>
                    <v-col>
                      <h3 class="black--text font-weight-medium">Delivery note no:</h3>
                      <span class="black--text d-block font-weight-bold text-h4">SR21-000-010</span>
                    </v-col>
                    <v-col>
                      <h3 class="black--text text-right font-weight-medium">Entry date</h3>
                      <span class="black--text d-block text-right font-weight-bold text-h6">11 Mar 2021 . 06.30 pm</span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3 class="font-weight-medium">Farmer details</h3>
                      <v-card flat outlined>
                        <v-card-text>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Farmer Name</h4>
                            <span>Ah Keong</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Farmer ID</h4>
                            <span>123654789</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Farmer Location</h4>
                            <span>Sungai Ruan</span>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col>
                      <h3 class="font-weight-medium">Supervisor details</h3>
                      <v-card flat outlined>
                        <v-card-text>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Supervisor Name</h4>
                            <span>Ah Lee</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Contact Number</h4>
                            <span>0123321123</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <h4 class="font-weight-medium">Collection centre</h4>
                            <span>SGRUAN001</span>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-divider></v-divider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3 class="black--text mb-3">Flag cultivars</h3>
                      <h4 class="font-weight-regular">Select durian type</h4>
                      <main-select class="mb-4" :items="selectItem"></main-select>
                      <v-row>
                        <v-col>
                          <main-input 
                            label="Grade A"
                            placeholder="..."
                          ></main-input>
                        </v-col>
                        <v-col>
                          <main-input 
                            label="Grade B"
                            placeholder="..."
                          ></main-input>
                        </v-col>
                        <v-col>
                          <main-input 
                            label="Grade C"
                            placeholder="..."
                          ></main-input>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-divider></v-divider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h4 class="font-weight-regular">Select durian type</h4>
                      <main-select class="mb-4" :items="selectItem"></main-select>
                      <v-row>
                        <v-col cols="4">
                          <main-input 
                            label="Grade A"
                            placeholder="..."
                          ></main-input>
                        </v-col>
                        <v-col cols="4">
                          <main-input 
                            label="Grade B"
                            placeholder="..."
                          ></main-input>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              
            </v-container>
          </v-card-text>
          
        </v-card>
        <v-divider></v-divider>
        <div class="white pa-3">
          <text-button>Cancel</text-button>
          <text-button>Save entry</text-button>
        </div>
      </v-container>
    </v-col>
  </v-row>
  
</template>

<script>
export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () => import('@/components/commons/main-button/text-button/TextButton'),
    MainSelect: () => import('@/components/commons/main-select/MainSelect'),
    MainInput: () => import('@/components/commons/main-input/MainInput'),
  },
  data: () => ({
      selectItem: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>

<style>

</style>