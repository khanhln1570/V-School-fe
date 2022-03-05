export default {
  // getInvoiceTypes(state) {
  //   return state.billTypes;
  // },
  getParents(state) {
    return state.parents;
  },
  getParentById: (state) => (id) => {
    return state.parents.find(bill => bill.id === id);
  },
  // getParentByType: (state) => (typeId) => {
  //   return state.parents.filter(bill => bill.type.id === typeId);
  // },
  getCountParent(state) {
    return state.countParent;
  },
  // getSuccessParent(state) {
  //   return state.parents.filter(bill => bill.status === 'SUCCESS');
  // },
  // getPendingParent(state) {
  //   return state.parents.filter(bill => bill.status === 'PENDING');
  // },
  getCurrentParent(state) {
    return state.currentParent;
  },
};
