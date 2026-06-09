import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', text: '#fff', border: '1px solid #fbbf24' };

  // ये 23 फीचर्स हैं जो प्रोफाइल पेज पर रहेंगे
  const features = [
    'Edit Profile', 'Share', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 
    'Logout', 'Invite', 'Help', 'Security', 'Data', 'Notifications', 
    'Language', 'Theme', 'Premium', 'About', 'Feedback', 'Boost', 
    'ChatGuard', 'Translate', 'VideoCall', 'BlockUser', 'AdminPanel'
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, padding: '20px' }}>
      
      {/* 1. हेडर सेक्शन (प्रोफाइल फोटो और बायो) */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: theme.border, margin: '0 auto 10px', background: '#222' }}></div>
        <h2 style={{ color: theme.gold, margin: '5px' }}>Mohin Raja</h2>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>Painter & Plumber | Content Creator 🎨</p>
      </header>

      {/* 2. फॉलोअर्स और फॉलोइंग (इंस्टाग्राम स्टाइल) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', borderTop: theme.border, borderBottom: theme.border, padding: '15px' }}>
        <div style={{ textAlign: 'center' }}><strong>1.2K</strong><br/>Followers</div>
        <div style={{ textAlign: 'center' }}><strong>850</strong><br/>Following</div>
      </div>

      {/* 3. 23 फीचर्स का ग्रिड (जो अभी चलेंगे और सर्वर वाले स्लॉट हैं) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '100px' }}>
        {features.map((item, index) => (
          <button 
            key={index}
            onClick={() => {
              // जो बटन बिना सर्वर के चल सकते हैं, उन्हें यहाँ नेविगेट कर सकते हैं
              if(item === 'Settings') navigate('/settings');
              else if(item === 'VideoCall') navigate('/video-call');
              else console.log(`[SERVER SLOT]: Executing ${item} via Supabase...`);
            }}
            style={{ 
              background: '#111', color: '#fff', border: theme.border, padding: '12px', 
              borderRadius: '8px', cursor: 'pointer', fontSize: '12px' 
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 4. फिक्स्ड नेविगेशन बार (इंस्टाग्राम जैसा) */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/settings')}>⚙️</button>
        <button onClick={() => navigate('/profile')} style={{ color: theme.gold }}>👤</button>
      </nav>
    </div>
  );
};

export default MasterProfilePage;
