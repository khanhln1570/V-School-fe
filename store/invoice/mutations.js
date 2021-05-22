export default {
  setInvoices(state, item) {
    if (item) {
      state.invoices = item.items;
      state.countInvoice = item.count;
    }
  },
};