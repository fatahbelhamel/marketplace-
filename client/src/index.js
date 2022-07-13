import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Provider } from "react-redux";
import store from "./store/store.js";

window.store = store;

ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);

