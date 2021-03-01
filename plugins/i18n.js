import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages: {}
});

export default async ({ app, store }, inject) => {
  if (process.client) {
    await loadMessages(store.getters["language/getLocale"]);
  }

  app.i18n = i18n;
  inject("loadMessages", loadMessages);
};

/**
 * @param {String} locale
 */
export async function loadMessages(locale) {
  console.log(locale);

  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(
      /* webpackChunkName: "lang-[request]" */ `~/lang/${locale}`
    ).then(m => m.default || m);
    i18n.setLocaleMessage(locale, messages);
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale;
  }
}
