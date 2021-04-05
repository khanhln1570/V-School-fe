<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="2"> </v-col>
      <v-col cols="12" md="8">
        <v-card class="pa-2 rounded-lg" outlined tile>
          <v-card-title>
            <p class="font-weight-bold title">My Account</p>
          </v-card-title>
          <v-card-text>
            <CommonMainInput
              label="Name"
              name="name"
              type="name"
              v-model.trim="$v.form.name.$model"
              :validation="$v.form.name"
            />
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
            />
            <CommonMainInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
              v-model.trim="$v.form.confirmPassword.$model"
              :validation="$v.form.confirmPassword"
            />
          </v-card-text>
          <v-card-title>
            <p class="font-weight-bold title">Account activities</p>
          </v-card-title>
          <v-card-text>
            <label for="enable2FA">Enable2FA</label>
            <v-switch
              v-model="enable2FA"
              inset
              id="enable2FA"
              class="mt-0"
              :ripple="false"
              @change="handle2FA"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2"> </v-col>
    </v-row>
  </div>
</template>

<script>
import { editProfile } from "~/validations/profile/profile.validation";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      enable2FA: false,
      form: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/getCurrentUser",
    }),
  },
  validations: {
    form: editProfile,
  },
  methods: {
    handle2FA() {
      console.log("object");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>