import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();

  // स्टाइलिंग
  const featureStyle = { padding: '12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', textAlign: 'center' };
  const goldenStyle = { ...featureStyle, background: '#FFD700', fontWeight: 'bold', border: 'none' };
  const secureStyle = { ...featureStyle, background: '#ff4757', color: '#fff', fontWeight: 'bold' };

  return (
    <Layout>
      <div style={{ width: '100%', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '2px solid #eee' }}>
          <div>
            <h3 style={{ margin: 0 }}>Chat: Moin Raja</h3>
            <span style={{ fontSize: '12px', color: '#666' }}>🌍 Global Hub Active</span>
          </div>
          <button onClick={() => navigate('/video-call-hub')} style={{ background: '#0095f6', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            📹 Video Call
          </button>
        </header>

        {/* विज्ञापन स्लॉट */}
        <div style={{ margin: '15px 0', height: '60px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px dashed #999', fontSize: '12px' }}>
          [AdSense/Promotion Banner Space]
        </div>

        {/* रिवॉर्ड बटन */}
        <button onClick={() => alert("Ad playing... +10 Coins added!")} style={{ width: '100%', padding: '15px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '10px', marginBottom: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
          🎁 Watch Ad & Get 10 Coins
        </button>

        {/* महा-ग्रिड (आपके सारे फीचर्स वापस) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <button style={{...featureStyle, background: '#4CAF50', color: '#fff'}} onClick={() => navigate('/ai-translate')}>🤖 AI Chat Translate</button>
          <button style={{...featureStyle, background: '#e1bee7'}} onClick={() => navigate('/auto-mod')}>🛡️ Auto-Mod Engine</button>
          <button style={goldenStyle} onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button style={featureStyle} onClick={() => navigate('/premium-toggle')}>Premium Toggle</button>
          <button style={featureStyle} onClick={() => navigate('/get-analytics')}>Get Analytics</button>
          <button style={goldenStyle} onClick={() => navigate('/local-ad-control')}>Local Ad Control</button>
          <button style={featureStyle} onClick={() => navigate('/multi-region')}>Multi-Region Setup</button>
          <button style={goldenStyle} onClick={() => navigate('/global-ad-manager')}>Global Ad Manager</button>
          <button style={goldenStyle} onClick={() => navigate('/send-gift')}>Send Gift (30% Comm)</button>
          <button style={featureStyle} onClick={() => navigate('/girl-filter')}>⚡ Girl Filter</button>
          <button style={featureStyle} onClick={() => navigate('/sync-data')}>Sync Data Hub</button>
          <button style={featureStyle} onClick={() => navigate('/server-settings')}>Server Hub Settings</button>
          <button style={goldenStyle} onClick={() => navigate('/force-ad')}>Force Ad Trigger</button>
          <button style={featureStyle} onClick={() => navigate('/live-stats')}>Live Stats Board</button>
          <button style={featureStyle} onClick={() => navigate('/profile-edit')}>Add User Name</button>
          <button style={featureStyle} onClick={() => navigate('/profile-edit')}>Add Profile Link</button>
          <button style={featureStyle} onClick={() => navigate('/region-selector')}>Region Selector</button>
          <button style={featureStyle} onClick={() => navigate('/wallet')}>Pay Now Gateway</button>
          <button style={secureStyle} onClick={() => navigate('/block-user')}>Block User</button>
          <button style={secureStyle} onClick={() => navigate('/report-abuse')}>Report Abuse</button>
        </div>

        {/* लोकेशन */}
        <button onClick={() => alert('Sending Map...')} style={{ marginTop: '25px', width: '100%', padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>📍 Share Map Location</button>
      </div>
    </Layout>
  );
};

export default MessengerPage;
