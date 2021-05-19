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
      <v-tabs color="black" slider-color="blue" class="mt-10">
        <v-tab>Phí thu</v-tab>
        <v-tab>Hoạt động</v-tab>
        <v-tab>Cài đặt</v-tab>
      </v-tabs>
      <div class="mt-12 row d-felx justify-center">
        <div class="col-12">
          <div class="d-flex justify-space-around">
            <p>Phụ đạo</p>
            <p>Số tiền &#9660;</p>
            <p>Ghi chú</p>
            <p>Thanh toán &#8594;</p>
          </div>
          <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
            <div class="d-flex justify-space-around">
              <div class="font-weight-medium">
                <span class="dot mr-2"></span>Phụ đạo tiếng anh
              </div>
              <span>320.000</span>
              <span>Tháng 2</span>
              <input type="checkbox" />
            </div>
          </v-alert>
          <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
            <div class="d-flex justify-space-around">
              <div class="font-weight-medium">
                <span class="dot mr-2"></span>Phụ đạo tiếng anh
              </div>
              <span>320.000</span>
              <span>Tháng 2</span>
              <input type="checkbox" />
            </div>
          </v-alert>
          <v-alert outlined class="mt-xl-5 mt-md-3 px-xl-3 py-xl-4">
            <div class="d-flex justify-space-around">
              <div class="font-weight-medium">
                <span class="dot mr-2"></span>Phụ đạo tiếng anh
              </div>
              <span>320.000</span>
              <span>Tháng 2</span>
              <input type="checkbox" />
            </div>
          </v-alert>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageHeader: () => import("@/components/commons/page-header/PageHeader"),
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