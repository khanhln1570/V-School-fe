<template>
  <v-container class="invoiceManageGroup pa-0 mb-10">
    <v-row no-gutters class="">
      <v-col
        v-for="(item, index) in headersAfter"
        :key="index"
        class="invoiceManageGroup__header__item mb-3"
      >
        <span :class="{ 'ml-3': index === 1 }">
          {{ item.text }}
        </span>
        <span v-if="index === 0">({{ invoices.length }})</span>
      </v-col>
    </v-row>
    <!-- <div v-for="(item, index) in invoices" :key="index">{{ item }}</div> -->
    <invoice-manage-row
      v-for="(item, index) in invoices"
      :key="index"
      :invoice="item"
      :headers="headersAfter"
    >
      <template #title="{ value, item }">
        <div
          class="pa-1 mr-1 rounded-circle d-inline-block"
          :class="item.status === 'PENDING' ? 'color-warning' : 'color-success'"
        ></div>
        <span>{{ value }}</span>
        <span>{{item.id}}</span>
      </template>
    </invoice-manage-row>
  </v-container>
</template>

<script>
export default {
  components: {
    InvoiceManageRow: () =>
      import("@/components/invoice-manage/invoice-manage-row/InvoiceManageRow"),
  },
  props: {
    invoiceType: {
      type: Object,
      default: null,
    },
    headers: {
      type: Array,
      default: () => [],
    },
    invoices: {
      type: Array,
      default: () => [],
    },
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
};
</script>

<style lang="scss" scoped>
@import "./InvoiceManageGroup.scss";
</style>