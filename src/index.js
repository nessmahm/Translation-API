import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home' ; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

reportWebVitals();
