<template>
  <v-container class="invoiceGroup pa-0">
    <v-row no-gutters>
      <v-col v-for="(item, index) in headersAfter" :key="index" class="invoiceGroup__header__item">
        {{item.text}}
        <span v-if="index === 0">({{invoices.length}})</span>
      </v-col>
    </v-row>
    <invoice-row v-for="(item, index) in invoices"  :key="index"></invoice-row>
  </v-container>
</template>

<script>
export default {
  components: {
    InvoiceRow: () => import("@/components/yourChild/invoice-row/InvoiceRow"),
  },
  props: {
    invoices: {
      type: Array,
      default: ()=>[],
    },
    headers: {
      type: Array,
      default: ()=>[],
    },
    invoiceType: {
       type: Object,
      default: null,
    }
  },
  data(){
    return {
      selected: [],
    }
  },
  computed: {
    headersAfter() {
      return [{
          text: this.invoiceType.label,
          value: "title",
        },...this.headers]
    }
  },
};
</script>

<style lang="scss" src="./InvoiceGroup.scss" scoped>
</style>