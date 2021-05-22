<template>
  <v-container>
    <page-header :title="currentChild.name" :backTo="`/students/${currentChild.id}`">
      <template #subTitle>
        <p class="txt-secondary--text mt-3">{{currentChild.address}}</p>
      </template>
    </page-header>
    <main-tabs :items="items">
      <template #bills>
        <v-card outlined class="mt-5 rounded-lg pa-6">
          <h4 class="font-weight-medium">Bao gồm ({{ arrayInvoices.length }})</h4>
          <div
            class="mt-3 row"
            v-for="(invoice, index) in arrayInvoices"
            :key="index"
          >
            <div class="col-4 py-0">
              <span>- {{ invoice.title }}</span>
            </div>
            <div class="col-4 py-0">
              <span> {{ numberToMoney(invoice.total, false) }}</span>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="row mt-10">
            <div class="col-4">
              <h4 class="">Tổng tiền</h4>
            </div>
            <div class="col-4">
              <span>{{numberToMoney(totalArrayInvoices)}}</span>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="mt-7">
            <v-btn depressed elevation="0" color="primary" class="rounded-lg"
              >Tiến hành thanh toán</v-btn
            >
            <v-btn outlined color="red" class="ml-4 rounded-lg" :to="`/students/${currentChild.id}`">Huỷ</v-btn>
          </div>
        </v-card>
      </template>
    </main-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from '@/helpers/utils.helper';

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
  data() {
    return {
      items: [
        {
          label: "Thanh toán phí thu",
          value: "bills",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      currentChild: "yourChild/getCurrentChild",
      getCurrentChildInvoicesByArrayId: "yourChild/getCurrentChildInvoicesByArrayId"
    }),
    arrayInvoices() {
      let arrayInvoiceId = this.$route.query.invoices.split(',');
      arrayInvoiceId = arrayInvoiceId.map(item => Number.parseInt(item));
      return this.getCurrentChildInvoicesByArrayId(arrayInvoiceId);
    },
    totalArrayInvoices() {
      return this.arrayInvoices.reduce((initValue, currentValue) => {
        return initValue + currentValue.total;
      }, 0)
    }
  },
  methods: {
    numberToMoney: numberToMoney,
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>