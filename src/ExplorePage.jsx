import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; 
import { useApi } from './ApiContext.jsx';

const ExplorePage = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();
  const [userRole, setUserRole] = useState('starter'); 

  // आपके पूरे 27 फीचर्स यहाँ हैं, एक भी कम नहीं!
  const allFeatures = [
    { name: "🚀 Promote", path: "/promote" }, { name: "🔥 Boosting", path: "/boost" },
    { name: "🌍 Geo-Target", path: "/geo-targeting" }, { name: "💖 Premium", path: "/premium" },
    { name: "🎁 Gifts", path: "/gifts" }, { name: "💬 Messenger", path: "/messenger" },
    { name: "💰 Affiliate", path: "/affiliate" }, { name: "💳 Wallet", path: "/wallet" },
    { name: "📊 Earnings", path: "/earnings" }, { name: "📱 Ads Network", path: "/ads-network" },
    { name: "🎥 Live Stream", path: "/live" }, { name: "🏆 Rewards", path: "/rewards" },
    { name: "🤝 Partnerships", path: "/partnerships" }, { name: "🛒 E-commerce", path: "/shop" },
    { name: "📢 Marketing", path: "/marketing" }, { name: "🎮 Gaming", path: "/gaming" },
    { name: "🎟️ Events", path: "/events" }, { name: "🛡️ Security", path: "/security" },
    { name: "📈 Admin", path: "/admin" }, { name: "🌐 Global Reach", path: "/global" },
    { name: "👤 Profile Edit", path: "/profile-edit" }, { name: "🛠️ Server Hub", path: "/server-settings" },
    { name: "⚡ Girl Filter", path: "/girl-filter" }, { name: "📡 Live Stats", path: "/live-stats" },
    { name: "🏦 Bank Payouts", path: "/bank" }, { name: "📍 Map Share", path: "/map-share" },
    { name: "🛡️ Auto-Mod", path: "/auto-mod" }
  ];

  return (
    <Layout>
      <div style={{ padding: '20px 10px' }}>
        
        {/* कैटेगरी सिलेक्शन - आपका रोल सिस्टम */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['starter', 'startup', 'enterprise'].map(role => (
            <button key={role} onClick={() => setUserRole(role)} style={{ 
              flex: 1, padding: '12px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer',
              background: userRole === role ? (role === 'enterprise' ? '#000' : '#FFD700') : '#eee',
              color: userRole === role && role === 'enterprise' ? '#fff' : '#000'
            }}>
              {role.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* 27 फीचर्स का महा-ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {allFeatures.map((item) => (
            <button 
              key={item.name} 
              onClick={() => navigate(item.path, { state: { role: userRole } })} 
              style={{ 
                padding: '15px', background: '#fff', border: '1px solid #ddd', 
                borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' 
              }}>
              {item.name}
            </button>
          ))}
        </div>

        {/* सर्वर स्टेटस */}
        <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center', border: '1px dashed #ccc' }}>
          <p style={{ fontSize: '11px', margin: 0 }}>📡 <b>Server Engine:</b> {serverUrl} | 27 Features Online</p>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;
