import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // 40+ फीचर्स का डेटा
  const features = ['Edit Profile', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Logout', 'Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved', 'Premium', 'Boost', 'Insights', 'Live Mode', 'Dark Mode', 'Activity', 'Invite', 'Help', 'Language', 'About', 'Feedback', 'AdminPanel'];

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', background: '#fff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. टॉप हेडर */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', alignItems: 'center', borderBottom: '1px solid #dbdbdb' }}>
        <button style={{ background: 'none', border: 'none', fontSize: '20px' }} onClick={() => setShowMenu(!showMenu)}>⚙️</button>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Mohin Raja</h2>
        <button style={{ background: 'none', border: 'none', fontSize: '20px' }} onClick={() => alert('Map Activated!')}>📍</button>
      </div>

      {/* 2. प्रोफाइल फोटो और स्टेट्स */}
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '85px', height: '85px', borderRadius: '50%', background: '#dbdbdb' }}></div>
        <div style={{ display: 'flex', gap: '25px' }}>
          <div style={{ textAlign: 'center' }}><strong>45</strong><br/><small>Posts</small></div>
          <div style={{ textAlign: 'center' }}><strong>1.2K</strong><br/><small>Followers</small></div>
          <div style={{ textAlign: 'center' }}><strong>850</strong><br/><small>Following</small></div>
        </div>
      </div>

      {/* 3. नाम और बायो */}
      <div style={{ padding: '0 20px', marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold' }}>Mohin Raja</div>
        <div style={{ fontSize: '14px' }}>अपनी कला, अपनी पहचान - रंगमंच</div>
      </div>

      {/* 4. एडिट और प्रमोट बटन्स */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '10px' }}>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #dbdbdb', background: '#efefef', fontWeight: 'bold' }} onClick={() => navigate('/edit-profile')}>Edit Profile</button>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #dbdbdb', background: '#fbbf24', fontWeight: 'bold' }} onClick={() => alert('Promoting...')}>+ Promote</button>
      </div>

      {/* 5. 40+ फीचर्स का ड्रॉपडाउन */}
      {showMenu && (
        <div style={{ padding: '20px', background: '#f9f9f9', marginTop: '10px' }}>
          {features.map(f => (
            <button key={f} style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '5px' }} onClick={() => alert(f)}>{f}</button>
          ))}
        </div>
      )}

      {/* 6. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
      
      {/* [SERVER SLOT]: यहाँ सर्वर का डेटा सिंक होगा */}
      <div id="server-data" style={{ display: 'none' }}></div>
    </div>
  );
};

export default InstagramProfile;
