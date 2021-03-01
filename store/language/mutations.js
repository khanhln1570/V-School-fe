import { SET_LANG_MUTATION, REMOVE_LANG_MUTATION, LOCATE_KEY } from "./language.constant";

// export const state = {
//   locales: ['en', 'fr'],
//   locale: 'en',
// };


// export const getters = {
//   getLocale(state) {
//     return state.locale;
//   }
// };

export default {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      this.$cookies.set(LOCATE_KEY, locale);
      this.$i18nInjectedFunction(locale);
      state.locale = locale;
    }
  },
  removeLang() {
    window.localStorage.removeItem(LOCATE_KEY);
  }
};
