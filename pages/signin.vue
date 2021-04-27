<template>
  <div
    class="signin-container d-flex justify-end flex-column-reverse flex-md-row-reverse"
  >
    <v-card width="100%" class="signin-left px-16 py-16 my-auto" elevation="0">
      <group-validator :validation="$v.form.email">
        <template slot-scope="{ errors }">
          <main-input
            placeholder="Enter email"
            label="Email"
            name="email"
            type="email"
            v-model.trim="$v.form.email.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <group-validator :validation="$v.form.password">
        <template slot-scope="{ errors }">
          <main-input
            placeholder="Enter password"
            label="Password"
            name="password"
            type="password"
            v-model.trim="$v.form.password.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <v-btn block large color="primary" @click="onSubmit" class="mt-2"
        >Submit</v-btn
      >
      <div class="w-100 d-flex justify-center mt-2">
        <nuxt-link to="#" class="txt-secondary--text"
          >Forgot password? Contact Superadmin.</nuxt-link
        >
      </div>
    </v-card>
    <v-sheet
      class="signin-left d-flex justify-center align-center bg-dark"
      color=""
      elevation="0"
      min-height="100vh"
      min-width="50vw"
    >
      <div>
        <img src="@/assets/images/login-logo.svg" alt="login-logo" />
      </div>
    </v-sheet>
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
        this.message = '';
      }
      finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/signin.scss";
</style>
