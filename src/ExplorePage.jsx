import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider';

const ExplorePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', paddingBottom: '100px', fontFamily: 'serif' }}>
      <AdBanner />

      {/* 1. सर्च और मुख्य एक्शन (Top Header) */}
      <div style={{ padding: '20px' }}>
        <input type="text" placeholder="🔍 Search Global Friends..." style={{ width: '100%', background: theme.cardBg, border: theme.border, padding: '15px', borderRadius: '15px', color: '#fff', marginBottom: '15px' }} />
        
        {/* बटन्स का ग्रिड - यहाँ अलग-अलग बटन्स सजे हुए हैं */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <button onClick={() => alert('🚀 Promoting...')} style={{ background: '#166534', border: 'none', padding: '12px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>🚀 प्रमोट</button>
          <button onClick={() => alert('🏢 Ad Manager...')} style={{ background: '#1e40af', border: 'none', padding: '12px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>🏢 विज्ञापन</button>
          <button style={{ background: theme.cardBg, border: theme.border, color: theme.gold, padding: '12px', borderRadius: '10px' }}>🇮🇳 India</button>
          <button style={{ background: theme.cardBg, border: theme.border, color: theme.gold, padding: '12px', borderRadius: '10px' }}>🇺🇸 USA</button>
        </div>
      </div>

      {/* 2. मैप इंटरफेस (अलग कार्ड में) */}
      <div style={{ margin: '20px', height: '200px', background: theme.cardBg, border: theme.border, borderRadius: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: theme.gold }}>[SERVER SLOT]: Live Global Map</p>
        <div style={{ position: 'absolute', right: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ background: theme.gold, padding: '8px 12px', borderRadius: '50%' }}>+</button>
          <button style={{ background: theme.gold, padding: '8px 12px', borderRadius: '50%' }}>-</button>
          <button style={{ background: theme.gold, padding: '8px 12px', borderRadius: '50%' }}>⭐</button>
          <button style={{ background: '#fff', padding: '8px 12px', borderRadius: '50%' }}>🗺️</button>
        </div>
      </div>

      {/* 3. ट्रेंडिंग पोस्ट्स (Grid layout) */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ color: theme.gold, marginBottom: '15px' }}>🔥 Trending Now</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[1,2,3].map(i => <div key={i} style={{ height: '100px', background: theme.cardBg, border: theme.border, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Post {i}</div>)}
        </div>
      </div>

      {/* 4. बॉटम नेविगेशन - प्रीमियम बटन्स */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '20px 0', zIndex: 1000 }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }}>🏠</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }}>💬</button>
        
        {/* वीडियो कॉल का बड़ा प्रीमियम बटन */}
        <button onClick={() => navigate('/video-call')} style={{ background: theme.gold, border: 'none', borderRadius: '50%', width: '60px', height: '60px', marginTop: '-35px', fontSize: '28px', boxShadow: '0 0 15px #fbbf24' }}>🎥</button>
        
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '22px' }}>🔍</button>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }}>⚙️</button>
      </nav>
    </div>
  );
};

export default ExplorePage;
                   
