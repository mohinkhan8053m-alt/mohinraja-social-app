import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [autoTranslate, setAutoTranslate] = useState(false);

  // 17 फीचर्स की लिस्ट (14 पुराने + 3 नए)
  const features = [
    { name: "Privacy", action: () => alert("Privacy Settings Opened") },
    { name: "Account Details", action: () => navigate('/profile') },
    { name: "Wallet Balance", action: () => navigate('/wallet') },
    { name: "Bank/UPI Setup", action: () => navigate('/bank-details') },
    { name: "Premium Upgrade", action: () => navigate('/premium') },
    { name: "Enterprise Partnership", action: () => navigate('/partnerships') }, // नया 1
    { name: "Promote App", action: () => navigate('/promote') }, // नया 2
    { name: "Dark Mode", action: () => console.log('Dark Mode Toggled') }, // नया 3
    { name: "Live Notifications", action: () => console.log('Notifications On') },
    { name: "Data Backup", action: () => console.log('Backup Started') },
    { name: "Cache Clear", action: () => alert("Cache Cleared!") },
    { name: "Version Info", action: () => alert("v2.0.6 Global") },
    { name: "Help & Support", action: () => navigate('/support') },
    { name: "Report Bug", action: () => navigate('/report') },
    { name: "Terms & Policy", action: () => navigate('/terms') },
    { name: "Logout", action: () => alert("Logging out...") },
    { name: "Delete Account", action: () => alert("Are you sure?") }
  ];

  return (
    <Layout>
      <div style={{ paddingBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>⚙️ System Settings</h2>

        {/* 1. मल्टी-लैंग्वेज सिस्टम (जिंदा) */}
        <section style={sectionStyle}>
          <h3>🌍 Multi-Language System</h3>
          <select style={inputStyle} onChange={(e) => alert(`Language switched to: ${e.target.value}`)}>
            <option value="en">English (Global)</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="ar">العربية (Arabic)</option>
          </select>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" checked={autoTranslate} onChange={(e) => setAutoTranslate(e.target.checked)} />
          </div>
        </section>

        {/* 2. सभी 17 फीचर्स (सब जिंदा) */}
        <section style={sectionStyle}>
          <h3>Account Controls</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {features.map((f) => (
              <button key={f.name} onClick={f.action} style={btnStyle}>{f.name}</button>
            ))}
          </div>
        </section>

        {/* 3. सर्वर स्लॉट (यहाँ सर्वर का काम होगा) */}
        <div style={{ marginTop: '20px', padding: '20px', border: '2px dashed #aaa', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#666' }}>📡 <b>Server Hub:</b> Sync profile preferences to cloud.</p>
          <button onClick={() => alert('Syncing to Cloud Server...')} style={syncBtnStyle}>Sync Settings</button>
        </div>
      </div>
    </Layout>
  );
};

// स्टाइल्स
const sectionStyle = { border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px', background: '#fff' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' };
const btnStyle = { padding: '10px', borderRadius: '8px', border: '1px solid #eee', background: '#f9f9f9', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' };
const syncBtnStyle = { padding: '10px 20px', background: '#333', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };

export default SettingsPage;
