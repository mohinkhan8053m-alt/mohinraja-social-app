import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // 54 फीचर्स का फुल डेटाबेस स्ट्रक्चर
  const features = {
    editMenu: ['Change Photo', 'Change Name', 'Edit Bio', 'Social Links', 'Change Username', 'Category', 'Private Info', 'Pro Dashboard'],
    msgMenu: ['Video Call', 'Voice Call', 'AI Translate', 'Location', 'Send Gift', 'ChatGuard', 'Gallery', 'Block User'],
    storyMenu: ['Upload Story', 'Add Highlight', 'Archive', 'Viewers List', 'Story Controls', 'Go Live', 'Boost Story'],
    mainMenu: ['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Boost', 'Blocked', 'Privacy', 'Security', 'Logout', 'About']
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#fff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* 1. हेडर (पूर्ण स्क्रीन लेआउट) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'cursive' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/settings')}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
        </div>
      </header>

      {/* 2. प्रोफाइल स्टेट्स (बटन आधारित) */}
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#eee', border: '2px solid #ddd' }}></div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button><strong>45</strong><br/>Posts</button>
          <button><strong>1.2K</strong><br/>Followers</button>
          <button><strong>850</strong><br/>Following</button>
        </div>
      </div>

      {/* 3. मुख्य नेविगेशन और फॉलो बटन */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/follow')} style={{ flex: 2, padding: '10px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '5px' }}>Follow</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1, padding: '10px' }}>Message</button>
        <button onClick={() => navigate('/promote')} style={{ padding: '10px 20px', background: '#fbbf24', border: 'none', borderRadius: '5px' }}>Promote</button>
      </div>

      {/* 4. विस्तृत मेनू (सभी 54 फीचर का एक्सेस) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f0f0f0' }}>
          {[...features.editMenu, ...features.msgMenu, ...features.storyMenu, ...features.mainMenu].map(f => (
            <button key={f} onClick={() => navigate(`/${f.toLowerCase().replace(' ', '-')}`)} style={{ display: 'block', width: '100%', padding: '12px', marginBottom: '5px', textAlign: 'left', border: '1px solid #ccc' }}>{f}</button>
          ))}
        </div>
      )}

      {/* 5. बॉटम नेविगेशन (Instagram Style) */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/video-call')}>📹</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
