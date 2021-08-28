<template>
  <auth-card>
    <div>
      <group-validator
        class="mt-md-3 mt-xl-10 px-xl-8"
        :validation="$v.form.username"
      >
        <template slot-scope="{ errors }">
          <label >Tên đăng nhập <span class="red--text">*</span></label>
          <main-input
            placeholder=""
            name="email"
            type="email"
            v-model.trim="$v.form.username.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <div class="px-xl-8 pt-5">
        <text-button :elevation="1" block large :text="false" @click.native="onSubmit">Đặt lại mật khẩu</text-button>
      </div>
      <div class="mt-1 text-right">
        <nuxt-link to="/sign-in" class="txt-secondary--text"
          ><small class="reset-password px-xl-8">Đăng nhập?</small></nuxt-link
        >
      </div>
    </div>
  </auth-card>
</template>

<script>
import { signIn } from "~/validations/auth/auth.validate";
import { LOG_IN_ACTION, GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
export default {
  layout: "auth",
  middleware: "",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
  },
  data() {
    return {
      form: {
        username: null,
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
        // await this.$store.dispatch(GET_PROFILE_ACTION);
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
@import "./__styles/auth.scss";
</style>
