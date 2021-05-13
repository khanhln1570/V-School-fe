<template>
  <div class="bg-color">
    <div class="overlay"></div>
    <div class="overlay-book"></div>
    <div class="overlay-moon"></div>
    <div class="overlay-tree"></div>
    <div class="overlay-logo"></div>
    <div>
      <div
        class="signin-container d-flex justify-center align-center flex-column-reverse flex-md-row-reverse"
      >
        <v-card
          height="50%"
          width="27%"
          class="signin-left px-16 py-13 my-auto"
          elevation="11"
          shaped
        >
          <div class="d-flex justify-center align-center text-right">
            <div>
              <div class="display-1 font-weight-normal">V-School</div>
              <small class="mt-1">beta</small>
            </div>
          </div>
          <group-validator class="mt-8" :validation="$v.form.email">
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
          <group-validator class="mt-1" :validation="$v.form.password">
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
          <v-btn class="mt-12" block large color="primary" @click="onSubmit"
            >Submit</v-btn
          >
          <div class="w-100 mt-1 text-right">
            <nuxt-link to="reset-password" class="txt-secondary--text"
              ><small>Quên mật khẩu?</small></nuxt-link
            >
          </div>
        </v-card>
        <!-- <v-sheet class="signin-left d-flex justify-center align-center primary" color="" elevation="0" min-height="100vh" min-width="50vw">
        <div class="d-flex justify-center align-center flex-column">
            <img src="@/assets/images/school.svg" alt="school" width="200px" />
            <h1 class="display-2 white--text font-weight-bold mt-4">S-payment</h1>
        </div>
    </v-sheet> -->
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

.signin-container {
  height: 100vh;
}

.bg-color {
  position: relative;
  background: linear-gradient(
    45deg,
    rgba(209, 232, 255, 1) 0%,
    rgba(0, 72, 142, 1) 100%
  );
  width: 100vw;
}

.overlay {
  position: absolute;
  background-image: url("../assets/images/bg-under.svg");
  background-size: cover;
  height: 60%;
  width: 103%;
  top: 40%;
  left: 0;
}

.overlay-book {
  position: absolute;
  background-image: url("../assets/images/bg-login-book.svg");
  background-size: cover;
  height: 37%;
  width: 18%;
  top: 62%;
  left: 71%;
}

.overlay-moon {
  position: absolute;
  background-image: url("../assets/images/bg-login-moon.svg");
  background-size: cover;
  height: 25%;
  width: 25%;
  top: 1%;
  left: 70%;
}

.overlay-tree {
  position: absolute;
  background-image: url("../assets/images/bg-login-tree.svg");
  background-size: cover;
  height: 34%;
  width: 24%;
  top: 42%;
  left: 10%;
}

.overlay-logo {
  position: absolute;
  background-image: url("../assets/images/bg-login-logo.svg");
  background-size: cover;
  height: 9.2%;
  width: 5.6%;
  top: 8%;
  left: 48%;
}
</style>
