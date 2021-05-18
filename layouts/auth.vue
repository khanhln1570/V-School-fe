<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <div class="bg-color">
          <div>
            <img
              src="../assets/images/login/bg-login-mountain.svg"
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
            <img
              src="../assets/images/login/bg-login-tree.svg"
              class="overlay-tree"
            />
          </div>

          

          <div>
            <div
              class="signin-container d-flex justify-center align-center flex-column-reverse flex-md-row-reverse"
            >
              <div></div>
              <div class="col-md-4 col-xl-4 px-xl-10 pt-md-15 h-100">
                <div
                  class="d-flex justify-space-around align-center flex-column h-100"
                  style="padding-bottom: 15rem"
                >
                  <img
                    src="../assets/images/login/bg-login-logo.svg"
                    class="overlay-logo mb-xl-5 mt-5 mb-md-10"
                  />
                  <v-card
                    class="card rounded-lg signin-left py-xl-10 px-md-8 py-md-8"
                    elevation="11"
                    :class="{
                      'pa-8 ': $vuetify.breakpoint.mobile,
                    }"
                    width="500px"
                  >
                    <div class="d-flex justify-center align-center text-right">
                      <div class="">
                        <div class="display-2 font-weight-normal">V-School</div>
                        <div>
                          <small>beta</small>
                        </div>
                      </div>
                    </div>
                    <nuxt />
                  </v-card>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div class="rules pa-2">
            <span class="pr-5 white--text" style="border-right: 1px solid"
              >Chính sách</span
            >
            <span class="pl-4 white--text">Điều khoản</span>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../pages/__styles/signin.scss";
</style>
