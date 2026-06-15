import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; 
import { useApi } from './ApiContext.jsx';

const ExplorePage = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();
  const [userRole, setUserRole] = useState('starter'); 

  // आपके 27 ओरिजिनल फीचर्स
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

  // प्रमोशन का मास्टर हैंडलर
  const handlePromotion = (category) => {
    // ये तीनों बटन अब PromotionForm पर जाएंगे और वहां PriceHelper से प्राइस उठाएंगे
    navigate('/promotion-form', { state: { category: category } });
  };

  return (
    <Layout>
      <div style={{ padding: '20px 10px' }}>
        
        {/* 1. कैटेगरी सिलेक्शन (Role System) */}
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
        
        {/* 2. तीन प्रीमियम प्रमोशन बटन (कमाई के मुख्य साधन) */}
        <div style={{ display: 'grid', gap: '10px', marginBottom: '25px' }}>
          <button onClick={() => handlePromotion('starter')} style={premiumBtn('#FFD700')}>
            🚀 Starter Boosting (Quick Form)
          </button>
          <button onClick={() => handlePromotion('startup')} style={premiumBtn('#f0f0f0')}>
            🔥 Startup Launch (Detailed Promotion)
          </button>
          <button onClick={() => window.location.href='https://wa.me/918053756591?text=Hi, I want a Brand Deal'} style={premiumBtn('#000', '#fff')}>
            💎 Enterprise Brand Deal (Contact Direct)
          </button>
        </div>

        {/* 3. 27 फीचर्स की महा-ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {allFeatures.map((item) => (
            <button 
              key={item.name} 
              onClick={() => navigate(item.path)} 
              style={featureStyle}>
              {item.name}
            </button>
          ))}
        </div>

        {/* 4. सर्वर स्टेटस */}
        <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center', border: '1px dashed #ccc' }}>
          <p style={{ fontSize: '11px', margin: 0 }}>📡 <b>Server Engine:</b> {serverUrl} | 27 Features Online</p>
        </div>
      </div>
    </Layout>
  );
};

// स्टाइल्स
const premiumBtn = (bg, color='#000') => ({ 
  padding: '16px', borderRadius: '12px', border: 'none', fontWeight: 'bold', 
  background: bg, color: color, cursor: 'pointer', fontSize: '14px' 
});

const featureStyle = { 
  padding: '15px', background: '#fff', border: '1px solid #ddd', 
  borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' 
};

export default ExplorePage;
