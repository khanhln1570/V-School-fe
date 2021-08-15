<template>
  <div>
    <div class="input-header d-flex justify-space-between mb-1">
      <label :for="name" v-if="label">
        {{ label }} <span v-if="subLabel" class="font-italic txt-gray--text">{{subLabel}}</span>
      </label>

      <nuxt-link v-if="labelLink" :to="labelLink.link">
        {{ labelLink.name }}
      </nuxt-link>
    </div>

    <v-textarea
      v-if="type === 'textarea'"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="emitInputEvent"
      solo
      :clearable="clearable"
      :error-messages="errors"
      :disabled="disabled"
      outlined
      flat
      dense
    />
    <v-text-field
      v-else-if="type === 'password'"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="emitInputEvent"
      required
      class="rounded-lg"
      solo
      outlined
      :clearable="clearable"
      :error-messages="errors"
      :disabled="disabled"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      flat
      dense
    />
    <v-text-field
      v-else
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="emitInputEvent"
      required
      class="rounded-lg shrink"
      solo
      outlined
      :clearable="clearable"
      :error-messages="errors"
      :disabled="disabled"
      flat
      dense
    />
  </div>
</template>

<script>
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
    subLabel: {
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
    },
    type: {
      type: String,
      default: "text",
    },
    labelLink: {
      type: Object,
      default: null,
    },
    errors: {
      type: [Array, String, Object],
      default: null,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPassword: false,
    }
  },
  methods: {
    emitInputEvent(e) {
      return this.$emit("input", e);
    },
  },
};
</script>

<style lang="scss" scoped src="./MainInput.scss"></style>
