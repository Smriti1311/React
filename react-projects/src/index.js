import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import i18n from './i18n/i18n';
import ErrorBoundary from './Components/Error Boundary/errorBoundary';
import store from './Store/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store}>
    <ErrorBoundary>
      <BrowserRouter>
        <I18nextProvider i18n = {i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
