import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; 

const ExplorePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', paddingBottom: '80px', fontFamily: 'serif' }}>
      <AdBanner />

      {/* 1. सर्च और फिल्टर्स (खुले-खुले) */}
      <header style={{ padding: '20px', borderBottom: theme.border }}>
        <div style={{ background: theme.cardBg, padding: '15px', borderRadius: '20px', marginBottom: '15px', border: theme.border, display: 'flex', alignItems: 'center' }}>
          <span>🔍</span>
          <input type="text" placeholder="Search global friends..." style={{ background: 'transparent', border: 'none', color: '#fff', marginLeft: '10px', width: '100%' }} />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
          <button style={{ background: '#166534', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>🚀 प्रमोट</button>
          <button style={{ background: '#1e40af', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>🏢 विज्ञापन</button>
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
          {['All Countries', 'India 🇮🇳', 'USA 🇺🇸', 'Brazil 🇧🇷'].map(c => (
            <button key={c} style={{ background: 'transparent', border: theme.border, borderRadius: '50px', padding: '10px 20px', color: theme.gold, whiteSpace: 'nowrap' }}>{c}</button>
          ))}
        </div>
      </header>

      {/* 2. मैप इंटरफेस */}
      <div style={{ height: '300px', background: 'rgba(255,255,255,0.02)', position: 'relative', borderBottom: theme.border, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#555' }}>[SERVER SLOT]: Map Interface Loading...</p>
        <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ background: theme.gold, border: 'none', padding: '10px 15px', borderRadius: '50%' }}>+</button>
          <button style={{ background: theme.gold, border: 'none', padding: '10px 15px', borderRadius: '50%' }}>-</button>
        </div>
        <button style={{ position: 'absolute', bottom: '20px', right: '20px', background: theme.gold, border: 'none', padding: '15px', borderRadius: '50%', fontSize: '20px' }}>⭐</button>
        <button style={{ position: 'absolute', bottom: '20px', right: '80px', background: '#fff', border: 'none', padding: '15px', borderRadius: '50%', fontSize: '20px' }}>🗺️</button>
      </div>

      {/* 3. ट्रेंडिंग पोस्ट्स */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: theme.gold, marginBottom: '15px', fontSize: '18px' }}>🔥 Trending Now</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          {[1,2,3].map(i => <div key={i} style={{ width: '100px', height: '100px', background: theme.cardBg, borderRadius: '15px', border: theme.border, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Post {i}</div>)}
        </div>
      </div>

      {/* 4. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px', zIndex: '100' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px' }}>🔍</button>
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', borderRadius: '50%', width: '50px', height: '50px', marginTop: '-35px' }}>+</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>👤</button>
      </nav>
    </div>
  );
};

export default ExplorePage;
