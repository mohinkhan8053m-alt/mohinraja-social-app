import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // 40+ फीचर्स की लिस्ट (3-डॉट मेन्यू)
  const features = ['Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved', 'Premium', 'Boost', 'Insights', 'Live Mode', 'Dark Mode', 'Activity', 'Invite', 'Help', 'Language', 'About', 'Feedback', 'AdminPanel'];

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff', fontFamily: 'Arial' }}>
      
      {/* 1. टॉप हेडर - सेटिंग्स और प्रीमियम नाम */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', alignItems: 'center', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '18px', margin: 0, fontFamily: 'cursive' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} onClick={() => alert('Settings Open')}>⚙️</button>
          <button style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>⋮</button>
        </div>
      </div>

      {/* 2. प्रोफाइल फोटो और स्टेट्स */}
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '85px', height: '85px', borderRadius: '50%', background: '#eee' }}></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}><strong>45</strong><br/><small>Posts</small></div>
          <div style={{ textAlign: 'center' }}><strong>1.2K</strong><br/><small>Followers</small></div>
          <div style={{ textAlign: 'center' }}><strong>850</strong><br/><small>Following</small></div>
        </div>
      </div>

      {/* 3. नाम और बायो */}
      <div style={{ padding: '0 20px', marginBottom: '15px' }}>
        <div style={{ fontWeight: 'bold' }}>Mohin Raja</div>
        <div style={{ fontSize: '14px' }}>अपनी कला, अपनी पहचान - रंगमंच</div>
      </div>

      {/* 4. कमाई और सोशल बटन (6 मुख्य बटन) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: '#fff' }} onClick={() => navigate('/edit')}>Edit</button>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: '#fff' }} onClick={() => alert('Following!')}>Follow</button>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: '#fff' }} onClick={() => navigate('/messenger')}>Message</button>
        {/* प्रमोट/प्लस बटन (कमाई का जरिया) */}
        <button style={{ padding: '8px 15px', borderRadius: '5px', border: 'none', background: '#fbbf24', fontWeight: 'bold' }} onClick={() => alert('Boost your product/ID')}>+ Promote</button>
      </div>

      {/* 5. 3-डॉट ड्रॉपडाउन (40+ फीचर्स) */}
      {showMenu && (
        <div style={{ padding: '15px', background: '#f9f9f9', marginTop: '10px' }}>
          {features.map(f => (
            <button key={f} style={{ display: 'block', width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ddd', background: '#fff' }} onClick={() => alert(f)}>{f}</button>
          ))}
        </div>
      )}

      {/* 6. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
      </nav>
      
      {/* कमाई का सर्वर स्लॉट */}
      <div id="server-data" style={{ display: 'none' }}>[Active Earnings: Wallet Enabled]</div>
    </div>
  );
};

export default InstagramProfile;
