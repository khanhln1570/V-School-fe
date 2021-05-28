export default {
  getInvoiceTypes(state) {
    return state.invoiceTypes;
  },
  getInvoices(state) {
    return state.invoices;
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
};
