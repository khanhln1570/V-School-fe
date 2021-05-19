<template>
  <v-container>
    <page-header title="Trần Thị Tố Trinh">
      <template #titleIcon>
        <img src="@/assets/images/school.svg" alt="student" />
      </template>
      <template #address>
        <p class="txt-secondary--text mt-5">8C5, Hoàng Diệu</p>
      </template>
    </page-header>
    <page-body tab="Thanh toán phí thu">
      <template #tabContent>
        <h4 class="font-weight-medium">Phụ đạo (1)</h4>
        <p>- Phụ đạo tiếng anh</p>
        <h4 class="font-weight-medium">Học phí (1)</h4>
        <p>- Học phí học kì I - 2021</p>
        <h4 class="mt-15">Tổng tiền</h4>
        <p>- Học phí học kì I - 2021</p>
        <div class="mt-7">
          <v-btn depressed elevation="0" color="primary" class="rounded-lg"
            >Tiến hành thanh toán</v-btn
          >
          <v-btn outlined color="red" class="ml-4 rounded-lg">Huỷ</v-btn>
        </div>
      </template>
    </page-body>
  </v-container>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
    MainTab: () => import("@/components/commons/main-tabs/MainTab"),
  },
  mounted() {
    console.log(this.$route.params.billId);
  },
};
</script>

<style lang="scss" scoped>
</style>