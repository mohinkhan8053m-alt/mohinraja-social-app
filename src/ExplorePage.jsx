import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider';

const ExplorePage = () => {
  const navigate = useNavigate();
  // क्लासिक प्रीमियम थीम (गोल्डन और ब्लैक)
  const theme = { 
    bg: '#000', 
    gold: '#fbbf24', 
    border: '1px solid #fbbf24', 
    cardBg: '#111',
    btnStyle: {
      background: 'transparent',
      border: '1px solid #fbbf24',
      color: '#fbbf24',
      padding: '12px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: '0.3s'
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', paddingBottom: '100px', fontFamily: 'serif' }}>
      <AdBanner />

      {/* 1. सर्च बार */}
      <div style={{ padding: '20px' }}>
        <input type="text" placeholder="🔍 Search Global Friends..." style={{ width: '100%', background: theme.cardBg, border: theme.border, padding: '15px', borderRadius: '15px', color: '#fff' }} />
      </div>

      {/* 2. प्रीमियम बटन्स ग्रिड (18 फीचर यहाँ) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '0 20px' }}>
        <button onClick={() => alert('Promoting...')} style={{ ...theme.btnStyle, background: '#166534', color: '#fff' }}>🚀 प्रमोट</button>
        <button onClick={() => alert('Ads Manager...')} style={{ ...theme.btnStyle, background: '#1e40af', color: '#fff' }}>🏢 विज्ञापन</button>
        <button style={theme.btnStyle}>🇮🇳 India</button>
        <button style={theme.btnStyle}>🇺🇸 USA</button>
        <button style={theme.btnStyle}>🇧🇷 Brazil</button>
        <button style={theme.btnStyle}>🌍 Global</button>
      </div>

      {/* 3. मैप इंटरफेस */}
      <div style={{ margin: '20px', height: '200px', background: theme.cardBg, border: theme.border, borderRadius: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: theme.gold }}>[SERVER SLOT]: Live Global Map</p>
        <div style={{ position: 'absolute', right: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ background: theme.gold, border: 'none', padding: '8px 12px', borderRadius: '50%' }}>+</button>
          <button style={{ background: theme.gold, border: 'none', padding: '8px 12px', borderRadius: '50%' }}>-</button>
          <button style={{ background: theme.gold, border: 'none', padding: '8px 12px', borderRadius: '50%' }}>⭐</button>
          <button style={{ background: '#fff', border: 'none', padding: '8px 12px', borderRadius: '50%' }}>🗺️</button>
        </div>
      </div>

      {/* 4. ट्रेंडिंग पोस्ट्स */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: theme.gold, marginBottom: '15px' }}>🔥 Trending Now</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[1,2,3].map(i => <div key={i} style={{ height: '100px', background: theme.cardBg, border: theme.border, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Post {i}</div>)}
        </div>
      </div>

      {/* 5. बॉटम नेविगेशन (5 फीचर्स) */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '20px 0', zIndex: 1000 }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/video-call')} style={{ background: theme.gold, border: 'none', borderRadius: '50%', width: '60px', height: '60px', marginTop: '-35px', fontSize: '28px', boxShadow: '0 0 15px #fbbf24' }}>🎥</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px' }}>🔍</button>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>⚙️</button>
      </nav>
    </div>
  );
};

export default ExplorePage;
