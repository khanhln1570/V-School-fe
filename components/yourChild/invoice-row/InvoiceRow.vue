<template>
  <v-sheet 
    elevation="0" 
    :class="['invoiceRow mb-2', {'px-5 py-3': mobile === true}]">
    <v-container class="d-flex justify-space-between align-center">
      <div
        v-for="(item, index) in headers"
        :key="index"
        class="pa-0 d-flex align-center"
        :class="{
          'd-flex justify-end': index === headers.length - 1,
        }"
        :cols="index === headers.length - 1 ? 1 : null"
        >
        <slot :name="item.value" :value="invoice[item.value]" :item="invoice">
          {{ invoice[item.value] }}
        </slot>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    invoice: {
      type: Object,
      default: null,
    },
    headers: {
      type: Array,
      default: null,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" src="./InvoiceRow.scss" scoped>
</style>