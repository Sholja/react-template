import { formAxiosObject } from '../../common/helpers';
import { LOGIN } from '../request-objects/users-requests';

export const loginApi = (email, password) => {
  return formAxiosObject(LOGIN, {
    email,
    password,
  });
}
