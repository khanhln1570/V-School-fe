<template>
  <div>
    <v-container v-if="currentBill">
      <page-header :title="`Chi tiết hoá đơn ${currentBill.id}`" :backTo="currentUser.role === 'SCHOOL' ? '/invoicesSchool' : ''">
        <template #titleIcon></template>
        <template #subTitle></template>
      </page-header>
      <main-tabs :items="items">
        <template #personal>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentBill">
            <div class="d-flex justify-space-between">
              <div class="col-5 pa-0">
                <h2 class="font-weight-medium">
                  {{ currentBill.id }}
                </h2>
                <!-- <p class="blue--text">{{ currentBill.expiry }}</p> -->
                <div class="d-flex flex-column">
                  <span class="">Ngày thực hiện: {{ moment(currentBill.createDate).format('DD-MM-YYYY') }}</span>
                  <span class="">Trạng thái:
                  <v-chip
                    class="ma-2 "
                    :color="currentBill.status === 'pending' ? 'yellow' : 'green'"
                    small
                  >
                    {{ currentBill.status }}
                  </v-chip></span>
                </div>
              </div>
              <div>
                <h3 class="text-right">
                  <span class="font-weight-medium align-center">Tổng cộng: </span>
                  <span class="font-weight-regular">{{ numberToMoney(currentBill.amount) }} (VND)</span>
                </h3>
              </div>
            </div>
          </v-card>
        </template>
        <template #personal2>
          <v-card outlined class="rounded-lg mt-6 px-10 py-4" v-if="currentBill">
            <div class="d-flex justify-space-between" v-for="(item, index) in currentBill.bill_mapping_history"
              :key="index">
              <div class="col-5 pa-0">
                <h2 class="font-weight-medium">
                  {{ item.invoiceId }}
                </h2>
                <!-- <p class="blue--text">{{ currentBill.expiry }}</p> -->
                <div class="d-flex flex-column">
                  <span class="">Trạng thái:
                  <v-chip
                    class="ma-2 "
                    :color="item.status === 'pending' ? 'yellow' : 'green'"
                    small
                  >
                    {{ item.status }}
                  </v-chip></span>
                </div>
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
import moment from "moment";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
      currentBill: "bill/getCurrentBill",
    }),
  },
  data() {
    return {
      items: [
        {
          label: "Tổng quan",
          value: "personal",
        },
        {
          label: "Phí thu thuộc hoá đơn",
          value: "personal2",
        },
      ],
      from: '',
    };
  },
  async created() {
    console.log("id", this.$route.params.id);
    await this.$store.dispatch(
      "bill/getBillDetails",
      {id: this.$route?.params?.id ? this.$route.params.id : "2"}
    );
    // console.log(this);
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
    moment: moment,
  },
};
</script>

<style lang="scss" scoped>
</style>
