<template>
  <div class="addNewFlag__container">
    <page-heading pageTitle="New Flag Entry" backTo="/flagged/incoming" />

    <!-- Modal for add new flag entry -->
    <v-container>
      <div class="pt-5" v-if="step === 1">
        <group-validator :validation="$v.addNewFlag.deliveryNoteNo">
          <template slot-scope="{ errors }">
            <main-input
              label="Delivery Note No:"
              name="password"
              type="text"
              v-model.trim="$v.addNewFlag.deliveryNoteNo.$model"
              :errors="errors"
            />
          </template>
        </group-validator>
        <text-button class="mt-5" @click.native="handleNextClick">Next</text-button>
      </div>

      <div class="pt-5" v-else>
        <div class="d-flex justify-space-between">
          <div>
            <p class="mb-0">Delivery note to:</p>
            <h2 class="d-block">{{ fakeDataNewEntry.id }}</h2>
          </div>
          <div class="text-right">
            <p class="mb-0">Entry date</p>
            <p class="mb-0 font-weight-bold">
              {{ fakeDataNewEntry.createDate }}
            </p>
          </div>
        </div>
        <v-row class="mt-1 mb-4 newFlag__body__author">
          <v-col cols="12" md="6">
            <p class="mb-0">Farmer details</p>
            <div class="newFlag__body__author__details pa-3">
              <p class="mb-0 d-flex justify-space-between">
                Farmer name <span>{{ fakeDataNewEntry.farmer.name }}</span>
              </p>
              <p class="mb-0 d-flex justify-space-between">
                Farmer ID <span>{{ fakeDataNewEntry.farmer.id }}</span>
              </p>
              <p class="mb-0 d-flex justify-space-between">
                Farm location
                <span>{{ fakeDataNewEntry.farmer.location }}</span>
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <p class="mb-0">Supervisor details</p>
            <div class="newFlag__body__author__details pa-3">
              <p class="mb-0 d-flex justify-space-between">
                Supervisor name
                <span>{{ fakeDataNewEntry.supervisor.name }}</span>
              </p>
              <p class="mb-0 d-flex justify-space-between">
                Contact number
                <span>{{ fakeDataNewEntry.supervisor.phone }}</span>
              </p>
              <p class="mb-0 d-flex justify-space-between">
                Collection Centre
                <span>{{ fakeDataNewEntry.supervisor.location }}</span>
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="py-0">
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12">
            <p class="mb-0 font-weight-bold">Flag cultivars</p>
          </v-col>
        </v-row>
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
              <group-validator :validation="$v.addNewFlag.deliveryNoteNo">
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
          <v-row>
            <v-col cols="12">
              <text-button class="mt-10" @click.native="handleBackClick">Back</text-button>
              <text-button class="mt-10" @click.native="handleNextClick">Next</text-button>
            </v-col>
          </v-row>
        </div>
      </div>

    </v-container>
  </div>
</template>

<script>
import { addNewFlag } from "@/validations/flag/flag.validation.js";
export default {
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
  },

  data: () => {
    return {
      fakeDataNewEntry: {
        id: "SR21-000-201",
        createDate: "11-03-2021 18:30",
        farmer: {
          id: "1212323",
          name: "Ah Keong",
          location: "Sungai Ruan",
        },
        supervisor: {
          id: "08198213",
          phone: "08198213",
          name: "Ah Lee",
          location: "SGRUAN001",
        },
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
        ],
      },
      addNewFlag: {
        deliveryNoteNo: null,
      },
      step: 1,
    };
  },
  methods: {
    handleNextClick() {
      if (this.step === 1) {
        this.$v.addNewFlag.deliveryNoteNo.$touch();

        if (this.$v.addNewFlag.deliveryNoteNo.$invalid) {
          return;
        }

        // do your submit logic here
        this.step = 2;
      }
    },
    handleBackClick() {
      this.step = 1;
    },
  },
  validations: {
    addNewFlag: addNewFlag,
  },
};
</script>