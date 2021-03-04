<template>
  <div class="signin-container d-flex justify-end flex-column-reverse flex-md-row ">
    <v-card width="100%" class="signin-left px-5 py-16" elevation="0">
      <v-card-title class="pa-0 mb-5"><h2>Sign In</h2></v-card-title>
      <CommonMainInput
        label="Email"
        name="email"
        type="email"
        v-model.trim="$v.form.email.$model"
        :validation="$v.form.email"
      />
      <CommonMainInput
        label="Password"
        name="password"
        type="password"
        v-model.trim="$v.form.password.$model"
        :validation="$v.form.password"
        :labelLink="{link:'reset-password', name: 'Forgot Password ?'}"
      />
      <v-btn color="primary" @click="onSubmit">Sign in</v-btn>
    </v-card>
    <v-sheet
      class="signin-left d-flex justify-center align-center"
      color="light-blue lighten-4"
      elevation="3"
      min-height="100vh"
      min-width="55vw"
    >
      <div>
        <h1 class="text-center">Madison technology</h1>
        <h3 class="text-center">Since 2019</h3>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { signIn } from "~/validations/auth/auth.validate";
import {SIGN_IN_ACTION} from '~/store/auth/auth.constants';
export default {
  layout: "auth",
  middleware: "",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      loading: false,
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
      await this.$store.dispatch(SIGN_IN_ACTION, {
        ...this.form,
      });
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" src="./SignIn.scss"></style>
