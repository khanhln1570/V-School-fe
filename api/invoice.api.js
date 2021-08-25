export default (axios, resource) => ({
  getAllInvoices(payload) {
    return axios.get(resource.getAllInvoices, {params: payload.params});
  },
  getInvoiceById(payload) {
    return axios.get(resource.getInvoiceById.replace(':id', payload.id));
  }
});

