import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', paddingBottom: '100px' }}>
      
      {/* 1. हेडर (इसमें 5 फीचर्स हैं: Back, Title, VideoCall, Translate, Gift) */}
      <header style={{ padding: '20px', borderBottom: theme.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '20px' }}>⬅️</button>
        <h1 style={{ color: theme.gold, fontSize: '18px', margin: 0 }}>RangManch Chat</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => navigate('/video-call')} style={{ background: theme.gold, padding: '8px 15px', borderRadius: '20px', border: 'none', fontWeight: 'bold' }}>🎥 Call</button>
          <button onClick={() => alert("Server: Audio Translate Active")} style={{ background: '#222', border: theme.border, color: '#fff', padding: '8px' }}>👁️‍🗨️</button>
          <button onClick={() => alert("Server: Sending Gift...")} style={{ background: '#222', border: theme.border, color: '#fff', padding: '8px' }}>🎁</button>
        </div>
      </header>

      {/* 2. प्रीमियम टूलबार (3 फीचर्स: Location, AdBanner, PremiumLock) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px', borderBottom: theme.border }}>
        <button onClick={() => alert("Server: Sharing Location...")} style={{ background: 'none', border: 'none', color: '#fff' }}>📍 Location</button>
        <div style={{ fontSize: '10px', color: '#888' }}>[AD BANNER SLOT]</div>
      </div>

      {/* 3. चैट एरिया (4 फीचर्स: MessageBubble, Translate 'i', PremiumBanner, Upgrade) */}
      <main style={{ padding: '20px' }}>
        <div style={{ background: theme.cardBg, padding: '15px', borderRadius: '15px', border: theme.border, display: 'flex', justifyContent: 'space-between' }}>
          <p>नमस्ते! कैसे हैं आप?</p>
          <button onClick={() => alert("Server: Translating...")} style={{ background: '#333', border: 'none', borderRadius: '5px', padding: '2px 8px' }}>i</button>
        </div>
        
        <div style={{ marginTop: '20px', padding: '15px', background: 'linear-gradient(to right, #4c1d95, #b45309)', borderRadius: '15px', textAlign: 'center' }}>
          <p>🔒 Unlock AI Features</p>
          <button onClick={() => alert("Server: Opening Payment...")} style={{ background: '#fff', color: '#000', padding: '8px 20px', borderRadius: '20px', border: 'none', marginTop: '10px' }}>Upgrade Now</button>
        </div>
      </main>

      {/* 4. इनपुट एरिया (6 फीचर्स: AI-Filter, Gallery, Emoji, InputBox, Send, Navigation-Home/Explore/Profile) */}
      <div style={{ position: 'fixed', bottom: '0', width: '100%', padding: '15px', background: '#000', borderTop: theme.border, display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => alert("Server: AI Filter On")} style={{ background: 'none', border: 'none', color: theme.gold }}>✨</button>
        <button onClick={() => alert("Opening Gallery...")}>📸</button>
        <button onClick={() => alert("Opening Emoji...")}>😊</button>
        <input type="text" placeholder="Message..." style={{ flexGrow: 1, padding: '10px', borderRadius: '20px', background: theme.cardBg, border: theme.border, color: '#fff' }} />
        <button onClick={() => alert("Message Sent!")} style={{ background: theme.gold, border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Send</button>
      </div>

      {/* बॉटम नेविगेशन (3 नेविगेशन फीचर्स: Home, Explore, Profile) */}
      <nav style={{ position: 'fixed', bottom: '70px', width: '100%', display: 'flex', justifyContent: 'space-around', background: '#000', padding: '10px' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default MessengerPage;
