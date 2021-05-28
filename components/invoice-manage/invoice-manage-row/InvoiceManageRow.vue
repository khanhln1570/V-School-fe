<template>
  <div>
    <v-sheet elevation="0" class="invoiceManageRow mb-2 px-5 py-3">
      <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in headers"
          :key="index"
          class="pa-0 d-flex align-center"
          :class="{
            'd-flex justify-end': index === headers.length - 1,
          }"
        >
          <slot :name="item.value" :value="invoice[item.value]" :item="invoice">
            {{ invoice[item.value] }}
          </slot>
        </v-col>
      </v-row>
    </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: null,
    },
    invoice: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./InvoiceManageRow.scss";
</style>