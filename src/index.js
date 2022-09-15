import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalculatorPage from './components/pages/CalculatorPage';
import Quotes from './components/pages/Quotes';
import NotMatch from './components/pages/NotMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quotes />} />

      <Route path="*" element={<NotMatch />} />
    </Routes>
  </BrowserRouter>,
);
