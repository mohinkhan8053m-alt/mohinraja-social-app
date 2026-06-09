import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = { gold: '#fbbf24', border: '1px solid #fbbf24', bg: '#000', text: '#fff' };

  // [SERVER SLOT]: यहाँ से सर्वर से डेटा आएगा
  const handleServerAction = (action) => {
    console.log(`[SERVER SLOT]: Connecting to Supabase for ${action}...`);
    alert(`${action} सर्विस सर्वर से जुड़ रही है!`);
  };

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* 1. टॉप हेडर (5 फीचर्स) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: theme.border }}>
        <h2 style={{ color: theme.gold, margin: 0 }} onClick={() => navigate('/home')}>RangManch</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ background: '#111', border: theme.border, color: theme.gold, padding: '5px 10px' }} onClick={() => handleServerAction('Rewards')}>🎁</button>
          <button style={{ background: '#111', border: theme.border, color: theme.gold, padding: '5px 10px' }} onClick={() => handleServerAction('Translate')}>👁️‍🗨️</button>
          <button style={{ background: '#111', border: theme.border, color: theme.gold, padding: '5px 10px' }} onClick={() => alert('Notifications Empty')}>🔔</button>
          <button style={{ background: '#111', border: theme.border, color: theme.gold, padding: '5px 10px' }} onClick={() => navigate('/messenger')}>✉️</button>
        </div>
      </header>

      {/* 2. स्टोरीज (5 फीचर्स - अब अलग-अलग दिखेंगे) */}
      <div style={{ display: 'flex', gap: '15px', padding: '15px', overflowX: 'auto' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ width: '60px', height: '60px', borderRadius: '50%', border: theme.border }} onClick={() => alert(`Story ${i} Open`)}></div>
        ))}
      </div>

      {/* 3. पोस्ट फीड (5 फीचर्स - बूस्टिंग और एक्शन) */}
      <div style={{ border: theme.border, margin: '15px', padding: '10px', borderRadius: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ color: theme.gold, fontSize: '10px' }}>SPONSORED</span>
          <button style={{ background: theme.gold, border: 'none', padding: '5px', borderRadius: '5px' }} onClick={() => handleServerAction('Boost')}>🚀 Boost</button>
        </div>
        <div style={{ height: '250px', background: '#111', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[POST CONTENT]</div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
          <button onClick={() => handleServerAction('Like')}>❤️</button>
          <button onClick={() => handleServerAction('Comment')}>💬</button>
          <button onClick={() => handleServerAction('Share')}>✈️</button>
          <button onClick={() => handleServerAction('Save')}>🔖</button>
        </div>
      </div>

      {/* 4. बॉटम नेविगेशन (3 फीचर्स - जो तुरंत चलेंगे) */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default HomePage;
