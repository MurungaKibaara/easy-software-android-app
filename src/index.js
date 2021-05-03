import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppNavigator from './navigation';

export default () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
        </PersistGate>
    </Provider>
)};
