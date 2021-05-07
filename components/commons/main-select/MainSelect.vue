<template>
  <div class="d-flex align-center">
    <label :for="id" class="mr-3" v-if="label">{{label}}</label>
    <v-select
      v-if="items"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :placeholder="placeholder"
      hide-details
      solo
      dense
      outlined
      :id="id"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
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
      type: Object,
      default: null,
    }, 
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>