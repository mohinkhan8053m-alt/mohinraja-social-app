import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 6 फीचर्स में से 5 मुख्य बटन + 1 'Menu' (Settings के लिए)
  const navItems = [
    { name: 'Home', icon: '🏠', path: '/home' },
    { name: 'Explore', icon: '🧭', path: '/explore' },
    { name: 'Messenger', icon: '💬', path: '/messenger' },
    { name: 'Video', icon: '🎥', path: '/video-call' },
    { name: 'Profile', icon: '👤', path: '/profile' },
    { name: 'Menu', icon: '⋮', path: '/settings' } // 6ठा फीचर यहाँ है
  ];

  return (
    <div style={{ 
      position: 'fixed', bottom: 0, left: 0, width: '100%', 
      height: '70px', background: '#000', display: 'flex', 
      justifyContent: 'space-around', alignItems: 'center',
      borderTop: '2px solid #deff9a', zIndex: 9999,
      boxShadow: '0 -5px 15px rgba(0,0,0,0.3)'
    }}>
      {navItems.map((item) => (
        <div key={item.name} onClick={() => navigate(item.path)} 
             style={{ 
               color: location.pathname === item.path ? '#deff9a' : '#aaa', 
               fontSize: '12px', textAlign: 'center', cursor: 'pointer',
               display: 'flex', flexDirection: 'column', alignItems: 'center'
             }}>
          <span style={{ fontSize: '24px' }}>{item.icon}</span>
          {/* 'Menu' नाम के नीचे टेक्स्ट नहीं दिखाएंगे ताकि ज्यादा क्लीन लगे */}
          {item.name !== 'Menu' && <span>{item.name}</span>}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
