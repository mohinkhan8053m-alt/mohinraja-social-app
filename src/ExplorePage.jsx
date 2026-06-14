import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; 

const ExplorePage = () => {
  const navigate = useNavigate();

  const masterFeatures = [
    { name: "🚀 Promote", path: "/promote" },
    { name: "🔥 Boosting", path: "/boost" },
    { name: "🌍 Geo-Target", path: "/geo-targeting" },
    { name: "💖 Premium", path: "/premium" },
    { name: "🎁 Gifts", path: "/gifts" },
    { name: "💬 Messenger", path: "/messenger" },
    { name: "💰 Affiliate", path: "/affiliate" },
    { name: "💳 Wallet", path: "/wallet" },
    { name: "📊 Earnings", path: "/earnings" },
    { name: "📱 Ads Network", path: "/ads-network" },
    { name: "🎥 Live Stream", path: "/live" },
    { name: "🏆 Rewards", path: "/rewards" },
    { name: "🤝 Partnerships", path: "/partnerships" },
    { name: "🛒 E-commerce", path: "/shop" },
    { name: "📢 Marketing", path: "/marketing" },
    { name: "🎮 Gaming", path: "/gaming" },
    { name: "🎟️ Events", path: "/events" },
    { name: "🛡️ Security", path: "/security" },
    { name: "📈 Admin", path: "/admin" },
    { name: "🌐 Global Reach", path: "/global" }
  ];

  const getButtonStyle = (name) => {
    const isPremium = name === "🤝 Partnerships" || name === "🚀 Promote";
    return {
      padding: '15px',
      background: isPremium ? '#FFD700' : '#f8f9fa',
      border: isPremium ? 'none' : '1px solid #eee',
      borderRadius: '12px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px',
      color: isPremium ? '#000' : '#333',
      transition: 'transform 0.2s'
    };
  };

  return (
    <Layout>
      <div style={{ padding: '0 10px' }}>
        {/* RangManch Branding - आपकी पहचान */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h1 style={{ fontFamily: 'cursive', fontSize: '24px', margin: 0, color: '#000' }}>RangManch</h1>
          <p style={{ fontSize: '12px', color: '#666' }}>EXPLORE</p>
        </div>
        
        {/* कंपनी के लिए प्रोमोशनल संदेश */}
        <div style={{ background: '#fff9c4', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px', border: '1px dashed #fbc02d' }}>
          <p style={{ fontSize: '13px', margin: 0, fontWeight: 'bold' }}>📢 Companies: Click 'Promote' or 'Partnership'!</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {masterFeatures.map((item) => (
            <button 
              key={item.name} 
              onClick={() => navigate(item.path)} 
              style={getButtonStyle(item.name)}>
              {item.name}
            </button>
          ))}
        </div>

        {/* सर्वर स्लॉट - यहाँ आप अपना सर्वर जोड़ेंगे */}
        <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #aaa', borderRadius: '15px', textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>📡 <b>Server Hub:</b> 34 Features Synchronized</p>
          <button 
            onClick={() => alert('Syncing Database from Server...')}
            style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Sync All Data
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;
