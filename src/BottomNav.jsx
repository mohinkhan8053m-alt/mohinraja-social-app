import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; // 1. ApiContext को जोड़ा
import BottomNav from './BottomNav.jsx';

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { freeServer } = useApi(); // 2. सर्वर स्टेटस यहाँ से उठाएंगे

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {!hideHeader && (
        <header style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
          {location.pathname !== '/home' && (
            <button onClick={() => navigate(-1)} style={{ marginRight: '10px', cursor: 'pointer' }}>←</button>
          )}
          <span style={{ fontWeight: 'bold' }}>RangManch</span>
          {/* छोटा सा फीचर जो मैंने जोड़ा: यहाँ सर्वर स्टेटस का सिग्नल */}
          <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#ccc' }}>
             {freeServer ? '●' : '○'}
          </span>
        </header>
      )}
      
      <main style={{ flex: 1 }}>{children}</main>

      {!hideFooter && <BottomNav />}
    </div>
  );
};

export default Layout;
