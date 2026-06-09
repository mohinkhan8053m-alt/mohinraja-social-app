import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  // सर्वर एक्शन के लिए मास्टर फंक्शन
  const handleToggle = (settingName, value) => {
    console.log(`[SERVER SLOT]: Updating ${settingName} to ${value}...`);
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', padding: '20px', fontFamily: 'serif' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: theme.border, paddingBottom: '20px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px', cursor: 'pointer' }}>⬅️</button>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: theme.gold, marginLeft: '20px' }}>Settings & Preferences</h2>
      </header>

      {/* 2. सेटिंग्स ग्रिड (बटन और चेकबॉक्स) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Privacy Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Privacy</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('PrivateAccount', e.target.checked)} style={{ transform: 'scale(1.5)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Hide Online Status</span>
            <input type="checkbox" onChange={(e) => handleToggle('HideStatus', e.target.checked)} style={{ transform: 'scale(1.5)' }} />
          </div>
        </section>

        {/* AI Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>AI & Language</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" defaultChecked onChange={(e) => handleToggle('AutoTranslate', e.target.checked)} style={{ transform: 'scale(1.5)' }} />
          </div>
        </section>

        {/* Monetization Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Monetization</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Wallet</span>
            <button onClick={() => navigate('/wallet')} style={{ background: theme.gold, color: '#000', border: 'none', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold' }}>View Balance</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span>Bank/UPI</span>
            <button onClick={() => handleToggle('LinkBank', true)} style={{ background: '#166534', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold' }}>Connect</button>
          </div>
        </section>
      </div>

      {/* बॉटम नेविगेशन (यहाँ ⚙️ सेटिंग बटन जोड़ दिया है) */}
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
