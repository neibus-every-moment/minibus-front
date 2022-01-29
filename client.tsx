import './src/scss/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './src/redux/ducks';
import App from './src/routes/App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.querySelector('#app')
);
