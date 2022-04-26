export default (axios, resource) => ({
  getAllInvoices(payload) {
    return axios.get(resource.getAllInvoices, {params: payload.params});
  },
  getInvoicesByToken(payload) {
    console.log(payload);
    return axios.get(resource.getInvoicesByToken, { params: payload });
  },
  getCurrentInvoice(payload) {
    return axios.get(resource.getCurrentInvoice.replace(":id", payload.id));
  },
  saveInvocies(payload) {
    return axios.post(resource.saveInvocies, payload);
  },
  saveInvoicesBySchool(payload) {
    return axios.post(resource.saveInvoicesBySchool, payload);
  },
});
