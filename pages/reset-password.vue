<template>
<div class="signin-container d-flex justify-end flex-column-reverse flex-md-row-reverse">
  <v-card width="100%" class="signin-left px-16 py-16 my-auto" elevation="0">
    <v-card-title class="pa-0 mb-5">
      <h2>Forgotten Password ?</h2>
      <h3>Enter your email to reset your password</h3>
    </v-card-title>
    <!-- <CommonMainInput label="Email" name="email" type="email" v-model.trim="$v.form.email.$model" :validation="$v.form.email" /> -->
    <group-validator :validation="$v.form.email">
      <template  slot-scope="{errors}">
        <main-input label="Email" name="email" type="email" v-model.trim="$v.form.email.$model" :errors="errors" />
      </template>
    </group-validator>
    <v-card-actions class="pa-0 mb-5">
      <v-btn @click="onSubmit" color="primary" :ripple="false" width="50%">Submit</v-btn>
      <v-btn @click="onCancel" color="primary" outlined :ripple="false" width="50%">Cancel</v-btn>
    </v-card-actions>
  </v-card>
  <v-sheet class="signin-left d-flex justify-center align-center" color="light-blue lighten-4" elevation="0" min-height="100vh" min-width="55vw">
    <div>
      <h1 class="text-center">Madison technology</h1>
      <h3 class="text-center">Since 2019</h3>
    </div>
  </v-sheet>
</div>
</template>

<script>
import {
  forgotPassword
} from "~/validations/auth/auth.validate";
import {
  SIGN_IN_ACTION
} from '~/store/auth/auth.constants';
export default {
  layout: "auth",
  middleware: "",
  components: {
    MainInput: () => import('@/components/commons/main-input/MainInput'),
    GroupValidator: () => import('@/components/commons/group-validator/GroupValidator'),
  },
  data() {
    return {
      form: {
        email: null,
      },
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
      this.loading = true;
      // await this.$store.dispatch(SIGN_IN_ACTION, {
      //   ...this.form,
      // });
      this.loading = false;
    },
    onCancel() {
      this.$router.push('back');
    }
  },
  validations: {
    form: forgotPassword,
  },
};
</script>

<style lang="scss" scoped>
</style>
