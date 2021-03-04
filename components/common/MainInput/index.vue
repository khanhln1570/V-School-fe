<template lang="">
<div>
  <div class="input-header d-flex justify-space-between">
    <label :for="name" class="" v-if="label">{{
      label
    }}</label>
    <nuxt-link class="" v-if="labelLink" :to="labelLink.link">{{
      labelLink.name
    }}</nuxt-link>
  </div>

  <v-input :error-messages="errors.length ? errors[0] : ''">
    <slot>
      <textarea v-if="type === 'textarea'" :id="name" :type="type" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value.trim('.'))" class="rounded-lg" />
      <input
          v-else
          :id="name"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value.trim('.'))"
          class="rounded-lg"
        />
      </slot>
    </v-input>
  </div>
</template>

<script>
import template from "lodash/template";
import templateSettings from "lodash/templateSettings";

// curly brace syntax
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color",
  "textarea",
];

export default {
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    validation: {
      type: Object,
      default: null,
      required: true,
    },
    labelLink: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      templatesMap: {
        email: this.$t("validation.email"),
        password: this.$t("validation.password"),
        alpha: this.$t("validation.alpha"),
        required: this.$t("validation.required"),
        phoneNumber: this.$t("validation.phoneNumber"),
        validNric: this.$t("validation.validNric"),
        minAge: this.$t("validation.minAge"),
        number: this.$t("validation.number"),
        amount: this.$t("validation.amount"),
        minAmount: this.$t("validation.minAmount"),
        maxLengthAmount: this.$t("validation.maxLengthAmount"),
        maxLengthReceipt: this.$t("validation.maxLengthReceipt"),
        isUnique: this.$t("validation.isUnique"),
      },
    };
  },
  computed: {
    errors() {
      if (!this.invalid) {
        return [];
      }
      return Object.keys(this.validation.$params).reduce(
        (errors, validator) => {
          if (!this.validation[validator]) {
            const compiled = template(this.templatesMap[validator]);
            errors.push(compiled(this.validation.$params[validator]));
          }

          return errors;
        },
        []
      );
    },
    invalid() {
      if (!this.validation) return;

      return this.validation.$dirty && this.validation.$invalid;
    },
  },
};
</script>

<style lang="scss" scoped src="./MainInput.scss"></style>
