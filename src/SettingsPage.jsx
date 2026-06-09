import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; 

const SettingsPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  const handleToggle = (settingName, value) => {
    console.log(`[SERVER SLOT]: ${settingName} -> ${value}`);
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', padding: '20px', fontFamily: 'serif', paddingBottom: '80px' }}>
      
      {/* 1. एड बैनर (फीचर 1) */}
      <AdBanner />

      {/* 2. हेडर (फीचर 10) */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: theme.border, paddingBottom: '20px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px', cursor: 'pointer' }}>⬅️</button>
        <h2 style={{ fontSize: '20px', color: theme.gold, marginLeft: '20px' }}>Settings & Preferences</h2>
      </header>

      {/* 3. सेटिंग्स ग्रिड (फीचर 6, 7, 8 - अलग-अलग बटन्स) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* प्राइवेसी सेक्शन */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '10px' }}>Privacy</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('Private', e.target.checked)} style={{ transform: 'scale(1.5)' }} />
          </div>
        </section>

        {/* AI/भाषा सेक्शन */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '10px' }}>AI & Voice</h3>
          <input type="text" placeholder="Search Language..." style={{ width: '100%', padding: '10px', background: '#222', border: theme.border, borderRadius: '10px', color: '#fff', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" onChange={(e) => handleToggle('Translate', e.target.checked)} style={{ transform: 'scale(1.5)' }} />
          </div>
        </section>

        {/* मोनेटाइजेशन सेक्शन */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '10px' }}>Monetization</h3>
          <button onClick={() => navigate('/wallet')} style={{ width: '100%', background: theme.gold, color: '#000', padding: '12px', borderRadius: '15px', fontWeight: 'bold', border: 'none', marginBottom: '10px' }}>View Balance</button>
          <button onClick={() => handleToggle('LinkBank', true)} style={{ width: '100%', background: '#166534', color: '#fff', padding: '12px', borderRadius: '15px', fontWeight: 'bold', border: 'none' }}>Connect Bank/UPI</button>
        </section>
      </div>

      {/* 4. बॉटम नेविगेशन - सेटिंग का बटन यहाँ हर पेज पर दिखेगा (फीचर 9) */}
      <nav style={{ position: 'fixed', bottom: '0', left: 0, width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🔍</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px' }}>⚙️</button>
      </nav>
    </div>
  );
};

export default SettingsPage;
