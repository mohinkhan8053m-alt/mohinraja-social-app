import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // अगर प्रोफाइल पेज है, तो हेडर पूरी तरह गायब रहेगा
  const isProfilePage = location.pathname === '/profile'; 
  const showHeader = !hideHeader && !isProfilePage;
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc' }}>
      
      {showHeader && (
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee',
          position: 'sticky', top: 0, zIndex: 1000
        }}>
          {isHomePage ? (
            <h1 style={{ fontFamily: 'cursive', fontSize: '24px', margin: 0, color: '#333' }}>RangManch</h1>
          ) : (
            <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>⬅️</button>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* यहाँ पार्टनर और कॉइन की जगह अब मल्टी-कंट्री सेलेक्टर आ गया है */}
            <select 
              onChange={(e) => console.log("Region:", e.target.value)} 
              style={{ padding: '5px', borderRadius: '15px', border: '1px solid #ccc', fontSize: '12px' }}
            >
              <option value="Global">🌍 Global</option>
              <option value="India">🇮🇳 India</option>
              <option value="USA">🇺🇸 USA</option>
              <option value="UAE">🇦🇪 UAE</option>
            </select>

            <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}>⋮</button>
          </div>
          
          {showTopMenu && (
            <div style={{ position: 'absolute', top: '60px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '160px', zIndex: 1001 }}>
              <div onClick={() => { navigate('/settings'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>⚙️ Settings</div>
              <div onClick={() => { navigate('/admin'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>📈 Admin</div>
              <div onClick={() => { navigate('/promote'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>🚀 Promote</div>
            </div>
          )}
        </header>
      )}

      <main style={{ padding: '20px' }}>{children}</main>
      {!hideFooter && <BottomNav />}
    </div>
  );
};

export default Layout;
