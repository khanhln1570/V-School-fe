<template>
  <div class="">
    <label :for="id" class="mb-1" v-if="label">{{label}}</label>
    <v-select
      v-if="items"
      :value="value"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :placeholder="placeholder"
      :hide-details="errors ? false : true"
      outlined
      :id="id"
      class="main__select rounded-lg"
      :style="{
        maxWidth: `${maxWidth}px`
      }"
      :error-messages="errors"
      :clearable="clearable"
      :return-object="returnObject"
      @click:clear="$emit('clear')"
      @change="$emit('input', $event)"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: [Number, String],
      default: null
    },
    items: {
      type: Array,
      default: null,
    },
    leftLabel: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    itemText: {
      type: String,
      default: "",
    },
    itemValue: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String, Object],
      default: null,
    }, 
    placeholder: {
      type: String,
      default: "",
    },
    errors: {
      type: [Array, String, Object],
      default: null,
    },
    clearable: {
      type: Boolean,
      default: null,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './MainSelect.scss';
</style>