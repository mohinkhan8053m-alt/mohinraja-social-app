import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // आपके 14 मुख्य प्रीमियम फीचर्स
  const features = ['Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved', 'Premium', 'Boost', 'Insights', 'Logout'];

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff', fontFamily: 'Arial', boxSizing: 'border-box' }}>
      
      {/* 1. टॉप हेडर - यहाँ दाईं तरफ तीन डॉट हैं */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', alignItems: 'center', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Mohin Raja</h2>
        <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>⋮</button>
      </div>

      {/* 2. प्रोफाइल फोटो और स्टेट्स */}
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: '85px', height: '85px', borderRadius: '50%', background: '#dbdbdb', border: '2px solid #fff' }}></div>
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

      {/* 4. बटन्स */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: 'none', background: '#efefef', fontWeight: 'bold' }} onClick={() => navigate('/edit-profile')}>Edit</button>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: 'none', background: '#efefef', fontWeight: 'bold' }} onClick={() => alert('Following!')}>Follow</button>
        <button style={{ flex: 1, padding: '8px', borderRadius: '5px', border: 'none', background: '#efefef', fontWeight: 'bold' }} onClick={() => navigate('/messenger')}>Message</button>
        <button style={{ padding: '8px 15px', borderRadius: '5px', border: 'none', background: '#fbbf24', fontWeight: 'bold' }} onClick={() => alert('पेमेंट गेटवे खुल रहा है...')}>+ Boost</button>
      </div>

      {/* 5. दाईं तरफ खुलने वाला 'थ्री डॉट' मेनू */}
      {showMenu && (
        <div style={{ position: 'absolute', right: '10px', top: '50px', background: '#fff', border: '1px solid #dbdbdb', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '200px', zIndex: 10 }}>
          {features.map(f => (
            <button key={f} style={{ display: 'block', width: '100%', padding: '12px', border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer' }} onClick={() => alert(f + ' खोल रहे हैं...')}>{f}</button>
          ))}
        </div>
      )}

      {/* 6. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
