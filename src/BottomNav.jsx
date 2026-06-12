import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const navBtn = { 
    background: 'none', border: 'none', fontSize: '26px', // आइकन थोड़े बड़े कर दिए
    cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center'
  };

  // पॉप-अप बंद करने के लिए बाहर क्लिक का लॉजिक
  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    if (showMenu) document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, width: '100%', 
      background: '#fff', borderTop: '1px solid #eee', 
      display: 'flex', justifyContent: 'space-around', padding: '10px 0',
      zIndex: 1000, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
    }}>
      <button style={navBtn} onClick={() => navigate('/home')}>🏠</button>
      <button style={navBtn} onClick={() => navigate('/explore')}>🔍</button>
      <button style={navBtn} onClick={() => navigate('/messenger')}>💬</button>
      <button style={navBtn} onClick={() => navigate('/video-call')}>📹</button>
      <button style={navBtn} onClick={() => navigate('/profile')}>👤</button>
      
      {/* 3-डॉट मेनू */}
      <button style={navBtn} onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}>⋮</button>

      {/* 3-डॉट वाला पॉप-अप मेनू */}
      {showMenu && (
        <div style={{
          position: 'absolute', bottom: '75px', right: '15px', background: '#fff',
          border: '1px solid #eee', borderRadius: '15px', padding: '5px', 
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)', width: '160px', zIndex: 1001
        }}>
          <div onClick={() => navigate('/settings')} style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', display: 'flex', alignItems: 'center', gap: '8px' }}>⚙️ Settings</div>
          <div onClick={() => navigate('/admin')} style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', display: 'flex', alignItems: 'center', gap: '8px' }}>📈 Admin</div>
          <div onClick={() => navigate('/security')} style={{ padding: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>🛡️ Security</div>
        </div>
      )}
    </nav>
  );
};

export default BottomNav;
