import { SET_LIST_FLAGS_MUTATION, SET_FLAG_DETAILS_MUTATION } from './flags.constant';

    
export default {
  getFlags({ commit }, params = null) {
    return this.$api.flags.getFlags(params).then(({ items, count }) => {
      commit(SET_LIST_FLAGS_MUTATION, {
        flags: items,
        count
      });
    }).catch((err) => {
      throw err;
    })
  },

  getFlagDetails({ commit }, id) {
    return this.$api.flags.getFlagDetails(id).then((result) => {
      commit(SET_FLAG_DETAILS_MUTATION, result);
    }).catch((err) => {
      throw err;
    })
  }
};