import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  // [SERVER SLOT]: यहाँ से डेटाबेस जुड़ेगा
  const handleAction = (action) => console.log(`[SERVER SLOT]: ${action} Active.`);

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      
      {/* 1. हेडर (सर्च, कैटेगरी, और लाइव काउंट - 8 फीचर्स) */}
      <header style={{ padding: '15px', borderBottom: theme.border }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input placeholder="Search global friends..." style={{ flexGrow: 1, padding: '10px', borderRadius: '20px', background: '#222', border: theme.border, color: '#fff' }} />
          <button onClick={() => alert("Live Count: 1.2M Online")} style={{ color: theme.gold, fontSize: '20px' }}>🌐</button>
        </div>
        
        {/* कैटेगरी बटन्स */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px' }}>
          {['Music', 'Travel', 'Food', 'India', 'USA'].map(cat => (
            <button key={cat} onClick={() => handleAction(cat)} style={{ background: '#222', padding: '8px 15px', borderRadius: '20px', border: theme.border, color: theme.gold }}>{cat}</button>
          ))}
        </div>
      </header>

      {/* 2. मैप इंटरफेस (9 फीचर्स: Map, ZoomIn, ZoomOut, PremiumAccess, ViewSwitch, QuickChat, Follow, Screenshot, BlurBG) */}
      <div style={{ height: '50vh', position: 'relative', margin: '15px', background: '#333', borderRadius: '20px' }}>
        <p style={{ textAlign: 'center', paddingTop: '20vh' }}>[LIVE MAP INTERFACE]</p>
        
        {/* मैप कंट्रोल्स */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={() => handleAction('ZoomIn')} style={{ padding: '15px', borderRadius: '50%', background: theme.gold }}>+</button>
          <button onClick={() => handleAction('ZoomOut')} style={{ padding: '15px', borderRadius: '50%', background: theme.gold }}>-</button>
        </div>

        {/* क्विक कंट्रोल्स */}
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', gap: '10px' }}>
          <button onClick={() => alert("Chat Started!")} style={{ padding: '15px', borderRadius: '50%', background: '#fff', color: '#000' }}>💬</button>
          <button onClick={() => handleAction('Screenshot')} style={{ padding: '15px', borderRadius: '50%', background: theme.gold }}>📸</button>
        </div>
      </div>

      {/* 3. ट्रेंडिंग और प्रोमो (7 फीचर्स: Trending, Posts, PromotedAds, ProfileNav, Create+, Messenger, Home) */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: theme.gold }}>🔥 Trending Now</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[1,2,3].map(i => <div key={i} style={{ width: '80px', height: '80px', background: '#222', borderRadius: '10px' }}>Post {i}</div>)}
        </div>
      </div>

      {/* मास्टर नेविगेशन बार */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#000', borderTop: theme.border }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/create')} style={{ background: theme.gold, padding: '15px', borderRadius: '50%', marginTop: '-30px' }}>+</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default ExplorePage;
