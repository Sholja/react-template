export const IS_PRODUCTION_ENV = process.env.REACT_APP_ENV === 'production';

export const API_URL = IS_PRODUCTION_ENV ? '' : process.env.REACT_APP_ENV === 'local' ? '' : '';

// eslint-disable-next-line
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PERSISTOR_SECRET_KEY = '';
