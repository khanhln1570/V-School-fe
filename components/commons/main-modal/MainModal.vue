<template>
  <v-dialog v-model="modal" :width="width" :transition="transition">
    <v-card>
      <v-toolbar color="primary" dark>
        <slot name="modalHeader"></slot>
      </v-toolbar>
      <slot name="modalBody"></slot>

      <v-card-actions class="justify-end">
        <slot name="modalActions"> </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 500,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: null,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>