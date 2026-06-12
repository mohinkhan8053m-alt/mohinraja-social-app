import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './UserProvider.jsx'; // अपना यूजर डेटा यहाँ जोड़ें

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* अब पूरा ऐप यूजर डेटा को पहचान पाएगा */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
