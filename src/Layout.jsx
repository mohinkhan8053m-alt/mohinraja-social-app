import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';
import { useApi } from './ApiContext.jsx'; 

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // यहाँ हमने proServer का इस्तेमाल किया है
  const { proServer } = useApi(); 

  const isProfilePage = location.pathname === '/profile'; 
  const showHeader = !hideHeader && !isProfilePage;
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <div style={{ minHeight: '100vh', background: '#fcfcfc', display: 'flex', flexDirection: 'column' }}>
      
      {showHeader && (
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '12px 20px', background: '#fff', borderBottom: '1px solid #eee',
          position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {isHomePage ? (
            <h1 style={{ fontFamily: 'cursive', fontSize: '20px', margin: 0, color: '#000' }}>RangManch</h1>
          ) : (
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer' }}>←</button>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* यहाँ proServer की स्थिति दिखेगी */}
            <span style={{ fontSize: '9px', color: '#aaa', textTransform: 'uppercase' }}>
              {proServer ? 'LIVE' : 'DISCONNECTED'}
            </span>
            <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>⋮</button>
          </div>
          
          {showTopMenu && (
            <div style={{ 
              position: 'absolute', top: '60px', right: '15px', background: '#fff', 
              border: '1px solid #eee', borderRadius: '12px', padding: '10px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)', width: '160px', zIndex: 1001 
            }}>
              {['Settings', 'Admin', 'Promote', 'Partnerships'].map(item => (
                <div key={item} onClick={() => { navigate(`/${item.toLowerCase()}`); setShowTopMenu(false); }} 
                     style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', fontSize: '14px' }}>
                  {item}
                </div>
              ))}
            </div>
          )}
        </header>
      )}

      <main style={{ flex: 1, paddingBottom: '20px' }}>{children}</main>

      {!hideFooter && <BottomNav />}
    </div>
  );
};

export default Layout;
