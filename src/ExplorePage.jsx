import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; 

const ExplorePage = () => {
  const navigate = useNavigate();
  const { proServer } = useApi();
  const [userRole, setUserRole] = useState('starter');
  const [earnings, setEarnings] = useState(0); // नया फीचर 1: Earnings Counter

  // 31 फीचर्स की लिस्ट (सभी एक्टिव)
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
    { name: "🛡️ Auto-Mod", path: "/auto-mod" },
    { name: "🔔 Notifications", path: "/notifications" }, // नया फीचर 2
    { name: "📈 Live ROI", path: "/roi-stats" }, // नया फीचर 3
    { name: "🔑 Auth Portal", path: "/auth" }, // नया फीचर 4
    { name: "🌍 Global Hub", path: "/global-hub" } // नया फीचर 5
  ];

  // इंटरनेशनल लैंग्वेज लॉजिक
  const getLabel = (name) => {
    const lang = navigator.language.split('-')[0];
    const translations = { 'hi': ' (हिंदी)', 'ar': ' (عربي)', 'es': ' (ES)' };
    return name + (translations[lang] || '');
  };

  return (
    <div style={{ padding: '20px', paddingBottom: '100px', background: '#fff', minHeight: '100vh' }}>
      
      {/* 1. Header (Earnings + Notification) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>Earnings: <b>₹{earnings}</b></div>
        <button onClick={() => navigate('/notifications')}>🔔</button>
      </div>

      {/* 2. FOMO Timer */}
      <div style={{ background: '#FFD700', padding: '10px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
        🔥 Flash Offer Ending in: 02:45:00
      </div>

      {/* 3. 31 फीचर्स की ग्रिड */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {allFeatures.map((item) => (
          <button 
            key={item.name} 
            onClick={() => navigate(item.path)} 
            style={featureStyle}>
            {getLabel(item.name)}
          </button>
        ))}
      </div>

      {/* 4. सर्वर स्टेटस */}
      <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center', border: '1px dashed #ccc' }}>
        <p style={{ fontSize: '11px' }}>📡 Engine: {proServer || 'Connecting...'} | 31 Features Active</p>
      </div>
    </div>
  );
};

const featureStyle = { padding: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' };

export default ExplorePage;
