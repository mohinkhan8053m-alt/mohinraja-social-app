import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServer } from './AuthServer.js';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const features = AuthServer.getFeatures(); // यहाँ से 86 फीचर आ रहे हैं

  const handleAction = async (item) => {
    await AuthServer.executeAction(item);
    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
      {/* 3-डॉट मेनू बटन */}
      <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '24px', cursor: 'pointer', border: 'none', background: 'none' }}>☰</button>

      {/* 86 फीचर्स का प्रोफेशनल लिस्ट */}
      {showMenu && (
        <div style={{ position: 'absolute', top: '60px', right: '20px', width: '220px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '12px', padding: '10px', maxHeight: '400px', overflowY: 'auto' }}>
          {features.map(item => (
            <div key={item} onClick={() => handleAction(item)} style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
              {item}
            </div>
          ))}
        </div>
      )}
      
      {/* प्रोफाइल के बाकी हिस्से (फोटो, नाम) यहाँ रखें... */}
    </div>
  );
};

export default ProfilePage;
