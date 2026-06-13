import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      {/* 1. हेडर (1 Button - ⋮) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
        <h2>Moin Raja</h2>
        <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
      </header>

      {/* 2. प्रोफाइल फोटो और स्टेट्स (3 Buttons - Posts, Followers, Following) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
        <button>Posts</button> <button>Followers</button> <button>Following</button>
      </div>

      {/* 3. मेन एक्शन बटन (4 Buttons - Follow, Message, Edit, Boost) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate('/video-call')} style={{ flex: 1 }}>Follow (Video Call)</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1 }}>Message</button>
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1 }}>Edit</button>
        <button onClick={() => navigate('/story-upload')} style={{ flex: 1 }}>🚀 Boost</button>
      </div>

      {/* 4. बॉटम नेविगेशन (5 Buttons - Home, Explore, Msg, Video, Profile) */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/video-call')}>📹</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>

      {/* 5. 15 बटनों वाला मेनू (मेनू के अंदर 15 बटन) */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9' }}>
          {['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Blocked', 'Privacy', 'Security'].map(btn => (
            <button key={btn} onClick={() => navigate(`/${btn.toLowerCase()}`)} style={{ display: 'block', width: '100%' }}>{btn}</button>
          ))}
        </div>
      )}
    </div>
  );
};
