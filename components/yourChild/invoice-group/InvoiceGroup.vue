<template>
  <v-container class="invoiceGroup pa-0 mb-10">
    <v-row no-gutters class="ml-5">
      <v-col
        v-for="(item, index) in headersAfter"
        :key="index"
        class="invoiceGroup__header__item mb-3"
        :cols="headersAfter.length"
      >
        <span :class="{ 'margin-big': index === 1 }">
          {{ item.text }}
        </span>
        <span v-if="index === 0 && invoices">({{ invoices.length }})</span>
      </v-col>
    </v-row>
    <invoice-row
      v-for="(item, index) in invoices"
      :invoice="item"
      :key="index"
      :headers="headersAfter"
      >
      <template #description="{ value, item }">
        <div
          class="pa-1 mr-1 rounded-circle d-inline-block"
          :class="item.bank ? 'color-success' : 'color-warning'"
        ></div>
        <span>{{ value }}</span>
      </template>
      <template #ammount="{ value, item }">
        <span class="txt-active--text">{{ numberToMoney(value) }}</span>
      </template>
      <template #action="{ item }">
          <v-checkbox
          v-model="selected"
          :value="item.id"
          hide-details
          dense
          :ripple="false"
          v-show="showCheckBox"
          v-if="item.status !== 'SUCCESS' && currentUser && currentUser.role === 'PARENT'"
        ></v-checkbox>
        <p class="mb-0 txt-success--text font-weight-bold" v-else-if="currentUser.role === 'PARENT'">Đã thu</p>
        <text-button small :to="`/invoices/${item.id}`" class="ml-2">
          <p class="mb-0 font-weight-medium">
            Chi tiết
          </p>
        </text-button>
      </template>
    </invoice-row>
  </v-container>
</template>

<script>
import { numberToMoney } from '@/helpers/utils.helper';
import { mapGetters } from "vuex";

export default {
  components: {
    InvoiceRow: () => import("@/components/yourChild/invoice-row/InvoiceRow"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  props: {
    invoices: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
    invoiceType: {
      type: Object,
      default: null,
    },
    showCheckBox: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    headersAfter() {
      return [
        {
          text: this.invoiceType.label,
          value: "description",
        },
        ...this.headers,
      ];
    },
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
  },
  methods: {
    numberToMoney: numberToMoney
  },
  watch: {
    selected() {
      this.$emit("selected", {
        id: this.invoiceType.id,
        values: this.selected
      });
    }
  }
};
</script>

<style lang="scss" src="" scoped>
.margin-big {
  margin-left: 115px !important;
}

$breakpoint-mobile: 600px;
@media (max-width: $breakpoint-mobile) {
.margin-big {
  margin-left: 0px !important;
}
}
</style>
