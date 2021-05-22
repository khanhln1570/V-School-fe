<template>
  <v-container class="invoiceGroup pa-0 mb-10">
    <v-row no-gutters class="">
      <v-col
        v-for="(item, index) in headersAfter"
        :key="index"
        class="invoiceGroup__header__item mb-3"
        
      >
        <span :class="{ 'ml-3': index === 1 }">
          {{ item.text }}
        </span>
        <span v-if="index === 0">({{ invoices.length }})</span>
      </v-col>
    </v-row>
    <invoice-row
      v-for="(item, index) in invoices"
      :invoice="item"
      :key="index"
      :headers="headersAfter"
    >
      <template #title="{ value, item }">
        <div
          class="pa-1 mr-1 rounded-circle d-inline-block"
          :class="item.status === 'PENDING' ? 'color-warning' : 'color-success'"
        ></div>
        <span>{{ value }}</span>
      </template>
      <template #action="{ item }">
          <v-checkbox
          v-model="selected"
          :value="item.id"
          hide-details
          dense
          :ripple="false"
        ></v-checkbox>
        <text-button :to="`schools/${item.id}`">
          <p class="mb-0 font-weight-medium">
            View
          </p>
        </text-button>
      </template>
    </invoice-row>
  </v-container>
</template>

<script>
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
          value: "title",
        },
        ...this.headers,
      ];
    },
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

<style lang="scss" src="./InvoiceGroup.scss" scoped>
</style>