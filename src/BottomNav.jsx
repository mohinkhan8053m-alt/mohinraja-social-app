import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; // सर्वर कनेक्शन

const BottomNav = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi(); // अब सर्वर URL डायनामिक है
  const [showMenu, setShowMenu] = useState(false);
  
  const navBtn = { background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '10px', display: 'flex', alignItems: 'center' };
  const menuItemStyle = { padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' };

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const handleMenuClick = (path, e) => {
    e.stopPropagation();
    navigate(path);
    setShowMenu(false);
  };

  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, width: '100%', 
      background: '#fff', borderTop: '1px solid #eee', 
      display: 'flex', justifyContent: 'space-around', padding: '5px 0',
      zIndex: 9999, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
    }}>
      <button style={navBtn} onClick={() => navigate('/')}>🏠</button>
      <button style={navBtn} onClick={() => navigate('/explore')}>🔍</button>
      <button style={navBtn} onClick={() => navigate('/messenger')}>💬</button>
      <button style={navBtn} onClick={() => navigate('/video-call')}>📹</button>
      <button style={navBtn} onClick={() => navigate('/profile')}>👤</button>
      
      <button style={navBtn} onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}>⋮</button>

      {showMenu && (
        <div style={{
          position: 'fixed', bottom: '70px', right: '15px', background: '#fff',
          border: '1px solid #ddd', borderRadius: '15px', padding: '10px', 
          boxShadow: '0 5px 20px rgba(0,0,0,0.25)', width: '180px', zIndex: 10000
        }} onClick={(e) => e.stopPropagation()}> 
          
          <div onClick={(e) => handleMenuClick('/partnerships', e)} style={menuItemStyle}>🤝 Partnerships</div>
          <div onClick={(e) => handleMenuClick('/promote', e)} style={menuItemStyle}>🚀 Promote</div>
          <div onClick={(e) => handleMenuClick('/settings', e)} style={menuItemStyle}>⚙️ Settings</div>
          <div onClick={(e) => handleMenuClick('/admin', e)} style={{...menuItemStyle, borderBottom: 'none'}}>📈 Admin</div>
          
          <div style={{ padding: '10px', fontSize: '10px', color: '#4caf50', textAlign: 'center', borderTop: '1px solid #eee', marginTop: '5px' }}>
            📡 <b>Server:</b> {serverUrl.split('//')[1]}
          </div>
        </div>
      )}
    </nav>
  );
};

export default BottomNav;
