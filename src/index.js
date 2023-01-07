import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllState from './context/AllState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllState> 
    <App />
    </AllState>
  </React.StrictMode>
);