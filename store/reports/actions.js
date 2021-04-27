import { SET_LIST_FARMERS_MUTATION, SET_FARMER_DETAIL_MUTATION } from './reports.constant';

const convertData = (item) => {
  return {
    id: item.id,
    name: item.name,
    location: item.location,
    total_cultivar_supplied: item.cultivar_supplied,
    total_cultivar_rejected: item.cultivar_rejectd,
  };
}
    
export default {
  getFarmers({ commit }, params = null) {
    return this.$api.reports.getFarmers(params).then(({ items, count }) => {
      commit(SET_LIST_FARMERS_MUTATION, {
        farmers: items.map(convertData),
        count
      });
    }).catch((err) => {
      throw err;
    })
  },

  getFarmerDetail({ commit }, id) {
    return this.$api.reports.getFarmerDetail(id).then((result) => {
      commit(SET_FARMER_DETAIL_MUTATION, result);
    }).catch((err) => {
      throw err;
    })
  }
};
