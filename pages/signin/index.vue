<template>
  <div class="signin-container d-flex justify-end">
    <v-card
      width="100%"
      class="signin-left px-5 py-16"
      elevation="0"
    >
      <v-card-title>Sign in</v-card-title>
      <p>{{$v.form.email}}</p>
      <CommonMainInput
        label="abc"
        name="email"
        type="email"
        v-model.trim="$v.form.email.$model"
        :validation="$v.form.email"
      />
      <CommonMainInput
        label="password"
        name="password"
        type="password"
        v-model.trim="$v.form.password.$model"
        :validation="$v.form.password"
      />
      <p>{{$v.form.password}}</p>
      <v-btn>Sign in</v-btn>
    </v-card>
    <v-sheet
      class="signin-left"
      color="light-blue lighten-4"
      elevation="3"
      min-height="50vh"
      min-width="55vw"
    ></v-sheet>
  </div>
</template>

<script>
import {signIn} from '~/validations/auth/auth.validate';
export default {
  layout: "auth",
  middleware: "",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  validations: {
    form: signIn
  }
};
</script>

<style lang="scss" scoped></style>
