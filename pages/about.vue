<template>
<v-lazy
  v-model="isActive"
  :options="{
    threshold: .5
  }"
  min-height="200"
  transition="fade-transition"
>
  <div>
    <v-container>
      <div class="d-flex justify-space-between align-center mb-15">
        <img
          src="../assets/images/logo-big.svg"
        />
        <text-button :text="false" to='/' color='white' dark="false" height="46px">
          <span class="text-capitalize black--text font-weight-bold">Trang chủ</span>
        </text-button>
      </div>

      <div class="d-flex justify-space-between align-center pb-10 flex-column flex-md-row">
        <div>
          <h2 class="white--text display-3 mb-2">Đóng Học Phí Chỉ Trong 5 Phút!</h2>
          <p class="white--text">Gần 1.000 Trường Học, 20.000 Phụ Huynh đã dùng VSchool để quản lý học phí</p>
          <text-button :text="false" to='/'  color='color-warning' height="46px">
            <span class="text-capitalize font-weight-bold">Thanh toán ngay</span>
          </text-button>
        </div>
        <div>
          <img
            id="img15"
            src="../assets/images/Image 15.svg"
          />
        </div>
      </div>


    </v-container>
    <v-container class="bg-white d-flex justify-center align-center flex-column py-10" fluid="true" >
        <h2 class=" display-2 mb-2 font-weight-bold text-center"><span class="color-warning--text">VSCHOOL</span> ĐỒNG HÀNH CÙNG CON</h2>
        <p class="subtitle-1 font-weight-bold text-center">trên con đường học tập</p>
        <v-container class="d-flex justify-space-around flex-column flex-md-row align-center">
          <v-card max-width="286" class="d-flex justify-center align-center flex-column pa-10 rounded-xl" elevation="5">
            <img
              src="../assets/images/Image 16.svg"
              class="mb-5"
            />
            <p class=" font-weight-bold text-center" >Chủ động theo dõi tình hình học tập</p>
          </v-card>

          <v-card max-width="286" class="d-flex justify-center align-center flex-column pa-10 rounded-xl" elevation="5">
            <img
              src="../assets/images/Image 17.svg"
              class="mb-5"
            />
            <p class=" font-weight-bold text-center" >Tiện lợi đóng và quản lý chi phí tại trường</p>
          </v-card>

          <v-card max-width="286" class="d-flex justify-center align-center flex-column pa-10 rounded-xl" elevation="5">
            <img
              src="../assets/images/Image 18.svg"
              class="mb-5"
            />
            <p class=" font-weight-bold text-center" >Gần 1.000 trường, 20.000 phụ huynh tin dùng</p>
          </v-card>
        </v-container>
    </v-container>

    <v-container class="bg-purple d-flex justify-center align-center flex-column py-10" fluid="true">
      <v-container class="d-flex justify-space-around flex-column flex-md-row mb-10 ">
        <img
          src="../assets/images/Image 19.svg"
        />
        <v-sheet max-width="550px" elevation="0" color="#F5F5FF">
          <h3 class="display-1 mb-2 font-weight-bold">TỔNG QUAN</h3>
          <p class="font-weight-medium">VSchool là nền tảng công nghệ về giáo dục, giúp kết nối phụ huynh, học sinh với nhà trường thông qua các tiện ích giáo dục. Theo chủ trương của đề án Thẻ học đường thuộc Sở Giáo dục & Đào tạo TP. Đà Nẵng về việc thanh toán không tiền mặt trong nhà trường, các trường học trên địa bàn thành phố đã sử dụng phần mềm VSchool để quản lý nguồn thu trực tuyến.</p>
        </v-sheet>
      </v-container>

      <v-container class="d-flex justify-space-around flex-column flex-md-row">
        <v-sheet max-width="550px" elevation="0" color="#F5F5FF">
          <h3 class="display-1 mb-2 font-weight-bold">KHÔNG NGỪNG BỨT PHÁ</h3>
          <p class="font-weight-medium">Trong thời gian sắp tới, VSchool sẽ tiếp tục cải tiến & ra mắt nhiều tính năng mới giúp Quý phụ huynh có thể chủ động theo dõi tình hình, đồng hành cùng con em trên hành trình học vấn. Bên cạnh đó, VSchool sẽ luôn là đối tác tin cậy của nhà trường và giáo viên, góp phần xây dựng môi trường học đường văn minh hiện đại.</p>
        </v-sheet>
        <img
          src="../assets/images/Image 20.svg"
        />
      </v-container>
    </v-container>

    <v-container class="white--text py-10">
      <img
          src="../assets/images/logo-big.svg"
        />
      <p class="font-weight-bold subtitle-1">CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC VSCHOOL</p>

      <div class="font-weight-bold my-10">
        <p><span class="font-weight-light">Mã số thuế:</span> 0316517482</p>
        <p><span class="font-weight-light">Địa chỉ:</span> 12 Nam Kỳ Khởi Nghĩa, Quận Hải Châu, Đà Nẵng</p>
        <p><span class="font-weight-light">Liên Hệ:</span> hotro@vschool.vn</p>
      </div>

      <p class="font-weight-bold">© 2022 VSCHOOL. All rights reserved.</p>
    </v-container>
  </div>
</v-lazy>
</template>

<script>
export default {
  layout: "about",
   components: {
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
    };
  },
  // beforeCreate() {
  //   // this.$router.push('/signin')
  // },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/about.scss";
</style>
