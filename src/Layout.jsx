import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';
import { useApi } from './ApiContext.jsx'; // सर्वर कनेक्शन जोड़ा

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { serverUrl } = useApi(); // अब लेआउट को पता है सर्वर कौन सा है

  const isProfilePage = location.pathname === '/profile'; 
  const showHeader = !hideHeader && !isProfilePage;
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc', display: 'flex', flexDirection: 'column' }}>
      
      {showHeader && (
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '12px 20px', background: '#fff', borderBottom: '1px solid #eee',
          position: 'sticky', top: 0, zIndex: 1000
        }}>
          {isHomePage ? (
            <h1 style={{ fontFamily: 'cursive', fontSize: '20px', margin: 0, color: '#000' }}>RangManch</h1>
          ) : (
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer' }}>←</button>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '9px', color: '#aaa' }}>{serverUrl.includes('localhost') ? 'DEV' : 'LIVE'}</span>
            <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>⋮</button>
          </div>
          
          {showTopMenu && (
            <div style={{ position: 'absolute', top: '60px', right: '15px', background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', width: '160px', zIndex: 1001 }}>
              {['Settings', 'Admin', 'Promote', 'Partnerships'].map(item => (
                <div key={item} onClick={() => { navigate(`/${item.toLowerCase()}`); setShowTopMenu(false); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9' }}>{item}</div>
              ))}
            </div>
          )}
        </header>
      )}

      <main style={{ flex: 1 }}>{children}</main>

      {!hideFooter && <BottomNav />}
    </div>
  );
};

export default Layout;
