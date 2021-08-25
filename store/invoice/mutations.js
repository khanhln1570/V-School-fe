export default {
  setInvoices(state, item) {
    if (item) {
      state.invoices = item;
    }
  },
  setCountInvoices(state, count) {
    if (count) {
      state.countInvoice = count;
    }
  },
  setCurrentInvoice(state, item) {
    if (item) {
      state.currentInvoice = item;
    }
  },
};