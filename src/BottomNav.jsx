import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx';

const BottomNav = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', padding: '10px', zIndex: 9999 }}>
      <button onClick={() => navigate('/')}>🏠</button>
      <button onClick={() => navigate('/explore')}>🔍</button>
      <button onClick={() => navigate('/messenger')}>💬</button>
      <button onClick={() => navigate('/video-call')}>📹</button>
      <button onClick={() => navigate('/profile')}>👤</button>
      <button onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}>⋮</button>

      {showMenu && (
        <div style={{ position: 'absolute', bottom: '60px', background: '#fff', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <div onClick={() => navigate('/partnerships')}>🤝 Partnerships</div>
          <div onClick={() => navigate('/promote')}>🚀 Promote</div>
          <div style={{ fontSize: '10px', marginTop: '5px' }}>
            📡 Server: {serverUrl ? serverUrl.replace(/^https?:\/\//, '') : 'Connecting...'}
          </div>
        </div>
      )}
    </nav>
  );
};
export default BottomNav;
