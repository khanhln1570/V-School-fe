export default (axios, resource) => ({
  getStudentsByPhone(payload) {
    return axios.get(resource.getStudentsByPhone.replace(":phone", payload));
  },
  getStudentsByMST(payload) {
    console.log(payload);
    return axios.get(resource.getStudentsByMST.replace(":mst", payload.mst), {params: payload.params});
  },
  addStudentsByExcel(payload) {
    return axios.post(resource.addStudentsByExcel, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
});
