<template>
  <v-container class="max-width px-0">
    <v-row no-gutters align="center" class="d-flex justify-space-between flex-sm-row flex-column">
      <v-col md="2" cols="5" >
        <main-select :items="footerSelectItem" label="Limit" id="limit" v-if="footerSelectItem.length"></main-select>
        <!-- <v-row no-gutters align="center">
          <v-col md="3">
            <v-row no-gutters align="center">
              <v-col cols="8">
                <v-subheader class="text-body-2 px-0">Row per page</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field hide-details solo type="number" min="-1" :value="perpage" @input="perpage = toInt($event)" />
              </v-col>
            </v-row>
          </v-col>
          <v-col md="1"></v-col>
          <v-col md="1">
            <v-subheader class="text-body-2 px-0">Page</v-subheader>
          </v-col>
          <v-col md="1">
            <v-text-field hide-details solo type="number" min="-1" :value="page" @input="page = toInt($event)" />
          </v-col>
          <v-col md="2">
            / {{ pageCount }}
          </v-col>
        </v-row> -->
      </v-col>
      <v-col md="8" class="d-flex justify-center justify-sm-end" v-if="showPagination">
        <v-pagination
          :disabled="disabled"
          class="my-4"
          :value="page"
          :length="pageCount"
          @input="changePagination"
          total-visible="7"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MainSelect: () => import('@/components/commons/main-select/MainSelect'),
  },
  props: {
    showPagination: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    page: {
      type: Number,
      default: 10
    },
    pageCount: {
      type: Number,
      default: 0
    },
    footerSelectItem: {
      type: Array,
      default: () => [10, 25, 50, 100]
    }
  },
  methods: {
    toInt(value) {
      if(!value) return 0;

      return parseInt(value, 10);
    },
    changePagination(page) {
      return this.$parent.setPage(page)
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep {
    .v-pagination{
      li{
        .v-pagination__navigation {
          
          box-shadow: none;
          border: 1px solid #EAECEF;
          padding: 10px;
          i{
            // font-style: normal;
            // font-size: 20px;
          }
        }
        .v-pagination__more{
          border-radius: 0;
          box-shadow: none;
          border: 1px solid #EAECEF;
        }
        .v-pagination__item{
          border-radius: 0;
          box-shadow: none;
          border: 1px solid #EAECEF;
        }
        &:first-child{
          .v-pagination__navigation{
            border-radius: 8px 0 0 8px;
          }
        }
        &:last-child{
          .v-pagination__navigation{
            border-radius: 0 8px 8px 0;
          }
        }
      }
    }
  }
  
</style>