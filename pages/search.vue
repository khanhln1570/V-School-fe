<template>
  <auth-card>
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
        <nuxt-link to="/whatMybhyt" class="txt-secondary--text"
          ><small class="reset-password">Quên mã BHYT?</small></nuxt-link
        >
      </div>
    </div>
  </auth-card>
</template>

<script>
import { bhyt } from "~/validations/invoice/invoice.validate";
import { GET_CUSTOMER_DETAILS_ACTION } from "~/store/payment/payment.constants";
export default {
  layout: "auth",
  components: {
    MainInput: () => import("@/components/commons/main-input/MainInput"),
    GroupValidator: () =>
      import("@/components/commons/group-validator/GroupValidator"),
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
    MainSelect: () => import("@/components/commons/main-select/MainSelect"),
    AuthCard: () =>
      import("@/components/auth-card/AuthCard.vue"),
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
      try {
        await this.$store.dispatch(GET_CUSTOMER_DETAILS_ACTION, {
          ...this.form,
        });
        this.$router.push('/payment');
      } catch (error) {
        this.message = "";
      } finally {
        this.loading = false;
      }
      // this.loading = false;
      // this.$router.push('/payment');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./__styles/auth.scss";
</style>
