export default {
  // getChild: state => {
  //   for (let i = 0; i < state.children.length; i++) {
  //     return state.children[i];
  //   }
  // },
  getCurrentChild(state) {
    return state.currentChild;
  },
  getCurrentChildInvoices(state) {
    return state.currentChildInvoices;
  },
  getCurrentChildInvoicesByType: (state) => (type) => {
    return state.currentChildInvoices.filter(invoice => invoice.type === type);
  },
  getCurrentChildInvoicesByArrayId: (state) => (arrayId) => {
    console.log(arrayId);

    return state.currentChildInvoices.filter(invoice => {
      return arrayId.find(id => invoice.id === id);
    });
  },
};
