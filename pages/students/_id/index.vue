<template>
  <div>
    <v-container v-if="currentChild">
      <page-header :title="currentChild.name">
        <template #titleIcon>
          <img src="@/assets/images/woman.svg" alt="woman" />
        </template>
        <template #address>
          <p class="txt-secondary--text mt-2">
            {{ currentChild.classCode }}, {{ currentChild.schoolId }}
          </p>
        </template>
      </page-header>
      <main-tabs :items="items">
        <template #tabRight>
          <span
          :class="selectedInvoiceLength ? 'icon-active--text' : 'txt-secondary--text'"
          >({{ selectedInvoiceLength || 0 }}) Thanh toán
          <v-icon
            size="20"
            class="mb-1"
            :color="selectedInvoiceLength ? 'icon-active' : 'txt-secondary--text'"
            >mdi-arrow-right</v-icon
          >
        </span>
        </template>
        

        <template #invoices>
          <div class="mt-10">
            <div v-for="(type, index) in invoiceTypes" :key="index">
              <invoice-group
                :invoiceType="type"
                :invoices="currentChildInvoicesByType(type.id)"
                :headers="headers"
                @selected="handleSelectedChange"
                v-if="currentChildInvoicesByType(type.id).length"
              ></invoice-group>
            </div>
          </div>
        </template>
        <template #activities>
          Hoạt động
        </template>
        <template #settings>
          Cài đặt
        </template>
      </main-tabs>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTabs: () => import("@/components/commons/main-tabs/MainTabs"),
    InvoiceGroup: () =>
      import("@/components/yourChild/invoice-group/InvoiceGroup"),
  },
  computed: {
    ...mapGetters({
      invoiceTypes: "invoices/getInvoiceTypes",
      currentChildInvoices: "yourChild/getCurrentChildInvoices",
      currentChild: "yourChild/getCurrentChild",
      currentChildInvoicesByType: "yourChild/getCurrentChildInvoicesByType",
    }),
    invoices() {
      return this.$store.state.invoices.invoices;
    },
    selectedInvoiceLength() {
      return this.selectedInvoice.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.values.length
      }, 0)
    }
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
        },
        {
          label: "Thời khoá biểu",
          value: "timeSchedular",
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
      console.log(this.selectedInvoice.map(type => {
        if(type.id === item.id) {
          type.values = item.values;
        }
      }));
      
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    this.invoiceTypes.forEach(type => {
      this.selectedInvoice.push({
        id: type.id,
        values: []
      })
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