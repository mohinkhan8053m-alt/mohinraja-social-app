import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // 40+ फीचर्स का पूरा मास्टर डेटा
  const features = {
    editMenu: ['Change Photo', 'Change Name', 'Edit Bio', 'Social Links', 'Change Username', 'Category', 'Private Info', 'Pro Dashboard'],
    msgMenu: ['Video Call', 'Voice Call', 'AI Translate', 'Location', 'Send Gift', 'ChatGuard', 'Gallery', 'Block User'],
    storyMenu: ['Upload Story', 'Add Highlight', 'Archive', 'Viewers List', 'Story Controls', 'Go Live'],
    mainMenu: ['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Boost', 'Blocked', 'Privacy', 'Security', 'Logout', 'About']
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '22px', fontFamily: 'cursive' }}>RangManch</h2>
        <div>
          <button onClick={() => navigate('/settings')}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
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

      {/* 3. मेन बटन (अब ये सभी क्लिकेबल हैं) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        {/* Edit बटन (8 फीचर वाला) */}
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1, padding: '8px' }}>Edit</button>
        {/* Message बटन (8 फीचर वाला) */}
        <button onClick={() => navigate('/messenger')} style={{ flex: 1, padding: '8px' }}>Message</button>
        {/* + Promote बटन */}
        <button onClick={() => navigate('/promote')} style={{ padding: '8px 15px', background: '#fbbf24', border: 'none' }}>+ Promote</button>
        {/* Story बटन (6 फीचर वाला) */}
        <button onClick={() => navigate('/story-upload')} style={{ padding: '8px 15px' }}>+</button>
      </div>

      {/* 4. 3-डॉट मेनू (18 फीचर) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9' }}>
          {features.mainMenu.map(f => (
            <button key={f} onClick={() => alert(f)} style={{ display: 'block', width: '100%', padding: '10px' }}>{f}</button>
          ))}
        </div>
      )}

      {/* 5. सर्वर स्लॉट (कमाई डेटा) */}
      <div style={{ padding: '20px', border: '2px dashed #ccc', margin: '20px' }}>
        <p>📈 [Active Earnings: Wallet Enabled]</p>
      </div>

      {/* 6. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
