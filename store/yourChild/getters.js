export default {
  getYourChild(state) {
    return state.yourChild;
  },
  getCountChild(state) {
    return state.countChild;
  },
  getCurrentChild(state) {
    return state.currentChild;
  },
  getCurrentChildInvoices(state) {
    return state.currentChildInvoices;
  },
  getCurrentChildInvoicesByType: (state) => (typeId) => {
    return state.currentChildInvoices?.filter(invoice => invoice.type === typeId);
  },
  getCurrentChildInvoicesByArrayId: (state) => (arrayId) => {
    return state.currentChildInvoices.filter(invoice => {
      return arrayId.find(id => invoice.id === id);
    });
  },
};
