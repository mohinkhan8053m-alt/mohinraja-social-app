import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MasterProfilePage = () => {
  const navigate = useNavigate();

  // ये हैं वो 15 मुख्य बटन जो सीधे अलग पन्ने खोलेंगे
  return (
    <Layout>
      <div style={{ width: '100%', minHeight: '100vh', background: '#fff', paddingBottom: '80px' }}>
        
        {/* ग्लोबल प्रोमो बैनर */}
        <div style={{ background: '#000', color: '#FFD700', padding: '10px', textAlign: 'center' }}>
          📢 RangManch Hub Active
        </div>

        {/* टॉप हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
          <button onClick={() => navigate('/settings')}>⚙️ Settings</button>
          <h2>Mohin Raja</h2>
          <button onClick={() => navigate('/menu')}>⋮ Menu</button>
        </header>

        {/* प्रोफाइल एरिया */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ccc', margin: 'auto' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '15px' }}>
            <button onClick={() => navigate('/edit')}>Edit Profile</button>
            <button onClick={() => navigate('/messenger')}>Message</button>
            <button onClick={() => navigate('/video-call')}>📹 Video Call</button>
            <button onClick={() => navigate('/boost')}>🚀 Boost</button>
            <button onClick={() => navigate('/story')}>+ Add Story</button>
            <button onClick={() => navigate('/map')}>📍 Map</button>
          </div>
        </div>

        {/* नीचे के अन्य बटन (जो सीधे अलग पेज पर ले जाएंगे) */}
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <button onClick={() => navigate('/wallet')}>💳 Wallet</button>
          <button onClick={() => navigate('/bank')}>🏦 Bank</button>
          <button onClick={() => navigate('/premium')}>⭐ Premium</button>
          <button onClick={() => navigate('/stats')}>📈 Stats</button>
          <button onClick={() => navigate('/posts')}>🖼️ Posts</button>
          <button onClick={() => navigate('/followers')}>👥 Followers</button>
          <button onClick={() => navigate('/following')}>🤝 Following</button>
          <button onClick={() => navigate('/live')}>🔴 Live</button>
          <button onClick={() => navigate('/ads')}>📢 Ads</button>
          <button onClick={() => navigate('/help')}>🆘 Help</button>
        </div>

        {/* सर्वर स्लॉट का संकेत */}
        <div style={{ margin: '20px', padding: '15px', border: '2px dashed #000', textAlign: 'center' }}>
          📡 <b>Server Engine:</b> All 65+ Features Synchronized
        </div>
      </div>
    </Layout>
  );
};

export default MasterProfilePage;
