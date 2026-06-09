import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider';

const MasterAppPage = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', paddingBottom: '100px' }}>
      <AdBanner />

      {/* 1-5. प्रोफाइल सेक्शन (खुला-खुला) */}
      <header style={{ padding: '30px', borderBottom: theme.border, textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: `3px solid ${theme.gold}`, margin: '0 auto 20px', background: '#222' }}></div>
        <h2 style={{ fontSize: '28px', color: theme.gold }}>Mohin Raja</h2>
        <p style={{ marginBottom: '20px' }}>Painter & Plumber | Content Creator</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => console.log('Follow')} style={{ background: '#1e40af', padding: '10px 30px', borderRadius: '50px', border: 'none', color: '#fff' }}>Follow</button>
          <button onClick={() => setIsChatOpen(true)} style={{ background: theme.cardBg, border: theme.border, padding: '10px 30px', borderRadius: '50px', color: '#fff' }}>Message</button>
          <button onClick={() => console.log('Boost')} style={{ background: theme.gold, color: '#000', padding: '10px 20px', borderRadius: '50px', border: 'none' }}>🚀</button>
        </div>
        <button onClick={() => alert("Blocked!")} style={{ width: '100%', background: '#7f1d1d', padding: '10px', borderRadius: '15px', border: 'none', color: '#fff' }}>🚫 Block User</button>
      </header>

      {/* 6-13. मैसेंजर ओवरले (सभी 8 फीचर्स के साथ) */}
      {isChatOpen && (
        <div style={{ position: 'fixed', top: '10%', right: '5%', width: '90%', height: '70%', background: '#000', border: theme.border, borderRadius: '25px', padding: '20px', zIndex: 999 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ color: theme.gold }}>CHAT & CALL</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => navigate('/video-call')}>🎥</button>
              <button onClick={() => console.log('Audio')}>👁️‍🗨️</button>
              <button onClick={() => console.log('Gift')}>🎁</button>
            </div>
          </div>
          <div style={{ height: '50%', background: theme.cardBg, marginBottom: '20px', borderRadius: '15px' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" placeholder="Message..." style={{ background: '#222', padding: '15px', borderRadius: '10px', border: 'none', color: '#fff' }} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => console.log('Translate')} style={{ background: '#581c87', padding: '10px', borderRadius: '5px' }}>A⇄B</button>
              <button onClick={() => console.log('Send')} style={{ background: '#166534', padding: '10px', borderRadius: '5px' }}>Send</button>
            </div>
            <button onClick={() => console.log('Filter')} style={{ background: '#374151', padding: '10px', borderRadius: '5px' }}>✨ Apply AI Filters</button>
          </div>
        </div>
      )}

      {/* 14-22. बॉटम नेविगेशन और सर्वर फीचर्स */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '20px', zIndex: '100' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🔍</button>
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, borderRadius: '50%', width: '60px', height: '60px', marginTop: '-40px' }}>+</button>
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>👤</button>
      </nav>
    </div>
  );
};

export default MasterAppPage;
