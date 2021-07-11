<template>
  <div>
    <v-container>
      <page-header title="Phí thu" :backTo="currentUser.role === 'school' ? '/invoicesSchool': '/invoices/' ">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
<<<<<<< HEAD
          <v-card outlined class="rounded-lg mt-6 px-10 py-4">
=======
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="invoice">
>>>>>>> 21989337772728326341e992db0f348c191aab39
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

<<<<<<< HEAD
              <div
                class="col-3 pa-0 font-weight-medium text-right orange--text"
              >
                Chưa thanh toán
              </div>
            </div>

            <div class="d-flex justify-space-between row mt-xl-10 mb-xl-2">
              <div class="col-6">
                <v-btn
                  elevation="0"
                  color="primary"
                  class="text-lowercase rounded-lg"
                  ><span class="text-uppercase">T</span>iến hành thanh
                  toán</v-btn
                ><v-btn
                  outlined
                  elevation="0"
                  color="orange"
                  class="text-lowercase rounded-lg ml-3"
                  style="color: #677694"
                  ><span class="text-uppercase">B</span>áo cáo nhầm lẫn</v-btn
                >
                
=======
              <div v-if="invoice.status === 'PENDING'" class="col-3 pa-0 font-weight-medium text-right orange--text">
                Chưa thanh toán
              </div>
              <div v-if="invoice.status === 'SUCCESS'" class="col-3 pa-0 font-weight-medium text-right success--text">
                Đã thanh toán
>>>>>>> 21989337772728326341e992db0f348c191aab39
              </div>
              <h3 class="text-right col-4">
                <span class="font-weight-medium align-center">Tổng cộng: </span>
                <span class="font-weight-regular">{{ invoices.total }} (VND)</span>
              </h3>
            </div>
<<<<<<< HEAD
=======
            <div class="text-right">
              <span class="font-weight-medium">Tổng cộng: </span>
              {{ numberToMoney(invoice.amount) }}
            </div>
>>>>>>> 21989337772728326341e992db0f348c191aab39
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
      currentUser: "auth/getCurrentUser",
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