import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; // आपका मास्टर लेआउट

const SettingsPage = () => {
  const navigate = useNavigate();

  // प्रोफेशनल बटन स्टाइल
  const btnStyle = {
    padding: '12px 20px', margin: '8px 0', width: '100%', borderRadius: '10px',
    border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer',
    fontSize: '15px', fontWeight: 'bold', textAlign: 'left'
  };

  return (
    <Layout>
      <div style={{ paddingBottom: '20px' }}>
        
        {/* 1. प्राइवेसी (Direct Toggle) */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
          <h3>Privacy</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Private Account</span>
            <input type="checkbox" onChange={(e) => console.log('Privacy:', e.target.checked)} />
          </div>
        </section>

        {/* 2. AI & Voice (Direct Input) */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
          <h3>AI & Voice</h3>
          <input type="text" placeholder="Search Language..." style={{ width: '90%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Auto-Translate</span>
            <input type="checkbox" onChange={(e) => console.log('Translate:', e.target.checked)} />
          </div>
        </section>

        {/* 3. मोनेटाइजेशन (Direct Navigation) */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
          <h3>Account & Monetization</h3>
          <button style={btnStyle} onClick={() => navigate('/wallet')}>📊 View Balance</button>
          <button style={btnStyle} onClick={() => navigate('/bank-details')}>💳 Connect Bank/UPI</button>
          <button style={{ ...btnStyle, backgroundColor: '#fbbf24' }} onClick={() => navigate('/premium')}>⭐ Upgrade to Premium</button>
        </section>

        {/* 4. Advanced Controls */}
        <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
          <h3>Advanced Controls</h3>
          <button style={btnStyle} onClick={() => console.log('Dark Mode Toggled')}>🌙 Toggle Dark Mode</button>
          <button style={btnStyle} onClick={() => console.log('Notifications Toggled')}>🔔 Live Notifications</button>
          <button style={btnStyle} onClick={() => console.log('Backup Initiated')}>💾 Data Backup</button>
        </section>

        {/* [SERVER SLOT]: यहाँ सर्वर का सारा डेटा लिंक होगा */}
        <div style={{ marginTop: '20px', padding: '20px', border: '2px dashed #aaa', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#666' }}>📡 <b>Server Hub:</b> Sync your cloud profile and preferences.</p>
          <button onClick={() => console.log('Syncing all settings...')} style={{ padding: '10px 20px', background: '#333', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Sync Settings to Server</button>
        </div>

      </div>
    </Layout>
  );
};

export default SettingsPage;
