import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ये 6 बटन तुम्हारे लिए फिक्स कर दिए हैं
  const navItems = [
    { name: 'Home', icon: '🏠', path: '/home' },
    { name: 'Explore', icon: '🧭', path: '/explore' },
    { name: 'Messenger', icon: '💬', path: '/messenger' },
    { name: 'Video', icon: '🎥', path: '/video-call' },
    { name: 'Profile', icon: '👤', path: '/profile' },
    { name: 'Settings', icon: '⚙️', path: '/settings' }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fcfcfc' }}>
      
      {/* मुख्य कंटेंट वाला हिस्सा */}
      <main style={{ flex: 1, paddingBottom: '80px' }}>
        {children}
      </main>

      {/* नीचे वाली 6 बटनों की पट्टी - हमेशा के लिए फिक्स */}
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
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
