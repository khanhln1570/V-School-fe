<template>
  <div>
    <v-container>
      <page-header title="Phí thu" :backTo="`/invoices/`">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="invoice">
            <div class="d-flex justify-space-between">
              <div class="col-6 pa-0">
                <h2 class="font-weight-medium">
                  {{ invoice.description }} -
                  <span class="blue--text">{{ invoice.unit }}</span>
                </h2>
                <!-- <p class="blue--text">{{ invoice.expiry }}</p> -->
                <div>
                  <span class="font-weight-medium">Hoá đơn số: </span
                  ><span>{{ invoice.id }}</span>
                </div>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.zaZaQA
                  Adipisci necessitatibus voluptate praesentium distinctio quod
                  esse inventore fugit quisquam fuga libero! Earum natus cum
                  veritatis molestiae. Nisi labore hic assumenda praesentium?
                </p>
              </div>

              <div v-if="invoice.status === 'PENDING'" class="col-3 pa-0 font-weight-medium text-right orange--text">
                Chưa thanh toán
              </div>
              <div v-if="invoice.status === 'SUCCESS'" class="col-3 pa-0 font-weight-medium text-right success--text">
                Đã thanh toán
              </div>
            </div>
            <div class="text-right">
              <span class="font-weight-medium">Tổng cộng: </span>
              {{ numberToMoney(invoice.amount) }}
            </div>
          </v-card>
        </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { numberToMoney } from '@/helpers/utils.helper';

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
  computed: {
    ...mapGetters({
      getInvoiceById: "invoice/getInvoiceById",
    }),
  },
  data() {
    return {
      items: [
        {
          label: "Chi tiết phí thu",
          value: "personal",
        },
      ],
      invoice: {},
    };
  },
  fetch() {
    console.log(this.getInvoiceById(Number.parseInt(this.$route.params.id)));
    this.invoice = this.getInvoiceById(Number.parseInt(this.$route.params.id));
  },
  methods: {
    numberToMoney: numberToMoney,
  },
};
</script>

<style lang="scss" scoped>
</style>