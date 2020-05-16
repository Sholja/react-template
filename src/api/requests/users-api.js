import { formAxiosObject } from '../../common/helpers';
import { LOGIN } from '../request-objects/users-requests';

const UsersApi = () => {
  const login = (email, password) => {
    return formAxiosObject(LOGIN, {
      email,
      password,
    });
  };

  return Object.freeze({
    login,
  });
};

export default UsersApi;
