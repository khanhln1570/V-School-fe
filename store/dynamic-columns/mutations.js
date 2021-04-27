import { TOGGLE_RIGHTBAR } from "./dynamic-columns.constant";


export default {
  [TOGGLE_RIGHTBAR](state, toggle) {
    state.showRightbar = toggle;
  },
};
