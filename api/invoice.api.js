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
<<<<<<< HEAD
  saveInvoices(payload) {
    return axios.post(resource.saveInvoices, payload);
=======
  saveInvocies(payload) {
    return axios.post(resource.saveInvocies, payload);
>>>>>>> 4d2ce118e49c39f6d514a36438c3652d3af53a33
  },
  saveInvoicesBySchool(payload) {
    return axios.post(resource.saveInvoicesBySchool, payload);
  },
});
