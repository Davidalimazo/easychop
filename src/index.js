import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AppTheme from './components/AppTheme';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
  <AppTheme>
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />}/>
    </Routes>
  </BrowserRouter>
  </AppTheme>
  </React.StrictMode>,
  document.getElementById('root')
);