import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const navBtn = { 
    background: 'none', border: 'none', fontSize: '24px', 
    cursor: 'pointer', padding: '10px' 
  };

  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, width: '100%', 
      background: '#fff', borderTop: '1px solid #ddd', 
      display: 'flex', justifyContent: 'space-around', padding: '5px 0',
      zIndex: 1000
    }}>
      <button style={navBtn} onClick={() => navigate('/home')}>🏠</button>
      <button style={navBtn} onClick={() => navigate('/explore')}>🔍</button>
      <button style={navBtn} onClick={() => navigate('/messenger')}>💬</button>
      <button style={navBtn} onClick={() => navigate('/video-call')}>📹</button>
      
      {/* गियर वाला सेटिंग बटन - अब नीचे मुख्य पट्टी में है */}
      <button style={navBtn} onClick={() => navigate('/settings')}>⚙️</button>
      
      {/* 3-डॉट मेनू - भीड़ कम करने के लिए */}
      <button style={navBtn} onClick={() => setShowMenu(!showMenu)}>⋮</button>

      {/* 3-डॉट वाला पॉप-अप मेनू */}
      {showMenu && (
        <div style={{
          position: 'absolute', bottom: '65px', right: '10px', background: '#fff',
          border: '1px solid #ddd', borderRadius: '12px', padding: '10px', 
          boxShadow: '0 -2px 10px rgba(0,0,0,0.15)', width: '160px'
        }}>
          <div onClick={() => { navigate('/profile'); setShowMenu(false); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>👤 Profile</div>
          <div onClick={() => { navigate('/admin'); setShowMenu(false); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>📈 Admin</div>
          <div onClick={() => { navigate('/security'); setShowMenu(false); }} style={{ padding: '10px', cursor: 'pointer' }}>🛡️ Security</div>
        </div>
      )}
    </nav>
  );
};

export default BottomNav;
