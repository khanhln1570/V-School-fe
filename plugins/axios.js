export default ({ store, redirect, $appConfig, $axios }, inject) => {
  $axios.defaults.baseURL = $appConfig.apiURL;

  // Skip process from server
  if (process.server) {
    return
  }

  // Request interceptor
  $axios.onRequest(config => {
    // Set locale to header
    const locale = store.getters['lang/locale'];
    if (locale) {
      config.headers.common['Accept-Language'] = locale;
    }
    
    // Set token to header
    const token = store.getters['game/token'];
    if (token) {
      config.headers.common['token'] = `Bearer ${token}`;
    }
  });

  $axios.onResponse(response => response, (error) => {
    const { status } = error.response || {}

    if (status >= 500) {
      // !TODO handler response 500
    }

    if (status === 401) {
      // !TODO handler response 401;

      redirect('/');
    }

    return Promise.reject(error);
  })
}