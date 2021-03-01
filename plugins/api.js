import generateApi from '~/services/api.service';

export default (context, inject) => {
  inject('api', generateApi(context));
}