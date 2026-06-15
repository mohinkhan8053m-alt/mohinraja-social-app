import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // फीचर एक्टिवेशन लॉजिक (बिना सर्वर के काम करने वाले)
  const executeLocalAction = (featureName) => {
    alert(`⚡ Feature Active: ${featureName} is now running locally.`);
  };

  // सर्वर स्लॉट (जहाँ बाद में डेटाबेस जुड़ेगा)
  const executeServerAction = (featureName) => {
    console.log(`[SERVER SLOT]: Waiting for Backend connection for ${featureName}...`);
    alert(`📡 Server Slot: ${featureName} integration ready for Backend connection.`);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #ddd' }}>
        <h2>Mohin Raja</h2>
        <button onClick={() => setShowMenu(!showMenu)}>⋮ Menu</button>
      </header>

      {/* 2. प्रोफाइल स्टेट्स */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
        <button onClick={() => executeLocalAction('Posts View')}>45 Posts</button>
        <button onClick={() => executeLocalAction('Followers View')}>1.2K Followers</button>
        <button onClick={() => executeLocalAction('Following View')}>850 Following</button>
      </div>

      {/* 3. मेन एक्शन बटन्स (बिना सर्वर के तुरंत चलेंगे) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1 }}>Edit Profile</button>
        <button onClick={() => navigate('/video-call')} style={{ flex: 1 }}>📹 Video Call</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1 }}>💬 Message</button>
        <button onClick={() => executeLocalAction('Boost Profile')} style={{ flex: 1, background: '#FFD700' }}>🚀 Boost</button>
      </div>

      {/* 4. मेनू (इसमें सर्वर और लोकल फीचर्स दोनों हैं) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9' }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Local Tools (Active)</h4>
          {['Dark Mode', 'Language', 'Activity', 'Help', 'Invite', 'Girl Filter', 'Zoom', 'Focus', 'Record'].map(f => (
            <button key={f} onClick={() => executeLocalAction(f)} style={{ display: 'block', width: '100%', marginBottom: '5px' }}>{f}</button>
          ))}
          
          <h4 style={{ margin: '15px 0 10px 0' }}>Server Features (Slot Ready)</h4>
          {['Wallet', 'Bank/UPI', 'Premium', 'Admin Panel', 'Global Ads', 'AI Chat Translate', 'Voice AI', 'Block User'].map(f => (
            <button key={f} onClick={() => executeServerAction(f)} style={{ display: 'block', width: '100%', marginBottom: '5px', background: '#eee' }}>{f} (Server Needed)</button>
          ))}
        </div>
      )}

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #ddd' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬 Messenger</button>
        <button onClick={() => navigate('/video-call')}>📹 Call</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
