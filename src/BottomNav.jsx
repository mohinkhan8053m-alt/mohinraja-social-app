import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {!hideHeader && (
        <header style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
          {location.pathname !== '/home' && <button onClick={() => navigate(-1)}>←</button>}
          <span style={{ marginLeft: '10px' }}>RangManch</span>
        </header>
      )}
      
      <main style={{ flex: 1 }}>{children}</main>

      {!hideFooter && <BottomNav />}
    </div>
  );
};
export default Layout;
