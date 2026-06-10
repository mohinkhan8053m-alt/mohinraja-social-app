import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  // प्रोफेशनल बटन स्टाइल
  const btnStyle = {
    padding: '12px 20px',
    margin: '8px 0',
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'left'
  };

  const handleToggle = (setting) => alert(`${setting} status updated!`);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      {/* 1. हेडर */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button style={{ ...btnStyle, width: '60px' }} onClick={() => navigate(-1)}>⬅️</button>
        <h2 style={{ marginLeft: '20px' }}>Settings & Preferences</h2>
      </header>

      {/* 2. सेटिंग्स ग्रिड */}
      <div style={{ display: 'grid', gap: '15px' }}>
        
        {/* प्राइवेसी */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px' }}>
          <h3>Privacy</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('Private', e.target.checked)} />
          </div>
        </section>

        {/* AI और वॉइस (प्रीमियम फीचर्स के साथ) */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px' }}>
          <h3>AI & Voice</h3>
          <input type="text" placeholder="Search Language..." style={{ width: '90%', padding: '10px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" onChange={(e) => handleToggle('Translate', e.target.checked)} />
          </div>
        </section>

        {/* मोनेटाइजेशन और प्रीमियम */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px' }}>
          <h3>Account & Monetization</h3>
          <button style={btnStyle} onClick={() => navigate('/wallet')}>View Balance</button>
          <button style={btnStyle} onClick={() => handleToggle('Bank', true)}>Connect Bank/UPI</button>
          <button style={{ ...btnStyle, backgroundColor: '#fbbf24' }} onClick={() => handleToggle('GoPremium', true)}>Upgrade to Premium</button>
        </section>

        {/* नए जोड़े गए प्रीमियम फीचर्स */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px' }}>
          <h3>Advanced Controls</h3>
          <button style={btnStyle} onClick={() => handleToggle('DarkMode', true)}>Toggle Dark Mode</button>
          <button style={btnStyle} onClick={() => handleToggle('LiveNotif', true)}>Live Notifications</button>
          <button style={btnStyle} onClick={() => handleToggle('Backup', true)}>Data Backup</button>
        </section>
      </div>

      {/* 3. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/settings')} style={{ color: '#0095f6' }}>⚙️</button>
      </nav>

      {/* [SERVER SLOT]: अपना डेटा यहाँ रेंडर करें */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default SettingsPage;
