<template lang="">
  <div enter-class="aa">
    <label :for="name" class="form__input form__input--label" v-if="label">{{
      label
    }}</label>
    <v-text-field
      :id="name"
      outlined
      dense
      v-model="value"
      hide-details="auto"
      :placeholder="placeholder"
      :type="type"
    ></v-text-field>
  </div>
</template>

<script>
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
    invalid: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./MainInput.scss"></style>
