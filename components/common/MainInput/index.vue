<template lang="">
  <div>
    <label :for="name" class="form__input form__input--label" v-if="label">{{
      label
    }}</label>
    <v-input>
      <slot>
        <textarea
          v-if="type === 'textarea'"
          :id="name"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value.trim('.'))"
          class="rounded-lg"
        />
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
const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color",
  "textarea"
];

export default {
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    invalid: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped src="./MainInput.scss"></style>
