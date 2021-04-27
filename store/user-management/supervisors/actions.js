import { SET_LIST_SUPERVISORS_MUTATION, SET_SUPERVISOR_DETAIL_MUTATION } from "./supervisors.constant";
const convertData = (item) => {
  return {
    id: item.id,
    name: item.name,
    mobileNumber: item.mobileNumber,
    login: item.login,
    password: item.password,
  };
}
    
export default {
  getSupervisors({ commit }, params = null) {
    return this.$api.supervisors.getSupervisors(params).then(({ items, count }) => {
      commit(SET_LIST_SUPERVISORS_MUTATION, {
        supervisors: items.map(convertData),
        count
      });
    }).catch((err) => {
      throw err;
    })
  },

  // getFarmerDetail({ commit }, id) {
  //   return this.$api.reports.getFarmerDetail(id).then((result) => {
  //     commit(SET_FARMER_DETAIL_MUTATION, result);
  //   }).catch((err) => {
  //     throw err;
  //   })
  // }
};
