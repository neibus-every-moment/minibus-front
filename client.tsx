import './src/scss/main.scss';

import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './src/routes/App';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Auth'] = `${localStorage.getItem('Auth')}`;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
