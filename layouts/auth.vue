<template>
  <v-app class="oo">
    <v-main>
      <v-container fluid class="pa-0">
        <div class="bg-color">
          <div>
            <img
              src="../assets/images/login/bg-login-logo.svg"
              class="overlay-logo"
            />
            <img
              src="../assets/images/Group 2976.svg"
              class="overlay"
            />
            <img
              src="../assets/images/login/bg-login-book.svg"
              class="overlay-book"
            />
            <img
              src="../assets/images/login/bg-login-moon.svg"
              class="overlay-moon"
              :class="{
                'd-none ': $vuetify.breakpoint.mobile,
              }"
            />
          </div>
          <div>
            <div
              class="signin-container d-flex justify-center flex-column-reverse flex-md-row-reverse"
            >
              <div
                class="px-xl-10 pt-md-15 h-100 d-flex justify-space-around align-center flex-column"
                style="min-height: 100vh;"
                >
                <v-lazy min-width='100%'>
                  <nuxt />
                </v-lazy>
              </div>
            </div>
          </div>
          <div class="rules pa-2">
            <nuxt-link to="#" class="pr-5 white--text" style="border-right: 1px solid"
              >Chính sách</nuxt-link
            >
            <nuxt-link to="#" class="pl-4 pr-5 white--text" style="border-right: 1px solid"
              >Điều khoản</nuxt-link
            >
            <nuxt-link to="/about" class="pl-4 white--text">Về chúng tôi</nuxt-link>
          </div>
        </div>
      </v-container>
    </v-main>
    <text-button :elevation="5" :text="false" :to="btn.to" class="fixed__btn pa-5 " :color="btn.color" :dark="btn.dark" v-if="btn.show">
      <span class="text-capitalize font-weight-bold">{{btn.title}}</span>
    </text-button>
    <text-button :elevation="5" :text="false" to='/about' class="fixed__btn2 pa-5 " color='red' dark="true">
      <span class="text-capitalize font-weight-bold">Về chúng tôi</span>
    </text-button>
  </v-app>
</template>

<script>
import { publicRoutes } from '../shared/publicRoutes';

export default {
  components: {
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
  data() {
    return {
      btn : {
        title: null,
        to: null,
        color: null,
        dark: false,
        show: true,
        srcImg: null,
      }
    }
  },
  watch: {
    "$route.name": {
      handler: function (name) {
        // console.log("name", name);
        if (name === 'payment') {
          this.btn.show = false
        }
        else if (publicRoutes.includes(name)) {
          this.btn.show = true
          this.btn.title = 'Đăng nhập'
          this.btn.color = 'black'
          this.btn.dark = true
          this.btn.to = '/signin'
          this.btn.srcImg= '../assets/images/Logo-white.svg'
        } else {
          this.btn.show = true
          this.btn.title = 'Thanh toán học phí'
          this.btn.color = 'color-warning'
          this.btn.dark = false
          this.btn.to = '/'
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../pages/__styles/auth.scss";
</style>
