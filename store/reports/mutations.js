import { SET_LIST_FARMERS_MUTATION, SET_FARMER_DETAIL_MUTATION } from "./reports.constant";

export default {
  [SET_LIST_FARMERS_MUTATION]( state, payload ) {
    state.farmers = payload.farmers;
    state.countFarmers = payload.count;
  },

  [SET_FARMER_DETAIL_MUTATION](state, payload) {
    state.farmerDetail = payload;
  }
};
