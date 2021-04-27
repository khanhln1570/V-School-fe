<template>
  <div :class="['group__validator', {'group__validator--invalid': errors.length}]">
    <slot :errors="errors" />
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
export default {
    mixins: [validationMixin],
  name: "GroupValidator",
  data: function() {
    return {
      // templatesMap: {
      //   email: this.$t("validation.email"),
      //   alpha: this.$t("validation.alpha"),
      //   required: this.$t("validation.required"),
      //   phoneNumber: this.$t("validation.phoneNumber"),
      //   validNric: this.$t("validation.validNric"),
      //   minAge: this.$t("validation.minAge"),
      //   number: this.$t("validation.number"),
      //   amount: this.$t("validation.amount"),
      //   minAmount: this.$t("validation.minAmount"),
      //   maxLengthAmount: this.$t("validation.maxLengthAmount"),
      //   maxLengthReceipt: this.$t("validation.maxLengthReceipt"),
      //   isUnique: this.$t("validation.isUnique"),
      //   deliveryNoteNo: this.$t("validation.deliveryNoteNo"),
      // },
    };
  },
  props: {
    validation: {
      required: true,
      type: Object,
    },
    customMessages: {
      type: Object
    }
  },
  computed: {
    errors() {
      const errors = [];
      if (!this.invalid) {
        return errors;
      }
      
      return Object.keys(this.validation.$params).reduce(
        (errors, validator) => {
          if (!this.validation[validator]) {
            const compiled = this.$t(`validation.${validator}`);
            
            errors.push(compiled);
          }

          return errors;
        },
        []
      );
    },
    invalid() {
      if(!this.validation) return;
      
      return this.validation.$dirty && this.validation.$invalid;
    },
  },
};
</script>

<style lang="scss" scoped>
  // @import "./GroupValidator.scss";
</style>
