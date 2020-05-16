import { reducer as formReducer } from 'redux-form';
import { i18nState } from 'redux-i18n';
import { persistCombineReducers } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';

import constants from '../common/constants';

const encryptor = createEncryptor({
  secretKey: constants.PERSISTOR_SECRET_KEY,
});

const config = {
  key: 'root',
  // only these will be saved in persist state
  whitelist: [],
  // these will not be persisted
  blacklist: [],
  storage,
  transforms: [encryptor],
};

const rootReducer = persistCombineReducers(config, {
  i18nState,
  form: formReducer,
});

export default rootReducer;
