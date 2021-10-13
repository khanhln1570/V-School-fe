export default {
  setInvoices(state, item) {
    if (item) {
      state.invoices = item.data;
      state.countInvoice = item.count;
    }
  },
  setCurrentInvoice(state, item) {
    if (item) {
      state.currentInvoice = item;
    }
  },
};