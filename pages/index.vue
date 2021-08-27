<template>
  <div class="px-xl-8">
    <group-validator
      class="mt-md-3 mt-xl-10 "
      :validation="$v.form.BHYT"
    >
      <template slot-scope="{ errors }">
        <label >Mã Bảo Hiểm Y Tế của con bạn<span class="red--text">*</span></label>
        <main-input
          placeholder=""
          name="BHYT"
          type="text"
          v-model.trim="$v.form.BHYT.$model"
          :errors="errors"
        />
      </template>
    </group-validator>
    <div class="mt-4 mt-xl-10">
      <text-button :text="false" block large @click.native="onSubmit">Tra cứu hoá đơn</text-button>
    </div>
    <div class="mt-1 text-right">
      <nuxt-link to="reset-password" class="txt-secondary--text"
        ><small class="reset-password">Quên mã BHYT?</small></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { bhyt } from "~/validations/invoice/invoice.validate";
import { LOG_IN_ACTION, GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
export default {
  layout: "auth",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
  },
  data() {
    return {
      form: {
        BHYT: null,
      },
      loading: false,
      message: null,
    };
  },
  validations: {
    form: bhyt,
  },
  // beforeCreate() {
  //   // this.$router.push('/signin')
  // },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // do your submit logic here
      this.loading = true;
      // try {
      //   await this.$store.dispatch(LOG_IN_ACTION, {
      //     ...this.form,
      //   });
      //   // await this.$store.dispatch(GET_PROFILE_ACTION);
      // } catch (error) {
      //   this.message = "";
      // } finally {
      //   this.loading = false;
      // }
      this.loading = false;
      this.$router.push('/payment');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/auth.scss";
</style>
