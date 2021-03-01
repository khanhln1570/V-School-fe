const env = 'dev';
import ApiRoutes from './api-routes';

let envConfig = require('./enviroments/develop').default;
if (env === 'production') {
  envConfig = require('./enviroments/production').default;
}

export default {
  locales: {
    'en': 'English',
    'my': 'Malaysia'
  },
  locale: 'en',
  ...ApiRoutes,
  ...envConfig,
}