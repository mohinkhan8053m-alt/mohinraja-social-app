import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', fontFamily: 'serif', paddingBottom: '90px' }}>
      
      {/* 1. टॉप हेडर - वीडियो कॉल का बड़ा बटन यहाँ है */}
      <header style={{ padding: '20px', borderBottom: theme.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px' }}>⬅️</button>
        <h1 style={{ color: theme.gold, fontSize: '20px' }}>RangManch Chat</h1>
        
        {/* वीडियो कॉल का बड़ा बटन जो एकदम अलग और साफ दिखेगा */}
        <button onClick={() => navigate('/video-call')} style={{ 
          background: theme.gold, color: '#000', border: 'none', padding: '10px 20px', borderRadius: '50px', 
          fontWeight: 'bold', fontSize: '14px', boxShadow: '0 0 10px #fbbf24' 
        }}>🎥 Video Call</button>
      </header>

      {/* 2. प्रीमियम टूलबार (गिफ्ट, लोकेशन, ट्रांसलेट - सब अलग-अलग) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px', borderBottom: theme.border }}>
        <button onClick={() => alert('Translate')} style={{ background: 'none', border: 'none', color: '#fff' }}>👁️‍🗨️ Translate</button>
        <button onClick={() => alert('Gifts')} style={{ background: 'none', border: 'none', color: '#fff' }}>🎁 Gift</button>
        <button onClick={() => alert('Location')} style={{ background: 'none', border: 'none', color: '#fff' }}>📍 Location</button>
      </div>

      {/* 3. चैट एरिया */}
      <main style={{ padding: '20px' }}>
        <div style={{ background: theme.cardBg, padding: '20px', borderRadius: '15px', border: theme.border }}>
          <p>नमस्ते! कैसे हैं आप?</p>
        </div>
        
        {/* प्रीमियम अपग्रेड बैनर */}
        <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(to right, #4c1d95, #b45309)', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ marginBottom: '10px' }}>🔒 Unlimited Chat & AI</p>
          <button style={{ background: '#fff', color: '#b45309', padding: '10px 25px', borderRadius: '50px', border: 'none', fontWeight: 'bold' }}>Upgrade Now</button>
        </div>
      </main>

      {/* 4. इनपुट एरिया */}
      <div style={{ position: 'fixed', bottom: '0', width: '100%', padding: '15px', background: '#000', borderTop: theme.border, display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px' }}>✨</button>
        <input type="text" placeholder="Message..." style={{ flexGrow: 1, padding: '12px', borderRadius: '20px', background: theme.cardBg, border: theme.border, color: '#fff' }} />
        <button onClick={() => alert('Sending...')} style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold' }}>Send</button>
      </div>
    </div>
  );
};

export default MessengerPage;
