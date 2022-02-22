<template>
  <div>
    <v-container v-if="currentChild">
      <page-header :title="currentChild.name" :backTo="currentUser.accRole === 'PARENT' ? '/your-child' : '/students'">
        <template #titleIcon>
          <img
            src="@/assets/images/woman.svg"
            alt="woman"
            v-if="currentChild.gender === 'FEMALE'"
          />
          <img
            src="@/assets/images/man.svg"
            alt="man"
            v-else-if="currentChild.gender === 'MALE'"
          />
        </template>
        <template #subTitle>
          <p class="txt-secondary--text mb-0">
            {{ currentChild.classcode }}
            <!-- {{ currentChild.schoolId }} -->
          </p>
          <p class="txt-active--text">
            BHYT: {{ currentChild.BHYT }}
          </p>
        </template>
      </page-header>
      <main-tabs :items="items">
        <template #tabRight>
          <nuxt-link
            v-if="currentUser.role === 'PARENT'"
            class="d-flex align-center"
            :class="'txt-active--text'"
            :to="'/payment'"
            @click.native="onCheckout"
            >Thanh toán hoá đơn
            <v-icon
              size="20"
              class="mb-0 ml-2"
              :color="'txt-active'"
              >mdi-arrow-right</v-icon
            >
          </nuxt-link>
        </template>

        <template #invoices>
          <div class="mt-10" v-if="invoiceTypes">
            <div v-for="(type, index) in invoiceTypes" :key="index">
              <invoice-group
                :invoiceType="type"
                :invoices="getCurrentChildInvoices"
                :headers="headers"
                :showCheckBox="false"
                @selected="handleSelectedChange"
              ></invoice-group>
            </div>
          </div>
        </template>
        <template #activities> Hoạt động </template>
        <template #settings> Cài đặt </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { arrayToQuery } from "@/helpers/utils.helper";
import { GET_CHILD_BY_ID, GET_ALL_INVOICES_OF_CHILD } from "~/store/yourChild/yourChild.constants";
import { GET_CUSTOMER_DETAILS_ACTION } from "~/store/payment/payment.constants";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    InvoiceGroup: () =>
      import("@/components/yourChild/invoice-group/InvoiceGroup"),
  },
  computed: {
    ...mapGetters({
      invoiceTypes: "invoice/getInvoiceTypes",
      currentChild: "yourChild/getCurrentChild",
      getCurrentChildInvoices: "yourChild/getCurrentChildInvoices",
      currentUser: "auth/getCurrentUser",
    }),
    // invoices() {
    //   return this.$store.state.invoices.invoices;
    // },
    selectedInvoiceId() {
      // return this.selectedInvoice.reduce((accumulator, currentValue) => {
      //   currentValue.values.forEach((id) => accumulator.push(id));
      //   // return accumulator + currentValue.values.length
      //   return accumulator;
      // }, []);
      return [];
    },
    handleCheckoutSelect() {
      let string = arrayToQuery(this.selectedInvoiceId);
      return `/students/${this.currentChild.id}/billReview?invoices=${string}`;
    },
  },
  async created() {
    await this.$store.dispatch(
      GET_CHILD_BY_ID,
      {id: this.$route.params.id}
    );
    await this.$store.dispatch(
      GET_ALL_INVOICES_OF_CHILD,
      { params: {search: this.currentChild.BHYT} }
    );
  },
  data() {
    return {
      items: [
        {
          label: "Phí thu",
          value: "invoices",
        },
        {
          label: "Hoạt động",
          value: "activities",
          disabled: true,
        },
        {
          label: "Thời khoá biểu",
          value: "timeSchedular",
          disabled: true,
        },
      ],
      headers: [
        {
          text: "Số tiền",
          value: "ammount",
        },
        {
          text: "Tháng",
          value: "month",
        },
        {
          text: "",
          value: "action",
        },
      ],
      selectedInvoice: [],
    };
  },
  methods: {
    getInvoiceByType(type) {},
    handleSelectedChange(item) {
      this.selectedInvoice.map((type) => {
        if (type.id === item.id) {
          type.values = item.values;
        }
      });
    },
    async onCheckout() {
      try {
        await this.$store.dispatch(GET_CUSTOMER_DETAILS_ACTION, {
          BHYT: this.currentChild.BHYT
        });
        this.$router.push('/payment');
      } catch (error) {
        this.message = "";
      } finally {
      }
    },
  },
  mounted() {
    this.invoiceTypes.forEach((type) => {
      this.selectedInvoice.push({
        id: type.id,
        values: [],
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.dot {
  background-color: green;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>
