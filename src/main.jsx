import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import './index.css'; // Import any global CSS
// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);