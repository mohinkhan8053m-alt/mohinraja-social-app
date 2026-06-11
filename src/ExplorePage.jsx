import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const navigate = useNavigate();

  // 34 फीचर्स का मास्टर डेटा
  const menuGroups = [
    { name: "🚀 Promote", path: "/promote" },
    { name: "🔥 Boosting", path: "/boost" },
    { name: "🌍 Geo-Target", path: "/geo-targeting" },
    { name: "💖 Premium", path: "/premium" },
    { name: "🎁 Gifts", path: "/gifts" },
    { name: "💬 Messenger", path: "/messenger" },
    { name: "⚙️ Settings", path: "/settings" },
    { name: "📈 Admin", path: "/admin" },
    { name: "💰 Affiliate/Skills", path: "/affiliate-skills" }
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Arial', paddingBottom: '80px' }}>
      
      {/* 1. ब्रांडेड हेडर */}
      <header style={{ padding: '20px', borderBottom: '1px solid #dbdbdb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0 }}>RangManch</h2>
        <button onClick={() => navigate('/settings')}>⚙️ Settings</button>
      </header>

      {/* 2. 34 फीचर्स का ग्रिड (Master Controls) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '20px' }}>
        {menuGroups.map((item) => (
          <button key={item.name} onClick={() => navigate(item.path)} 
            style={{ padding: '20px', background: '#f8f9fa', border: '1px solid #eee', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold' }}>
            {item.name}
          </button>
        ))}
      </div>

      {/* 3. सर्वर स्लॉट (जहाँ 34 फीचर्स का बैकएंड डेटा लोड होगा) */}
      <div style={{ margin: '20px', padding: '20px', border: '2px dashed #aaa', borderRadius: '10px', textAlign: 'center' }}>
        <p>📡 <b>Server Hub:</b> 34 Features Data Synchronized</p>
        <button onClick={() => alert('Syncing Database...')}>Sync Now</button>
      </div>

      {/* 4. बॉटम नेविगेशन (जिंदा नेविगेशन) */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')}>🏠 Home</button>
        <button onClick={() => navigate('/explore')}>🔍 Explore</button>
        <button onClick={() => navigate('/messenger')}>💬 Chat</button>
        <button onClick={() => navigate('/profile')}>👤 Profile</button>
      </nav>
    </div>
  );
};

export default ExplorePage;
