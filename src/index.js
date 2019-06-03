import './index.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import Main from './containers/Main';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  devToolsEnhancer()
)

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)

