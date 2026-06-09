import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. प्रीमियम टॉप बार */}
      <header style={{ padding: '20px', borderBottom: theme.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px', cursor: 'pointer' }}>⬅️</button>
        <h1 style={{ color: theme.gold, fontSize: '22px', fontWeight: 'bold' }}>RangManch Chat</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }} onClick={() => navigate('/video-call')}>🎥</button>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }} onClick={() => console.log('AudioTranslate')}>👁️‍🗨️</button>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }} onClick={() => console.log('Gift')}>🎁</button>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }} onClick={() => console.log('Location')}>📍</button>
        </div>
      </header>

      {/* 2. चैट एरिया (खुला-खुला) */}
      <main style={{ flexGrow: 1, padding: '30px', overflowY: 'auto' }}>
        <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '20px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: theme.border }}>
          <p style={{ fontSize: '18px' }}>नमस्ते! कैसे हैं आप?</p>
          <button onClick={() => console.log('Translate')} style={{ background: '#fff', color: '#000', border: 'none', borderRadius: '50%', width: '30px', height: '30px', fontWeight: 'bold' }}>i</button>
        </div>

        {/* प्रीमियम लॉक बैनर */}
        <div style={{ marginTop: '30px', padding: '25px', background: 'linear-gradient(to right, #4c1d95, #b45309)', borderRadius: '25px', textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>🔒 Unlock AI Translations & Unlimited Chat</p>
          <button style={{ background: '#fff', color: '#b45309', padding: '12px 30px', borderRadius: '50px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Upgrade Now</button>
        </div>
      </main>

      {/* 3. इनपुट एरिया (नीचे की तरफ) */}
      <div style={{ padding: '20px', borderTop: theme.border, display: 'flex', gap: '15px', alignItems: 'center', background: '#000' }}>
        <button style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '28px' }} onClick={() => console.log('Filter')}>✨</button>
        <input type="text" placeholder="Message..." style={{ flexGrow: 1, padding: '15px', borderRadius: '50px', border: theme.border, background: 'rgba(255,255,255,0.1)', color: '#fff' }} />
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, color: '#000', padding: '12px 25px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => console.log('Send')}>Send</button>
      </div>
    </div>
  );
};

export default MessengerPage;
