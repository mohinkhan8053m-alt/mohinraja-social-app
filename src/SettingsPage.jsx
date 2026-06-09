import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  const handleToggle = (settingName, value) => {
    console.log(`[SERVER SLOT]: Updating ${settingName} to ${value}...`);
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', padding: '20px', fontFamily: 'serif' }}>
      {/* 1. हेडर */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: theme.border }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: theme.gold, fontSize: '24px', marginRight: '20px' }}>⬅️</button>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Settings & Preferences</h2>
      </header>

      {/* 2. सेटिंग्स सेक्शन (खुले-खुले) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* Privacy Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Privacy</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('PrivateAccount', e.target.checked)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Hide Online Status</span>
            <input type="checkbox" onChange={(e) => handleToggle('HideStatus', e.target.checked)} />
          </div>
        </section>

        {/* AI Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>AI & Language</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" defaultChecked onChange={(e) => handleToggle('AutoTranslate', e.target.checked)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>AI Filter</span>
            <select onChange={(e) => handleToggle('DefaultFilter', e.target.value)} style={{ background: '#222', color: '#fff', padding: '5px', borderRadius: '5px' }}>
              <option>Natural</option>
              <option>Cinematic</option>
              <option>Bright</option>
            </select>
          </div>
        </section>

        {/* Monetization Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Monetization</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Wallet</span>
            <button onClick={() => navigate('/wallet')} style={{ background: theme.gold, color: '#000', border: 'none', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>View Balance</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Bank/UPI</span>
            <button onClick={() => handleToggle('LinkBank', true)} style={{ background: '#166534', color: '#fff', border: 'none', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>Connect</button>
          </div>
        </section>

        {/* Notification Section */}
        <section style={{ background: theme.cardBg, padding: '20px', borderRadius: '20px', border: theme.border }}>
          <h3 style={{ color: theme.gold, marginBottom: '15px' }}>Notifications</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Push Notifications</span>
            <input type="checkbox" defaultChecked onChange={(e) => handleToggle('PushNotif', e.target.checked)} />
          </div>
        </section>

      </div>
    </div>
  );
};

export default SettingsPage;
