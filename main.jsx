import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)