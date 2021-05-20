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
        <template #invoices>
          <div class="mt-10">
            <div v-for="(type, index) in invoiceTypes" :key="index">
              <invoice-group
                :invoiceType="type"
                :invoices="currentChildInvoicesByType(type.id)"
                :headers="headers"
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
<<<<<<< HEAD
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
=======
          label: "Cài đặt",
          value: "settings",
>>>>>>> develop
        },
      ],
      
    };
  },
<<<<<<< HEAD
  methods: {
    getInvoiceByType(type) {},
=======
  computed: {
    invoices() {
      return this.$store.state.invoices.invoices;
    },
>>>>>>> develop
  },
  mounted() {
    console.log(this.$route.params.id);
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