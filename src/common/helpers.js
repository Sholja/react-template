import axios from 'axios';

const Helpers = () => {
  const blockPageScroll = () => {
    if (document.body.className.indexOf('loader-block-scroll') === -1) {
      document.body.className += ' loader-block-scroll';
    }
  }

  const unblockPageScroll = () => {
    document.body.className = document.body.className.split('loader-block-scroll').join('');
  }

  const formAxiosObject = (requestObject, data, params, urlParams, headers) => {
    if (!requestObject || !requestObject.route || !requestObject.method) {
      return;
    }

    let { route, method } = requestObject;

    if (urlParams) {
      for (let key in urlParams) {
        route += `/${urlParams[key]}`;
      }
    }

    const axiosObject = {
      url: route,
      method: requestObject.method,
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'DELETE')) {
      axiosObject.data = data;
    }

    if (params && requestObject.method === 'GET') {
      axiosObject.params = params;
    }

    if (headers) {
      axiosObject.headers = headers;
    }

    return axios(axiosObject);
  }

  return Object.freeze({
    blockPageScroll,
    unblockPageScroll,
    formAxiosObject,
  })
}

export default Helpers;
