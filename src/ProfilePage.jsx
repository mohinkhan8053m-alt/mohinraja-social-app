import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  
  const [profile] = useState({ name: 'Mohin Raja', followers: '1.2K', following: '850', posts: '45' });

  const allFeatures = [
    'Edit Profile', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Logout',
    'Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved',
    'Premium', 'Boost', 'Insights', 'Live Mode', 'Dark Mode', 'Activity',
    'Invite', 'Help', 'Language', 'About', 'Feedback', 'AdminPanel'
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. टॉप हेडर (दाईं तरफ मैप, बाईं तरफ सेटिंग्स) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button style={{ background: 'none', border: 'none', fontSize: '24px' }} onClick={() => setShowFeatures(!showFeatures)}>⚙️</button>
        <button style={{ background: 'none', border: 'none', fontSize: '24px' }} onClick={() => alert('Opening Map...')}>📍</button>
      </div>

      {/* 2. प्रोफाइल फोटो और नाम */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eee', margin: 'auto' }}></div>
        <h2>{profile.name}</h2>
      </div>

      {/* 3. फॉलोअर्स, फॉलोइंग, पोस्ट */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <div style={{ textAlign: 'center' }}><strong>{profile.posts}</strong><br/>Posts</div>
        <div style={{ textAlign: 'center' }}><strong>{profile.followers}</strong><br/>Followers</div>
        <div style={{ textAlign: 'center' }}><strong>{profile.following}</strong><br/>Following</div>
      </div>

      {/* 4. एडिट और प्रमोट बटन (सामने) */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff' }} onClick={() => navigate('/edit-profile')}>Edit Profile</button>
        <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#fbbf24' }} onClick={() => alert('Start Promotion!')}>+ Promote</button>
      </div>

      {/* 5. 40+ फीचर्स का मेनू (सेटिंग्स बटन से खुलेगा) */}
      {showFeatures && (
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '60px' }}>
          {allFeatures.map(feat => (
            <button key={feat} style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '5px' }} onClick={() => alert(feat + ' clicked!')}>
              {feat}
            </button>
          ))}
        </div>
      )}

      {/* 6. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>

      {/* [SERVER SLOT]: सर्वर सिंक */}
      <div id="server-sync" style={{ display: 'none' }}></div>
    </div>
  );
};

export default MasterProfilePage;
