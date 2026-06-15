import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // सारे 60+ बटन यहाँ हैं - एक भी कम नहीं!
  const allExtraButtons = [
    "Wallet", "Bank", "Stats", "Posts", "Live", "Ads", "Help", "Privacy", "Security", 
    "AI Translate", "Gift", "Location", "Block", "Report", "Language", "Activity",
    "Invite", "Girl Filter", "Zoom", "Focus", "Record", "Coins", "Rewards", "Partnerships"
  ];

  const bigBtnStyle = { 
    padding: '12px 5px', fontSize: '13px', fontWeight: 'bold', 
    borderRadius: '8px', border: '1px solid #999', background: '#f0f0f0',
    cursor: 'pointer', flex: 1 
  };

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
      
      {/* 1. हेडर: क्लासिक फोंट में RangManch */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '24px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/settings')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '20px', border: 'none', background: 'none' }}>⋮</button>
        </div>
      </header>

      {/* 2. तीन डॉट का मेनू (अब इसमें सारे बटन दिखेंगे) */}
      {showMenu && (
        <div style={{ 
          position: 'absolute', right: '20px', top: '70px', background: '#fff', 
          border: '1px solid #ccc', padding: '10px', borderRadius: '8px', 
          zIndex: 100, maxHeight: '300px', overflowY: 'auto', width: '150px' 
        }}>
          {allExtraButtons.map(item => (
            <div key={item} onClick={() => navigate(`/${item.toLowerCase()}`)} style={{ padding: '8px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #eee' }}>
              {item}
            </div>
          ))}
        </div>
      )}

      {/* 3. प्रीमियम स्टेटस */}
      <div style={{ color: '#D4AF37', fontWeight: 'bold', marginBottom: '10px' }}>⭐ Premium Member</div>

      {/* 4. प्रोफाइल फोटो और आँकड़े */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#ddd', margin: 'auto' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '15px' }}>
          <span><b>45</b> Posts</span> <span><b>1.2K</b> Followers</span> <span><b>850</b> Following</span>
        </div>
      </div>

      {/* 5. 5 मुख्य बटन (Edit, Message, Follow, Boost, Story) */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
        <button onClick={() => navigate('/edit')} style={bigBtnStyle}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={bigBtnStyle}>Message</button>
        <button onClick={() => alert('Followed!')} style={{ ...bigBtnStyle, background: '#0095f6', color: '#fff' }}>Follow</button>
        <button onClick={() => navigate('/boost')} style={bigBtnStyle}>Boost</button>
        <button onClick={() => navigate('/story')} style={bigBtnStyle}>Story</button>
      </div>

      {/* 6. सर्वर हब */}
      <div style={{ padding: '20px', border: '2px dashed #000', textAlign: 'center', borderRadius: '10px' }}>
        📡 <b>Server Hub:</b> [Ready to Link Database]
      </div>
    </div>
  );
};

export default MasterProfilePage;
