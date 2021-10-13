<template>
  <div>
    <v-container>
      <page-header title="Phí thu" :backTo="currentUser.role === 'SCHOOL' ? '/invoicesSchool' : ''">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentInvoice">
            <div class="d-flex justify-space-between">
              <div class="col-6 pa-0">
                <h2 class="font-weight-medium">
                  {{ currentInvoice.description }}
                </h2>
                <!-- <p class="blue--text">{{ currentInvoice.expiry }}</p> -->
                <div class="d-flex flex-column">
                  <span class="">Hoá đơn số: {{ currentInvoice.id }}</span>
                  <span class="">Họ và tên học sinh: {{ currentInvoice.name }}</span>
                  <span class="blue--text">BHYT: {{ currentInvoice.BHYT }}</span>
                </div>
              </div>

              <div v-if="currentInvoice.status === 'PENDING'" class="col-3 pa-0 font-weight-medium text-right orange--text">
                Chưa thanh toán
              </div>
              <div v-if="currentInvoice.status === 'SUCCESS'" class="col-3 pa-0 font-weight-medium text-right success--text">
                Đã thanh toán
              </div>
              <h3 class="text-right col-4">
                <span class="font-weight-medium align-center">Tổng cộng: </span>
                <span class="font-weight-regular">{{ numberToMoney(currentInvoice.ammount) }} (VND)</span>
              </h3>
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
      from: '',
    };
  },
  async fetch() {
    await this.$store.dispatch(
      "invoice/getCurrentInvoice",
      {id: this.$route.params.id}
    );
    console.log(this);
    this.form = this.prevRoute.path;
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    next(vm => {
      vm.prevRoute = from
    })
  },
  // mounted() {
  //   console.log("route", this.$route);
  // },
  methods: {
    numberToMoney: numberToMoney,
  },
};
</script>

<style lang="scss" scoped>
</style>