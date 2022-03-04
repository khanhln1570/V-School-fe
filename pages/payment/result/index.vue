<template>
  <div class="px-xl-8 d-flex flex-column justify-center">
    <div class="d-flex flex-column justify-center align-center mt-5" v-if="$route.query.status=== 'success'">
      <h3 class="mb-5">Thanh toán hoá đơn thành công</h3>
      <img width="100px" src="@/assets/images/checked.svg" alt="checked">
    </div>
    <div class="d-flex flex-column justify-center align-center mt-5" v-else-if="$route.query.status=== 'fail'">
      <h3 class="mb-5">Thanh toán hoá đơn thất bại</h3>
      <img width="100px" src="@/assets/images/cancel.svg" alt="cancel">
    </div>
    <v-btn to="/dashboard" color="primary" class="mt-5 mx-auto">Trang chủ</v-btn>
  </div>
</template>

<script>
export default {
  layout: "auth",
  components: {
  },
  data() {
    return {
      data: ''
    };
  },
  methods: {
  },
  mounted() {
    console.log('okay');
  },
  created() {
    console.log('okay', this.$route);
    console.log('okay', this.data);
  },
  fetch() {
  }
};
</script>

<style lang="scss" scoped>
@import "../../__styles/auth.scss";
</style>
