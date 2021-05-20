<template>
  <div>
    <v-container>
      <page-header title="Trần Thị Tố Trinh">
        <template #titleIcon>
          <img src="@/assets/images/school.svg" alt="student" />
        </template>
        <template #address>
          <p class="txt-secondary--text mt-5">8C5, Hoàng Diệu</p>
        </template>
      </page-header>
      <main-tab :items="items">
        <template #invoices>
          <div class="mt-12 row d-felx justify-center">
            <div class="col-12">
              <div class="d-flex justify-space-around">
                <p>Phụ đạo</p>
                <p>Số tiền &#9660;</p>
                <p>Ghi chú</p>
                <p>Thanh toán &#8594;</p>
              </div>
              <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
                <div
                  v-for="(invoice, index) in invoices"
                  :key="index"
                  class="d-flex justify-space-around"
                >
                  <div class="font-weight-medium">
                    <span class="dot mr-2"></span>{{ invoice.name }}
                  </div>
                  <span>{{ invoice.fee }}</span>
                  <span>{{ invoice.note }}</span>
                  <input type="checkbox" />
                </div>
              </v-alert>
            </div>
          </div>
        </template>
        <template #activities>
          Hoạt động
        </template>
        <template #settings>
          Cài đặt
        </template>

      </main-tab>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTab: () => import("@/components/commons/main-tabs/MainTab"),
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
          label: "Cài đặt",
          value: "settings",
        },
      ],
      
    };
  },
  computed: {
    invoices() {
      return this.$store.state.invoices.invoices;
    },
  },
  mounted() {
    // console.log(this.$route.params.id);
    console.log(this.$store.state.invoices.invoices);
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