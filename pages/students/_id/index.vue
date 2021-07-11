<template>
  <div>
    <v-container v-if="currentChild">
      <page-header :title="currentChild.name">
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
          <p class="txt-secondary--text mt-2">
            {{ currentChild.classcode }}, 
            Tiểu Học Bạch Đằng
            <!-- {{ currentChild.schoolId }} -->
          </p>
        </template>
      </page-header>
      <main-tabs :items="items">
        <template #tabRight>
          <nuxt-link
            class="d-flex align-center"
            :class="
              selectedInvoiceId.length
                ? 'txt-active--text'
                : 'txt-secondary--text'
            "
            :to="selectedInvoiceId.length ? handleCheckoutSelect : '#'"
            >({{ selectedInvoiceId.length || 0 }}) Thanh toán
            <v-icon
              size="20"
              class="mb-0 ml-2"
              :color="
                selectedInvoiceId.length ? 'txt-active' : 'txt-secondary--text'
              "
              >mdi-arrow-right</v-icon
            >
          </nuxt-link>
        </template>

        <template #invoices>
          <div class="mt-10">
            <div v-for="(type, index) in invoiceTypes" :key="index">
              <invoice-group
                :invoiceType="type"
                :invoices="getCurrentChildInvoicesByType(type.id)"
                :headers="headers"
                @selected="handleSelectedChange"
                v-if="getCurrentChildInvoicesByType(type.id).length"
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
      getCurrentChildInvoicesByType: "yourChild/getCurrentChildInvoicesByType",
    }),
    // invoices() {
    //   return this.$store.state.invoices.invoices;
    // },
    selectedInvoiceId() {
      return this.selectedInvoice.reduce((accumulator, currentValue) => {
        currentValue.values.forEach((id) => accumulator.push(id));
        // return accumulator + currentValue.values.length
        return accumulator;
      }, []);
    },
    handleCheckoutSelect() {
      let string = arrayToQuery(this.selectedInvoiceId);
      return `/students/${this.currentChild.id}/billReview?invoices=${string}`;
    },
  },
  async beforeCreate() {
    await this.$store.dispatch(
      "yourChild/setCurrentChild",
      this.$route.params.id
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
          value: "total",
        },
        {
          text: "Ghi chú",
          value: "note",
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