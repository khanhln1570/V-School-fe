import { setExpireTime } from '~/helpers/utils.helper.js';
import { AUTH_TOKEN_KEY } from "./yourChild.constants";

export default {
  setCurrentChild(state, child) {
    state.currentChild = child;
  },
  setCurrentChildInvoices(state, invoices) {
    state.currentChildInvoices = invoices;
  },
};
