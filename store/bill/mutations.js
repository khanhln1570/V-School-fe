export default {
  setBills(state, item) {
    if (item) {
      state.bills = item.data;
      state.countBill = item.count;
    }
  },
  setCurrentBill(state, item) {
    if (item) {
      state.currentBill = item;
    }
  },
};
