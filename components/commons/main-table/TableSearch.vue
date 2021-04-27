<template>
  <v-lazy>
    <v-row align="center" class="">
      <v-col md="8">
        <v-text-field :value="search" @keyup.enter="enterSearch" @input="$emit('update:search', $event)" :label="searchLabel" solo clearable outlined hide-details />
      </v-col>

      <!-- <v-col md="2">
        <v-btn large block @click="enterSearch" :disabled="disabled">
          Search
        </v-btn>
      </v-col> -->
    </v-row>
  </v-lazy>
</template>

<script>

export default {
  props: {
    search: {
      type: String,
      default: null
    },
    searchLabel: {
      type: String,
      default: "Enter your search keyword..."
    },
    disabled: {
      type: Boolean,
      default: false
    },
    searchLabel: {
      type: String,
      default: "Enter your searching..."
    },
  },
  methods: {
    enterSearch() {
      return this.$parent.enterSearch();
    }
  }
}
</script>