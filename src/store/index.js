import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
