export default {
  // getInvoiceTypes(state) {
  //   return state.billTypes;
  // },
  getBills(state) {
    return state.bills;
  },
  getBillById: (state) => (id) => {
    return state.bills.find(bill => bill.id === id);
  },
  // getBillByType: (state) => (typeId) => {
  //   return state.bills.filter(bill => bill.type.id === typeId);
  // },
  getCountBill(state) {
    return state.countBill;
  },
  // getSuccessBill(state) {
  //   return state.bills.filter(bill => bill.status === 'SUCCESS');
  // },
  // getPendingBill(state) {
  //   return state.bills.filter(bill => bill.status === 'PENDING');
  // },
  getCurrentBill(state) {
    return state.currentBill;
  },
};
