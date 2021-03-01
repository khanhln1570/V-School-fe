import config from '~/config';

export default (context, inject) => {
  inject('appConfig', config);
}
