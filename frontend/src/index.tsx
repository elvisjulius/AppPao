import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Catalog from './components/Catalog';
import Nav from './components/Nav';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav/>
    <App />
    <Catalog />
  </React.StrictMode>
);
