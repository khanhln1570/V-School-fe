<template>
  <div class="mini__statistic">
    <slot name="header" :label="label">
      <v-subheader v-if="label" class="px-0 font-weight-bold">{{ label }}</v-subheader>
    </slot>

    <v-card>
      <v-card-text class="pa-4">
        <v-container class="pa-0">
          <div class="layout row ma-0">
            <div class="sm8 xs8 flex">
              <div class="layout column ma-0 justify-center align-center">
                <slot name="content" />
              </div>
            </div>
            <div class="sm4 xs4 flex text-sm-right py-3" :class="color">
              <div class="headline font-weight-black">{{ statisticCount }}</div>
            </div>
          </div>
        </v-container>
      </v-card-text>
    </v-card>    
  </div>
</template>

<script>
export default {
  props: {
    statisticCount: [String, Number],
    label: String,
    color: String
  }
};
</script>
