export default (axios, resource) => ({
  getAllInvoices(payload) {
    return axios.get(resource.getAllInvoices, {params: payload.params});
  },
  getInvoicesByToken(payload) {
    return axios.get(resource.getInvoicesByToken, payload);
  },
  getCurrentInvoice(payload) {
    return axios.get(resource.getCurrentInvoice.replace(":id", payload.id));
  },
});

