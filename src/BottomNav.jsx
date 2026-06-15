import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const navBtn = { 
    background: 'none', border: 'none', fontSize: '24px', 
    cursor: 'pointer', padding: '10px', display: 'flex', alignItems: 'center'
  };

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  // नेविगेशन और मेनू क्लोजिंग का स्मार्ट फंक्शन
  const handleMenuClick = (path, e) => {
    e.stopPropagation(); // क्लिक को बाहर न जाने दें
    navigate(path);      // पेज पर ले जाएं
    setShowMenu(false);  // मेनू तुरंत बंद करें
  };

  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, width: '100%', 
      background: '#fff', borderTop: '1px solid #eee', 
      display: 'flex', justifyContent: 'space-around', padding: '5px 0',
      zIndex: 9999, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
    }}>
      <button style={navBtn} onClick={() => navigate('/home')}>🏠</button>
      <button style={navBtn} onClick={() => navigate('/explore')}>🔍</button>
      <button style={navBtn} onClick={() => navigate('/messenger')}>💬</button>
      <button style={navBtn} onClick={() => navigate('/video-call')}>📹</button>
      <button style={navBtn} onClick={() => navigate('/profile')}>👤</button>
      
      <button style={navBtn} onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}>⋮</button>

      {showMenu && (
        <div style={{
          position: 'fixed', bottom: '75px', right: '15px', background: '#fff',
          border: '1px solid #ddd', borderRadius: '15px', padding: '10px', 
          boxShadow: '0 5px 20px rgba(0,0,0,0.25)', width: '180px', zIndex: 10000
        }} onClick={(e) => e.stopPropagation()}> 
          
          <div onClick={(e) => handleMenuClick('/partnerships', e)} style={menuItemStyle}>🤝 Partnerships</div>
          <div onClick={(e) => handleMenuClick('/promote', e)} style={menuItemStyle}>🚀 Promote</div>
          <div onClick={(e) => handleMenuClick('/settings', e)} style={menuItemStyle}>⚙️ Settings</div>
          <div onClick={(e) => handleMenuClick('/admin', e)} style={{...menuItemStyle, borderBottom: 'none'}}>📈 Admin</div>
          
          <div style={{ padding: '8px', fontSize: '10px', color: '#999', textAlign: 'center' }}>
            📡 Server Engine: Ready
          </div>
        </div>
      )}
    </nav>
  );
};

const menuItemStyle = { padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' };

export default BottomNav;
