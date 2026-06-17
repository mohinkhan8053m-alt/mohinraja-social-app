import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // यह चेक करता है कि पेज लॉगिन पेज है या नहीं
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative' // ताकि सब कुछ सही जगह रहे
    }}>
      {/* मुख्य कंटेंट */}
      <main style={{ flex: 1, paddingBottom: '70px' }}> {/* '70px' ताकि नीचे का स्पेस बना रहे */}
        {children}
      </main>

      {/* लॉगिन पेज को छोड़कर बाकी सब जगह ये पट्टी चिपकी रहेगी */}
      {!isLoginPage && (
        <div style={{ 
          position: 'fixed', 
          bottom: 0, 
          width: '100%', 
          zIndex: 9999,
          background: '#fff',
          borderTop: '1px solid #eee'
        }}>
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default Layout;
