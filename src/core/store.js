import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {
  const store = createStore(rootReducer, {}, enhancers);
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;