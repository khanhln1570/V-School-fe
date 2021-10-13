export default {
  getInvoiceTypes(state) {
    return state.invoiceTypes;
  }, 
  getInvoices(state) {
    return state.invoices;
  },
  getInvoiceById: (state) => (id) => {
    return state.invoices.find(invoice => invoice.id === id);
  },
  getInvoiceByType: (state) => (typeId) => {
    return state.invoices.filter(invoice => invoice.type.id === typeId);
  },
  getCountInvoice(state) {
    return state.countInvoice;
  },
  getSuccessInvoice(state) {
    return state.invoices.filter(invoice => invoice.status === 'SUCCESS');
  },
  getPendingInvoice(state) {
    return state.invoices.filter(invoice => invoice.status === 'PENDING');
  },
  getCurrentInvoice(state) {
    return state.currentInvoice;
  }, 
};
