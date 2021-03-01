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
          <p>{{ form.email }}</p>
          <CommonMainInput label="abc" name="email" type="email" />
          <CommonMainInput label="password" name="password" type="password" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import testValidation from "@/validations/test/test.validate";

console.log(testValidation);
export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  validations: {
    form: testValidation,
  },
};
</script>
