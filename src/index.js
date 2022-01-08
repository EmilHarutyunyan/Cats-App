import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
// Styles
import {GlobalStyle} from "./GlobalStyles"
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);