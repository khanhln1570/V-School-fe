<template>
  <v-row>
    <v-col>
      <page-heading pageTitle="Add new admin" backTo="/user-management/admin"> </page-heading>
      <v-container>
        <form>
          <v-row>
            <v-col lg="4">
              <group-validator :validation="$v.form.name">
                <template  slot-scope="{errors}">
                  <main-input 
                    label="Name" 
                    placeholder="Enter a name"
                    v-model.trim="$v.form.name.$model"
                    :errors="errors"
                  ></main-input>
                </template>
              </group-validator>
            </v-col>
            <v-col lg="4">
              <group-validator :validation="$v.form.mobile">
                <template  slot-scope="{errors}">
                  <main-input
                    label="Mobile number"
                    placeholder="Enter mobile number"
                    type="number"
                    v-model.trim="$v.form.mobile.$model"
                    :errors="errors"
                  ></main-input>
                </template>
              </group-validator>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="4">
              <group-validator :validation="$v.form.email">
                <template  slot-scope="{errors}">
                  <main-input
                    label="Login email"
                    placeholder="Enter an email"
                    v-model.trim="$v.form.email.$model"
                    :errors="errors"
                  ></main-input>
                </template>
              </group-validator>
            </v-col>
            <v-col lg="4">
              <group-validator :validation="$v.form.password">
                <template  slot-scope="{errors}">
                  <main-input
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    v-model.trim="$v.form.password.$model"
                    :errors="errors"
                  ></main-input>
                </template>
              </group-validator>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <text-button>Create account</text-button>
            </v-col>
          </v-row>
        </form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { newAdmin } from "@/validations/user-management/user-management.validate";

export default {
  data() {
    return {
      form: {
        name: null,
        mobile: null,
        email: null,
        password: null,
      }
    }
  },
  components: {
    PageHeading: () =>
      import("@/components/themes/widgets/page-heading/PageHeading"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () => import('@/components/commons/group-validator/GroupValidator')
  },
  validations: {
    form: newAdmin,
  },
  methods: {
    onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
    },
  }
};
</script>

<style>
</style>