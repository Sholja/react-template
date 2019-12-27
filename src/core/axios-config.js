import axios from 'axios';
import promise from 'promise';

import Helpers from '../common/helpers';
import { API_URL } from '../common/constants';

const initilizeHttpClient = () => {
  const instance = axios.create();
  instance.defaults.headers.common = {};
  axios.defaults.baseURL = API_URL;

  const helpers = Helpers();

  const blockPageScroll = () => {
    helpers.blockPageScroll();
  };

  const unblockPageScroll = () => {
    helpers.unblockPageScroll();
  };

  axios.interceptors.request.use(
    config => {
      blockPageScroll();

      // here you can handle sending session tokens in headers

      return config;
    },
    error => {
      unblockPageScroll();
      return promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    response => {
      unblockPageScroll();
      return response;
    },
    error => {
      unblockPageScroll();

      return Promise.reject(error);
    },
  );
};

export default initilizeHttpClient;
