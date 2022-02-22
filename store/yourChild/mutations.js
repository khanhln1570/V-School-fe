import { setExpireTime } from '~/helpers/utils.helper.js';
import { AUTH_TOKEN_KEY } from "./yourChild.constants";

export default {
  setYourChild(state, child) {
    state.yourChild = child;
  },
  setCountChild(state, totalChild) {
    state.countChild = totalChild;
  },
  setCurrentChild(state, child) {
    state.currentChild = child;
  },
  setCurrentChildInvoices(state, invoices) {
    state.currentChildInvoices = invoices;
  },
  clearCurrentChildInvoices(state) {
    state.currentChildInvoices = null;
  },
};
