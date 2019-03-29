import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ffShopReducer from './reducers';
import FFshop from './containers/FFShop';

const store = createStore(ffShopReducer);

render(
  <Provider store={store}>
    <FFshop />
  </Provider>,
  document.getElementById('root')
);
