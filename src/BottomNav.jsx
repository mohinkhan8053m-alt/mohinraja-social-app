import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // आपके बताए गए 5 बटन
  const navItems = [
    { name: 'Home', path: '/home', icon: '🏠' },
    { name: 'Search', path: '/search', icon: '🔍' },
    { name: 'VideoCall', path: '/video-call', icon: '📞' },
    { name: 'Messenger', path: '/messenger', icon: '💬' },
    { name: 'Profile', path: '/profile', icon: '👤' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 0',
      borderTop: '1px solid #eee',
      background: '#fff',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1000 // ताकि यह सबसे ऊपर दिखे
    }}>
      {navItems.map((item) => (
        <button 
          key={item.name} 
          onClick={() => navigate(item.path)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: location.pathname === item.path ? '#0095f6' : '#8e8e8e',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          <span>{item.icon}</span>
          <span style={{ fontSize: '10px', marginTop: '2px' }}>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
