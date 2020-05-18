import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/store/reducer';

import AppNavigator from './src/navigator/appNavigator';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
