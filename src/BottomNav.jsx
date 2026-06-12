import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  // 5 बटनों का स्टाइल
  const navBtn = { 
    background: 'none', border: 'none', fontSize: '26px', 
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
      <button style={navBtn} onClick={() => navigate('/profile')}>👤</button>
    </nav>
  );
};

export default BottomNav;
