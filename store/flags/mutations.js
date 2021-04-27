import { SET_LIST_FLAGS_MUTATION, SET_FLAG_DETAILS_MUTATION } from "./flags.constant";

export default {
  [SET_LIST_FLAGS_MUTATION]( state, payload ) {
    state.flags = payload.flags;
    state.countFlags = payload.count;
  },
  [SET_FLAG_DETAILS_MUTATION](state, payload) {
    state.flagDetails = payload;
  }
};
