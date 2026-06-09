import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // प्रीमियम डार्क थीम स्टाइलिंग
  const theme = {
    bg: '#000',
    gold: '#fbbf24',
    cardBg: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid #fbbf24'
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', paddingBottom: '100px' }}>
      
      {/* 1. टॉप बार (प्रोफेशनल) */}
      <header style={{ padding: '20px', borderBottom: theme.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: theme.gold, fontSize: '28px', fontWeight: 'bold' }}>RANG MANCH</h1>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button style={{ background: 'transparent', border: theme.border, borderRadius: '50px', padding: '5px 15px', color: theme.gold, cursor: 'pointer' }} onClick={() => navigate('/rewards')}>🎁 Rewards</button>
          <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => alert("AI Translation Active")}>👁️‍🗨️</button>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }} onClick={() => navigate('/messenger')}>✉️</button>
        </div>
      </header>

      {/* 2. स्टोरीज सेक्शन */}
      <div style={{ display: 'flex', gap: '20px', padding: '20px', overflowX: 'auto' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ width: '70px', height: '70px', borderRadius: '50%', border: `2px solid ${theme.gold}`, flexShrink: 0, cursor: 'pointer' }} />
        ))}
      </div>

      {/* 3. पोस्ट फीड (सर्वर स्लॉट के साथ) */}
      <main style={{ padding: '20px' }}>
        <div style={{ ...theme, background: theme.cardBg, borderRadius: '25px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span style={{ fontSize: '12px', color: theme.gold, letterSpacing: '1px' }}>SPONSORED</span>
            <button style={{ background: '#b45309', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 15px', fontSize: '12px', cursor: 'pointer' }} onClick={() => alert("Boost Payment Page")}>🚀 Boost</button>
          </div>
          
          <div style={{ height: '300px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', border: '1px dashed #444' }}>
            [SERVER SLOT]: Post Content
          </div>

          <div style={{ display: 'flex', gap: '30px', marginTop: '20px', fontSize: '28px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => alert("Liked!")}>❤️</button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/comments')}>💬</button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => alert("Share clicked")}>✈️</button>
          </div>
        </div>
      </main>

      {/* 4. बॉटम नेविगेशन (सोशल मीडिया लेआउट) */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-between', padding: '15px 30px', alignItems: 'center', zIndex: '1000' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>🔍</button>
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', borderRadius: '50%', width: '60px', height: '60px', marginTop: '-40px', fontSize: '30px', boxShadow: '0 0 15px #b45309', cursor: 'pointer' }}>+</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }} onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default HomePage;
