export default (axios, resource) => ({
  getStudentsByPhone(payload) {
    return axios.get(resource.getStudentsByPhone.replace(":phone", payload));
  },
  getStudentsByMST(payload) {
    console.log(payload);
    return axios.get(resource.getStudentsByMST, {params: payload.params});
  },
  getAllStudents(payload) {
    return axios.get(resource.getAllStudents, {params: payload.params});
  },
  addStudentsByExcel(payload) {
    return axios.post(resource.addStudentsByExcel, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getStudentById(payload) {
    return axios.get(resource.getStudentById.replace(":id", payload.id));
  },
  getAllInvoicesByChild(payload) {
    return axios.get(resource.getAllInvoicesByChild, {params: payload.params});
  },
});
