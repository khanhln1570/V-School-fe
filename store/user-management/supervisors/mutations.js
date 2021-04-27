import { SET_LIST_SUPERVISORS_MUTATION, SET_SUPERVISOR_DETAIL_MUTATION } from "./supervisors.constant";

export default {
  [SET_LIST_SUPERVISORS_MUTATION]( state, payload ) {
    state.supervisors = payload.supervisors;
    state.countSupervisors = payload.count;
  },

  [SET_SUPERVISOR_DETAIL_MUTATION](state, payload) {
    state.supervisorDetail = payload;
  }
};