<template>
  <div>
    <h2>{{heading}}</h2>
    <!-- <h3>{{selected}}</h3> -->
    <v-container fluid class="px-0">
      <slot >
        <v-checkbox
          v-for="(item, i) in listCheckbox"
          :key="i"
          v-model="selected"
          :label="item.label"
          :value="item.value"
          hide-details="auto"
        ></v-checkbox>
      </slot>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: []
    }
  },
  props: {
    heading: {
      type: String,
      default: ""
    },
    listCheckbox: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>