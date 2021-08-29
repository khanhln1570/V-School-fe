<template>
  <div>
    <v-container>
      <page-header title="Phí thu" :backTo="currentUser.role === 'SCHOOL' ? '/invoicesSchool': '/invoices/' ">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentInvoice">
            <div class="d-flex justify-space-between">
              <div class="col-6 pa-0">
                <h2 class="font-weight-medium">
                  {{ currentInvoice.description }} - <span class="blue--text">Tháng {{ currentInvoice.month }}</span>
                </h2>
                <!-- <p class="blue--text">{{ invoice.expiry }}</p> -->
                <div>
                  <span class="font-weight-medium">Hoá đơn số: </span
                  ><span>{{ currentInvoice.id }}</span>
                </div>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.zaZaQA
                  Adipisci necessitatibus voluptate praesentium distinctio quod
                  esse inventore fugit quisquam fuga libero! Earum natus cum
                  veritatis molestiae. Nisi labore hic assumenda praesentium?
                </p>
              </div>

              <div class="col-4 d-flex flex-column justify-space-between">
                <h3 class="text-right">
                  <span class="font-weight-medium align-center">Tổng cộng: </span>
                  <span class="font-weight-regular txt-success--text">{{ numberToMoney(currentInvoice.ammount) }} (VND)</span>
                </h3>
                <v-chip color="orange" v-if="!currentInvoice.bank" class="font-weight-medium white--text ml-auto">
                  Chưa thanh toán
                </v-chip>
                <v-chip color="green" v-else-if="currentInvoice.bank" class="font-weight-medium white--text ml-auto">
                  Đã thanh toán
                </v-chip>
              </div>
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
import { GET_INVOICE_BY_ID } from "~/store/invoice/invoice.constants.js";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
  computed: {
    ...mapGetters({
      getInvoiceById: "invoice/getInvoiceById",
      currentUser: "auth/getCurrentUser",
      currentInvoice: "invoice/getCurrentInvoice",
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
    };
  },
  async fetch() {
    // console.log(this.getInvoiceById(Number.parseInt(this.$route.params.id)));
    await this.$store.dispatch(GET_INVOICE_BY_ID, {id: this.$route.params.id});
  },
  methods: {
    numberToMoney: numberToMoney,
  },
};
</script>

<style lang="scss" scoped>
</style>