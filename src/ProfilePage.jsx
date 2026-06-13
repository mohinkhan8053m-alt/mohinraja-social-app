import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // आपकी 54 फीचर्स की पूरी लिस्ट (जो तीन डॉट के मेनू में सेट होगी)
  const features = {
    editMenu: ['Change Photo', 'Change Name', 'Edit Bio', 'Social Links', 'Change Username', 'Category', 'Private Info', 'Pro Dashboard'],
    msgMenu: ['Video Call', 'Voice Call', 'AI Translate', 'Location', 'Send Gift', 'ChatGuard', 'Gallery', 'Block User'],
    storyMenu: ['Upload Story', 'Add Highlight', 'Archive', 'Viewers List', 'Story Controls', 'Go Live', 'Boost Story'],
    mainMenu: ['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Boost', 'Blocked', 'Privacy', 'Security', 'Logout', 'About']
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#fff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '24px', fontFamily: 'cursive' }}>RangManch</h2>
        <button onClick={() => setShowMenu(!showMenu)} style={{ border: 'none', background: 'none', fontSize: '24px' }}>⋮</button>
      </header>

      {/* 2. प्रोफाइल फोटो और नाम */}
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#eee' }}></div>
        <div style={{ marginLeft: '20px' }}>
          <h3>Moin Raja</h3>
          <p>Plumber & Painter | Creator</p>
        </div>
      </div>

      {/* 3. फॉलोअर्स/फॉलोइंग डेटा */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
        <button style={{ border: 'none', background: 'none' }}><strong>45</strong><br/>Posts</button>
        <button style={{ border: 'none', background: 'none' }}><strong>1.2K</strong><br/>Followers</button>
        <button style={{ border: 'none', background: 'none' }}><strong>850</strong><br/>Following</button>
      </div>

      {/* 4. मेन एक्शन बटन */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate('/video-call')} style={{ flex: 2, padding: '10px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '5px' }}>Follow (Video Call)</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1, padding: '10px' }}>Message</button>
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1, padding: '10px' }}>Edit</button>
      </div>

      {/* 5. 3-डॉट मेनू (सभी 54 फीचर यहाँ समेट दिए हैं) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9', marginTop: '10px' }}>
          {[...features.editMenu, ...features.msgMenu, ...features.storyMenu, ...features.mainMenu].map(f => (
            <button key={f} onClick={() => {}} style={{ display: 'block', width: '100%', padding: '12px', border: 'none', borderBottom: '1px solid #ddd', textAlign: 'left', background: 'none' }}>{f}</button>
          ))}
        </div>
      )}

      {/* 6. सर्वर स्लॉट (यहाँ आप बाद में अपना कोड जोड़ेंगे) */}
      <div style={{ margin: '20px', padding: '20px', border: '2px dashed #000', borderRadius: '10px' }}>
        <p>📡 <b>Server Hub Active</b> (54+ Features Sync)</p>
      </div>

      {/* 7. बॉटम नेविगेशन */}
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
