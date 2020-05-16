const local = {
  ENVIRONMENT: 'local',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: '',
};

const development = {
  ENVIRONMENT: 'development',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: '',
};

const production = {
  ENVIRONMENT: 'production',
  API_URL: '',
  // eslint-disable-next-line
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PERSISTOR_SECRET_KEY: '',
};

const getConstants = () => {
  switch (process.env.REACT_APP_ENV) {
    case 'local':
      return local;
    case 'production':
      return production;
    default:
      return development;
  }
};

export default getConstants();
