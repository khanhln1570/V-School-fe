<template>
  <v-container>
    <page-header title="Trần Thị Tố Trinh" :backTo="`/students/${currentChild.id}`">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="student" />
      </template>
      <template #subTitle>
        <p class="txt-secondary--text mt-5">8C5, Hoàng Diệu</p>
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
            <div class="col-4">
              <span>- {{ invoice.title }}</span>
            </div>
            <div class="col-4">
              <span> {{ invoice.total }}</span>
            </div>
            <div class="col-4"></div>
          </div>
          <h4 class="mt-15">Tổng tiền</h4>
          <div class="row mt-3">
            <div class="col-4">
              <span>- Học phí học kì I - 2021</span>
            </div>
            <div class="col-4">
              <span>1.300.000</span>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="mt-7">
            <v-btn depressed elevation="0" color="primary" class="rounded-lg"
              >Tiến hành thanh toán</v-btn
            >
            <v-btn outlined color="red" class="ml-4 rounded-lg">Huỷ</v-btn>
          </div>
        </v-card>
      </template>
    </main-tabs>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

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
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
</style>