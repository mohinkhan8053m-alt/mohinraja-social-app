import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; 

const SettingsPage = () => {
  const navigate = useNavigate();
  // वाइट थीम के लिए कलर सेटअप
  const theme = { bg: '#ffffff', text: '#333', border: '1px solid #dbdbdb', cardBg: '#f9f9f9' };

  const handleToggle = (settingName, value) => {
    /* [SERVER_API_LINK_START] */
    console.log(`[SERVER_SLOT]: ${settingName} -> ${value}`);
    /* [SERVER_API_LINK_END] */
  };

  return (
    <div className="settings-page">
      <AdBanner />

      <header className="settings-header">
        <button onClick={() => navigate(-1)} className="back-btn">⬅️</button>
        <h2 style={{ marginLeft: '20px' }}>Settings & Preferences</h2>
      </header>

      <div className="settings-grid">
        <section className="settings-card">
          <h3>Privacy</h3>
          <div className="setting-row">
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => handleToggle('Private', e.target.checked)} />
          </div>
        </section>

        <section className="settings-card">
          <h3>AI & Voice</h3>
          <input type="text" placeholder="Search Language..." className="search-input" />
          <div className="setting-row">
            <span>Auto-Translate</span>
            <input type="checkbox" onChange={(e) => handleToggle('Translate', e.target.checked)} />
          </div>
        </section>

        <section className="settings-card">
          <h3>Monetization</h3>
          <button onClick={() => navigate('/wallet')} className="main-btn">View Balance</button>
          <button onClick={() => handleToggle('LinkBank', true)} className="sub-btn-green">Connect Bank/UPI</button>
        </section>
      </div>

      <nav className="bottom-nav">
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/settings')} style={{ color: '#0095f6' }}>⚙️</button>
      </nav>
    </div>
  );
};

export default SettingsPage;
