import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. यह जरूरी है
import App from './App.jsx';
import './index.css'; // अगर आप टेलविंड इस्तेमाल कर रहे हैं

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. इसे यहाँ लपेटना जरूरी है ताकि नेविगेशन काम करे */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
