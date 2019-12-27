import Helpers from '../../common/helpers';
import { LOGIN } from '../request-objects/users-requests';

const UsersApi = () => {
  const helpers = Helpers();

  const login = (email, password) => {
    return helpers.formAxiosObject(LOGIN, {
      email,
      password,
    });
  };

  return Object.freeze({
    login,
  });
};

export default UsersApi;
