const local = {
  ENVIRONMENT: 'local',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: 'my-secret-key',
};

const development = {
  ENVIRONMENT: 'development',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: 'my-secret-key',
};

const production = {
  ENVIRONMENT: 'production',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: 'my-secret-key',
};

const getConfig = () => {
  switch (process.env.REACT_APP_ENV) {
    case 'local':
      return local;
    case 'production':
      return production;
    default:
      return development;
  }
};

export default {
  ...getConfig(),
};
