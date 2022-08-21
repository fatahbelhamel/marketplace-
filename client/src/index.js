import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from "react-helmet-async";
import App from './App';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


ReactDOM.render(
    <HelmetProvider>
     <App />
    </HelmetProvider>,
  document.getElementById('root')
);

