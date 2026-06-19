import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataServer } from './DataServer.js'; // मास्टर डेटा सर्वर

const SettingsPage = () => {
  const navigate = useNavigate();
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [serverStatus, setServerStatus] = useState('Connecting...');

  useEffect(() => {
    // सर्वर से स्टेटस चेक करें
    DataServer.checkStatus().then(status => setServerStatus(status));
  }, []);

  const features = [
    { name: "🔒 Privacy", path: '/privacy' }, { name: "👤 Account", path: '/profile' },
    { name: "💰 Wallet", path: '/wallet' }, { name: "🏦 Bank Setup", path: '/bank-details' },
    { name: "💎 Premium", path: '/premium' }, { name: "🤝 Partnership", path: '/partnerships' },
    { name: "🚀 Promote", path: '/promote' }, { name: "🌙 Dark Mode", action: () => alert('Dark Mode Toggled') },
    { name: "🔔 Live Alerts", path: '/notifications' }, { name: "📦 Data Backup", action: () => alert('Backup Started') },
    { name: "🧹 Clear Cache", action: () => alert("Cache Cleared!") }, { name: "ℹ️ Version v2.0", action: () => alert("Global Release") },
    { name: "🆘 Support", path: '/support' }, { name: "🐞 Report Bug", path: '/report' },
    { name: "📜 Terms/Policy", path: '/terms' }, { name: "🚪 Logout", action: () => alert("Logging out...") },
    { name: "🗑️ Delete Account", action: () => alert("Are you sure?") }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', background: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>⚙️ सिस्टम सेटिंग्स</h2>

      {/* Language Section */}
      <section style={sectionStyle}>
        <h3>🌍 भाषा (Language)</h3>
        <select style={inputStyle}>
          <option value="en">English (Global)</option>
          <option value="hi">हिन्दी (Hindi)</option>
        </select>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', alignItems: 'center' }}>
          <span>ऑटो-ट्रांसलेट</span>
          <input type="checkbox" checked={autoTranslate} onChange={() => setAutoTranslate(!autoTranslate)} />
        </div>
      </section>

      {/* Features Grid */}
      <section style={sectionStyle}>
        <h3>अकाउंट कंट्रोल्स</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {features.map((f, i) => (
            <button key={i} onClick={() => f.path ? navigate(f.path) : f.action()} style={btnStyle}>
              {f.name}
            </button>
          ))}
        </div>
      </section>

      {/* Server Hub */}
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '15px', textAlign: 'center', background: '#fff' }}>
        <p style={{ fontSize: '11px', color: '#666' }}>📡 <b>Server Hub Status:</b> {serverStatus}</p>
        <button onClick={() => DataServer.syncCloud()} style={syncBtnStyle}>Sync Data to Cloud</button>
      </div>
    </div>
  );
};

// Styles
const sectionStyle = { border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px', background: '#fff' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '5px' };
const btnStyle = { padding: '10px', borderRadius: '8px', border: 'none', background: '#f0f0f0', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' };
const syncBtnStyle = { padding: '10px 20px', background: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' };

export default SettingsPage;
