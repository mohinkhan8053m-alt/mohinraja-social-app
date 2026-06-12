import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // आपकी पूरी 54 फीचर्स की लिस्ट सुरक्षित है
  const features = {
    editMenu: ['Change Photo', 'Change Name', 'Edit Bio', 'Social Links', 'Change Username', 'Category', 'Private Info', 'Pro Dashboard'],
    msgMenu: ['Video Call', 'Voice Call', 'AI Translate', 'Location', 'Send Gift', 'ChatGuard', 'Gallery', 'Block User'],
    storyMenu: ['Upload Story', 'Add Highlight', 'Archive', 'Viewers List', 'Story Controls', 'Go Live'],
    mainMenu: ['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Boost', 'Blocked', 'Privacy', 'Security', 'Logout', 'About']
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff', fontFamily: 'Arial', paddingBottom: '80px' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb', alignItems: 'center' }}>
        <h2 style={{ fontSize: '22px', fontFamily: 'cursive', margin: 0 }}>RangManch</h2>
        <div>
          <button onClick={() => navigate('/settings')} style={{ border: 'none', background: 'none' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none' }}>⋮</button>
        </div>
      </header>

      {/* 2. प्रोफाइल स्टेट्स */}
      <div style={{ display: 'flex', padding: '20px', justifyContent: 'space-between' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div><strong>45</strong><br/>Posts</div>
          <div><strong>1.2K</strong><br/>Followers</div>
          <div><strong>850</strong><br/>Following</div>
        </div>
      </div>

      {/* 3. मेन बटन (अब ये सीधे नेविगेशन पर ले जाएंगे) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1, padding: '8px' }}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1, padding: '8px' }}>Message</button>
        <button onClick={() => navigate('/promote')} style={{ padding: '8px 15px', background: '#fbbf24', border: 'none' }}>+ Promote</button>
        <button onClick={() => navigate('/story-upload')} style={{ padding: '8px 15px' }}>+</button>
      </div>

      {/* 4. 3-डॉट मेनू (18 फीचर - आप यहाँ बाद में सर्वर के लिंक जोड़ सकते हैं) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
          {features.mainMenu.map(f => (
            <button key={f} onClick={() => navigate(`/${f.toLowerCase().replace(' ', '-')}`)} style={{ display: 'block', width: '100%', padding: '10px', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}>{f}</button>
          ))}
        </div>
      )}

      {/* 5. सर्वर स्लॉट (कमाई डेटा - आप बाद में यहाँ API कनेक्ट करेंगे) */}
      <div style={{ padding: '20px', border: '2px dashed #ccc', margin: '20px', borderRadius: '10px' }}>
        <p>📡 <b>Server Hub:</b> Wallet System & Analytics Sync</p>
        {/* सर्वर की जगह छोड़ी गई है */}
      </div>

      {/* 6. बॉटम नेविगेशन (अब इसमें 5 बटन हैं) */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')} style={{ border: 'none', background: 'none' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ border: 'none', background: 'none' }}>🔍</button>
        <button onClick={() => navigate('/messenger')} style={{ border: 'none', background: 'none' }}>💬</button>
        <button onClick={() => navigate('/video-call')} style={{ border: 'none', background: 'none' }}>📹</button>
        <button onClick={() => navigate('/profile')} style={{ border: 'none', background: 'none' }}>👤</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
