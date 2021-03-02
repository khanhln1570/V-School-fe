<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.jsss
        </v-card-title>
        <v-card-text>
          <p>{{ $v.form.email }}</p>
          <CommonMainInput
            label="abc"
            name="email"
            type="email"
            v-model="$v.form.email.$model"
          />
          <CommonMainInput
            label="password"
            name="password"
            type="password"
            v-model="$v.form.password.$model"
          />
          <CommonMainInput
            label="test"
            name="test"
            type="textarea"
            v-model="$v.form.note.$model"
          />
          <p>{{ $v.form.password }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import testValidation from "@/validations/test/test.validate";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        note: null,
      },
    };
  },
  validations: {
    form: testValidation,
  },
};
</script>
