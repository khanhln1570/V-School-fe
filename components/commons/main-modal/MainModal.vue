<template>
  <v-dialog :value="modal" :width="width" :transition="transition" :persistent="persistent">
    <v-card>
      <v-toolbar color="primary" dark>
        <slot name="modalHeader"></slot>
      </v-toolbar>
      <div class="my-5 px-4">
        <slot name="modalBody"></slot>
      </div>
      <v-card-actions class="justify-end">
        <slot name="modalActions">
          <text-button color="red" @click.native="$emit('closeClick')">Đóng</text-button>
          <text-button @click.native="$emit('nextClick')">Tiếp tục</text-button>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {
    TextButton: () =>
      import("@/components/commons/main-button/text-button/TextButton"),
  },
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
    },
    persistent: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>