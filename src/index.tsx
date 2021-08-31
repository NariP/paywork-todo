import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from './module/store';
import ThemeComponent from './ThemeComponent';
import reportWebVitals from './reportWebVitals';
const store = getStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
