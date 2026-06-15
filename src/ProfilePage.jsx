import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ध्यान दें: मैंने यहाँ <Layout> हटा दिया है ताकि डबल हेडर की समस्या खत्म हो जाए
// अगर आपको Layout चाहिए, तो Layout.jsx फाइल के अंदर से हेडर हटा दें।
const MasterProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // बटन्स का बड़ा स्टाइल
  const bigBtnStyle = { 
    padding: '15px 5px', 
    fontSize: '14px', 
    fontWeight: 'bold', 
    borderRadius: '8px', 
    border: '1px solid #999', 
    background: '#f0f0f0',
    cursor: 'pointer',
    flex: 1
  };

  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 1. हेडर (सिर्फ एक बार, कोई डबल बटन नहीं) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0 }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => navigate('/settings')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>⚙️</button>
          <button onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '20px', border: 'none', background: 'none' }}>⋮</button>
        </div>
      </header>

      {/* 3 डॉट मेनू */}
      {showMenu && (
        <div style={{ position: 'absolute', right: '20px', top: '70px', background: '#fff', border: '1px solid #ccc', padding: '15px', borderRadius: '10px', zIndex: 100 }}>
          {["Wallet", "Bank", "Stats", "Posts", "Live", "Ads", "Help"].map(item => (
            <div key={item} onClick={() => navigate(`/${item.toLowerCase()}`)} style={{ padding: '10px', cursor: 'pointer' }}>{item}</div>
          ))}
        </div>
      )}

      {/* प्रीमियम स्टेटस */}
      <div style={{ color: '#D4AF37', fontWeight: 'bold', marginBottom: '15px' }}>⭐ Premium Member</div>

      {/* प्रोफाइल फोटो और आँकड़े */}
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#ddd', margin: 'auto' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '15px' }}>
          <span><b>45</b> Posts</span> <span><b>1.2K</b> Followers</span> <span><b>850</b> Following</span>
        </div>
      </div>

      {/* 5 बड़े बटन (अब इनका साइज बड़ा कर दिया है) */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '25px' }}>
        <button onClick={() => navigate('/edit')} style={bigBtnStyle}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={bigBtnStyle}>Message</button>
        <button onClick={() => alert('Followed!')} style={{ ...bigBtnStyle, background: '#0095f6', color: '#fff' }}>Follow</button>
        <button onClick={() => navigate('/boost')} style={bigBtnStyle}>Boost</button>
        <button onClick={() => navigate('/story')} style={bigBtnStyle}>Story</button>
      </div>

      {/* सर्वर हब */}
      <div style={{ padding: '25px', border: '2px dashed #000', textAlign: 'center', borderRadius: '10px' }}>
        📡 <b>Server Hub:</b> [Ready to Link Database]
      </div>
    </div>
  );
};

export default MasterProfilePage;
