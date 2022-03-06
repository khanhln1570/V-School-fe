<template>
  <auth-card>
    <div class="px-xl-8">
      <group-validator
        class="mt-md-3 mt-xl-10 "
        :validation="$v.form.username"
      >
        <template slot-scope="{ errors }">
          <label >Tên đăng nhập <span class="red--text">*</span></label>
          <main-input
            placeholder=""
            name="username"
            type="text"
            v-model.trim="$v.form.username.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <group-validator class="mt-xl-1" :validation="$v.form.password">
        <template slot-scope="{ errors }">
          <label>Mật khẩu <span class="red--text">*</span></label>
          <main-input
            placeholder=""
            name="password"
            type="password"
            v-model.trim="$v.form.password.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <group-validator class="mt-xl-1" :validation="$v.form.role">
        <template slot-scope="{ errors }">
          <label>Bạn là <span class="red--text">*</span></label>
          <main-select
            item-text="label"
            item-value="id"
            maxWidth="100"
            v-model.trim="$v.form.role.$model"
            :items="roleSelectItems"
            id="limit"
            :errors="errors"
          ></main-select>
        </template>
      </group-validator>
      <div class="mt-4 mt-xl-10">
        <text-button :text="false" block large @click.native="onSubmit">Đăng nhập</text-button>
      </div>
      <div class="mt-1 text-right">
        <nuxt-link to="reset-password" class="txt-secondary--text"
          ><small class="reset-password ">Quên mật khẩu?</small></nuxt-link
        >
      </div>
    </div>
  </auth-card>
</template>

<script>
import { signIn } from "~/validations/auth/auth.validate";
import { LOG_IN_ACTION, GET_PROFILE_ACTION } from "~/store/auth/auth.constants";
export default {
  layout: "auth",
  middleware: "",
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
        username: null,
        password: null,
        role: null,
      },
      loading: false,
      message: null,
      roleSelectItems : [
        {id: null, label: 'Chọn một chức danh'},
        {id: 'PARENT', label: 'Phụ huynh'},
        {id: 'SCHOOL', label: 'Trường học'},
        {id: 'SUPERADMIN', label: 'Quản lý'},
      ]
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
        // await this.$store.dispatch(GET_PROFILE_ACTION);
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
@import "./__styles/auth.scss";
</style>
