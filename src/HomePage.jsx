import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', paddingBottom: '90px' }}>
      
      {/* 1. प्रीमियम टॉप बार (3 फीचर्स: Rewards, AI, Messenger) */}
      <header style={{ padding: '15px 20px', borderBottom: theme.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: theme.gold, fontSize: '24px', margin: 0 }}>RANG MANCH</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/rewards')} style={{ background: 'transparent', border: theme.border, color: theme.gold, padding: '5px 12px', borderRadius: '20px' }}>🎁 Rewards</button>
          <button onClick={() => alert("AI Translation Active")} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>👁️‍🗨️</button>
          <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>✉️</button>
        </div>
      </header>

      {/* 2. स्टोरीज सेक्शन (5 फीचर्स: 5 गोल स्टोरीज बटन) */}
      <div style={{ display: 'flex', gap: '15px', padding: '20px', overflowX: 'auto', borderBottom: theme.border }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ width: '65px', height: '65px', borderRadius: '50%', border: `2px solid ${theme.gold}`, flexShrink: 0, cursor: 'pointer' }} />
        ))}
      </div>

      {/* 3. पोस्ट फीड (4 फीचर्स: Boost, Like, Comment, Share) */}
      <main style={{ padding: '20px' }}>
        <div style={{ background: theme.cardBg, borderRadius: '20px', padding: '20px', border: theme.border }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span style={{ color: theme.gold, fontSize: '12px', letterSpacing: '1px' }}>SPONSORED</span>
            <button onClick={() => alert("Boost Payment")} style={{ background: '#b45309', border: 'none', borderRadius: '5px', padding: '5px 15px', color: '#fff' }}>🚀 Boost</button>
          </div>
          
          <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #444', borderRadius: '10px' }}>
            [SERVER SLOT]: Post Content
          </div>

          <div style={{ display: 'flex', gap: '30px', marginTop: '20px', fontSize: '24px' }}>
            <button onClick={() => alert("Liked!")}>❤️</button>
            <button onClick={() => navigate('/comments')}>💬</button>
            <button onClick={() => alert("Shared!")}>✈️</button>
          </div>
        </div>
      </main>

      {/* 4. बॉटम नेविगेशन (5 फीचर्स: Home, Explore, Add, Messenger, Profile) */}
      <nav style={{ 
        position: 'fixed', bottom: '0', width: '100%', background: '#000', 
        borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px 0', zIndex: 1000 
      }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '26px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>🔍</button>
        
        {/* गोल्डन प्लस बटन */}
        <button onClick={() => alert("Add Post")} style={{ 
          background: `linear-gradient(to right, ${theme.gold}, #b45309)`, borderRadius: '50%', 
          width: '55px', height: '55px', marginTop: '-30px', fontSize: '30px', border: 'none', color: '#000' 
        }}>+</button>
        
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '26px' }}>👤</button>
      </nav>
    </div>
  );
};

export default HomePage;
