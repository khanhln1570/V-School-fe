<template>
  <!-- <div></div> -->
  <div class="bg-color">
    <img src="../assets/images/login/bg-login-mountain.svg" class="overlay" />
    <img src="../assets/images/login/bg-login-book.svg" class="overlay-book" />
    <img src="../assets/images/login/bg-login-moon.svg" class="overlay-moon" />
    <img src="../assets/images/login/bg-login-tree.svg" class="overlay-tree" />
    <img src="../assets/images/login/bg-login-logo.svg" class="overlay-logo" />
    <div class="rules pa-2">
      <span class="pr-5 white--text" style="border-right: 1px solid">Chính sách</span>
      <span class="pl-4 white--text">Điều khoản</span>
    </div>

    <div>
      <div
        class="signin-container d-flex justify-center align-center flex-column-reverse flex-md-row-reverse"
      >
        <div></div>
        <div class="col-md-4 col-xl-4 px-xl-10">
          <div class="">
            <v-card
              class="card rounded-lg signin-left py-xl-10 px-md-12 py-md-6 my-auto mx-lg-auto"
              elevation="11"
              :class="{
                'pa-10': $vuetify.breakpoint.mobile,
              }"
            >
              <div class="d-flex justify-center align-center text-right">
                <div class="">
                  <div class="display-2 font-weight-normal">V-School</div>
                  <div>
                    <small>beta</small>
                  </div>
                </div>
              </div>
              <group-validator
                class="mt-xl-10 mt-md-3 px-xl-8"
                :validation="$v.form.email"
              >
                <template slot-scope="{ errors }">
                  <label>Tên đăng nhập <span class="red--text">*</span></label>
                  <main-input
                    placeholder=""
                    name="email"
                    type="email"
                    v-model.trim="$v.form.email.$model"
                    :errors="errors"
                  />
                </template>
              </group-validator>
              <group-validator
                class="mt-xl-1 px-xl-8"
                :validation="$v.form.password"
              >
                <template slot-scope="{ errors }">
                  <label>Mật khẩu <span class="red--text">*</span></label>

                  <main-input
                    placeholder=""
                    name="password"
                    type="password"
                    v-model.trim="$v.form.password.$model"
                    :errors="errors"
                  />
                </template>
              </group-validator>
              <div class="px-xl-8">
                <v-btn
                  class="mt-xl-12 mt-md-4"
                  block
                  large
                  color="primary"
                  @click="onSubmit"
                  >Đăng nhập</v-btn
                >
              </div>
              <div class="mt-1 text-right">
                <nuxt-link to="reset-password" class="txt-secondary--text"
                  ><small class="reset-password px-xl-8"
                    >Quên mật khẩu?</small
                  ></nuxt-link
                >
              </div>
            </v-card>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { signIn } from "~/validations/auth/auth.validate";
import { LOG_IN_ACTION } from "~/store/auth/auth.constants";
export default {
  layout: "auth",
  middleware: "",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      loading: false,
      message: null,
    };
  },
  validations: {
    form: signIn,
  },

  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
      this.loading = true;
      try {
        await this.$store.dispatch(LOG_IN_ACTION, {
          ...this.form,
        });
      } catch (error) {
        this.message = "";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/signin.scss";
</style>
