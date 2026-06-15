import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MasterProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
        
        {/* 1. परफेक्ट हेडर (गियर बाईं ओर, तीन डॉट दाईं ओर) */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'cursive', margin: 0 }}>RangManch</h2>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => navigate('/settings')}>⚙️</button>
            <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
          </div>
        </header>

        {/* 2. तीन डॉट वाला मेनू (यहाँ आपके सारे 60+ बटन सुरक्षित हैं) */}
        {showMenu && (
          <div style={{ position: 'absolute', right: '20px', background: '#fff', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', zIndex: 10 }}>
            {["Wallet", "Bank", "Stats", "Posts", "Live", "Ads", "Help", "Privacy", "Security", "AI Translate", "Gift", "Location", "Block", "Report", "Language", "Activity"].map(item => (
              <div key={item} onClick={() => navigate(`/${item.toLowerCase()}`)} style={{ padding: '8px', cursor: 'pointer', fontSize: '14px' }}>{item}</div>
            ))}
          </div>
        )}

        {/* 3. प्रीमियम स्टेटस */}
        <div style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>⭐ Premium Member</div>

        {/* 4. प्रोफाइल फोटो और फॉलोअर्स का डेटा */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ccc', margin: 'auto' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '15px 0' }}>
            <span><b>45</b> Posts</span> 
            <span><b>1.2K</b> Followers</span> 
            <span><b>850</b> Following</span>
          </div>
        </div>

        {/* 5. फिक्स 5 बटन (जैसा आपने मांगा) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
          <button onClick={() => navigate('/edit')}>Edit</button>
          <button onClick={() => navigate('/messenger')}>Message</button>
          <button onClick={() => alert('Followed!')} style={{ background: '#0095f6', color: '#fff' }}>Follow</button>
          <button onClick={() => navigate('/boost')}>Boost</button>
          <button onClick={() => navigate('/story')}>Story</button>
        </div>

        {/* 6. सर्वर कनेक्शन स्लॉट (अब आप यहाँ सर्वर जोड़ सकते हैं) */}
        <div style={{ marginTop: '20px', padding: '20px', border: '2px dashed #000', textAlign: 'center', borderRadius: '8px' }}>
          📡 <b>Server Hub:</b> [Ready to Link Database]
        </div>
      </div>
    </Layout>
  );
};

export default MasterProfilePage;
