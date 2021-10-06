export default {
  setCurrentCustomer(state, item) {
    if (item) {
      state.currentCustomer = item;
    }
  },
};
