<template>
  <auth-card>
    <div class="px-xl-8">
      <group-validator class="mt-xl-1" :validation="$v.form.schoolId">
        <template slot-scope="{ errors }">
          <label>Chọn trường <span class="red--text">*</span></label>
          <main-select
            item-text="account.name"
            item-value="id"
            v-model.trim="$v.form.schoolId.$model"
            :items="schools"
            id="limit"
            :errors="errors"
          ></main-select>
        </template>
      </group-validator>
      <group-validator
        class="mt-xl-1"
        :validation="$v.form.classCode"
      >
        <template slot-scope="{ errors }">
          <label >Tên lớp<span class="red--text">*</span></label>
          <main-input
            placeholder=""
            name="classCode"
            type="text"
            v-model.trim="$v.form.classCode.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <group-validator
        class="mt-xl-1"
        :validation="$v.form.name"
      >
        <template slot-scope="{ errors }">
          <label >Họ và Tên học sinh<span class="red--text">*</span></label>
          <main-input
            placeholder=""
            name="name"
            type="text"
            v-model.trim="$v.form.name.$model"
            :errors="errors"
          />
        </template>
      </group-validator>
      <div class="mt-4 mt-xl-10">
        <text-button :text="false" block large @click.native="onSubmit">Tra cứu mã BHYT</text-button>
      </div>
      <div class="mt-1 text-right">
        <nuxt-link to="/" class="txt-secondary--text"
          ><small class="reset-password">Thanh toán học phí?</small></nuxt-link
        >
      </div>
    </div>
    
    <main-modal
      :modal="students ? true : false"
      :hideNext="true"
      @closeClick="students = null"
      persistent
      >
      <template #modalHeader>
        <h4 class="mb-0 subtitle">Tra cứu BHYT</h4>
      </template>
      <template #modalBody v-if="students">
        <div v-for="student in students">
          <div class="d-flex justify-space-between">
              <p>Tên học sinh: </p>
              <p class="font-weight-bold text-right">{{student.name}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Tên trường: </p>
              <p class="font-weight-bold text-right">{{student.school.account.name}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Tên Lớp: </p>
              <p class="font-weight-bold text-right">{{student.classcode}}</p>
          </div>
          <div class="d-flex justify-space-between">
              <p>Mã BHYT: </p>
              <p class="font-weight-bold text-right">{{student.BHYT}}</p>
          </div>
          <v-divider></v-divider>
        </div>
      </template>
    </main-modal>
  </auth-card>
</template>

<script>
import { searchBHYT } from "~/validations/payment/payment.validate";
import { GET_PUBLIC_SCHOOL_ACTION, GET_PUBLIC_STUDENT_BHYT_ACTION } from "~/store/payment/payment.constants";
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
    MainModal: () => import("@/components/commons/main-modal/MainModal"),
  },
  data() {
    return {
      form: {
        schoolId: null,
        classCode: null,
        name: null,
      },
      loading: false,
      message: null,
      schools: null,
      students: null,
    };
  },
  validations: {
    form: searchBHYT,
  },
  async created() {
    this.schools = await this.$store.dispatch(GET_PUBLIC_SCHOOL_ACTION);
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
        this.students = await this.$store.dispatch(GET_PUBLIC_STUDENT_BHYT_ACTION, {
          params : {...this.form}
        });
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
