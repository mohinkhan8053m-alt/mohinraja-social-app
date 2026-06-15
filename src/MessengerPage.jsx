import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // यहाँ से सर्वर और पेमेंट की डिटेल्स आएंगी

const MessengerPage = () => {
  const navigate = useNavigate();
  const { serverUrl, stripeKey } = useApi(); // अब हर बटन सर्वर से बात कर सकता है

  // स्टाइल्स
  const featureStyle = { padding: '12px', fontSize: '12px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', textAlign: 'center' };
  const goldenStyle = { ...featureStyle, background: '#FFD700', fontWeight: 'bold', border: 'none' };
  const secureStyle = { ...featureStyle, background: '#ff4757', color: '#fff', fontWeight: 'bold' };

  // सर्वर पर रिक्वेस्ट भेजने का कॉमन फंक्शन
  const handleServerAction = (action) => {
    console.log(`Sending to ${serverUrl}: ${action}`);
    alert(`Action ${action} initiated via Server Hub!`);
    // यहाँ आप बाद में fetch(serverUrl + '/api/' + action) डाल सकते हैं
  };

  return (
    <Layout>
      <div style={{ width: '100%', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '2px solid #eee' }}>
          <div>
            <h3 style={{ margin: 0 }}>Chat: Moin Raja</h3>
            <span style={{ fontSize: '12px', color: '#666' }}>📡 Server: {serverUrl}</span>
          </div>
          <button onClick={() => navigate('/video-call-hub')} style={{ background: '#0095f6', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>📹 Video Call</button>
        </header>

        {/* विज्ञापन और रिवॉर्ड */}
        <button onClick={() => handleServerAction('WatchAd')} style={{ width: '100%', padding: '15px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '10px', marginBottom: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
          🎁 Watch Ad & Get 10 Coins
        </button>

        {/* 20 फीचर्स का महा-ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <button style={{...featureStyle, background: '#4CAF50', color: '#fff'}} onClick={() => handleServerAction('Translate')}>🤖 AI Translate</button>
          <button style={{...featureStyle, background: '#e1bee7'}} onClick={() => handleServerAction('AutoMod')}>🛡️ Auto-Mod</button>
          <button style={goldenStyle} onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button style={featureStyle} onClick={() => navigate('/premium-toggle')}>Premium Toggle</button>
          <button style={featureStyle} onClick={() => navigate('/get-analytics')}>Get Analytics</button>
          <button style={goldenStyle} onClick={() => handleServerAction('LocalAdControl')}>Local Ad Control</button>
          <button style={featureStyle} onClick={() => handleServerAction('MultiRegion')}>Multi-Region Setup</button>
          <button style={goldenStyle} onClick={() => handleServerAction('GlobalAdManager')}>Global Ad Manager</button>
          <button style={goldenStyle} onClick={() => navigate('/send-gift')}>Send Gift (30% Comm)</button>
          <button style={featureStyle} onClick={() => handleServerAction('GirlFilter')}>⚡ Girl Filter</button>
          <button style={featureStyle} onClick={() => handleServerAction('SyncData')}>Sync Data Hub</button>
          <button style={featureStyle} onClick={() => handleServerAction('ServerSettings')}>Server Hub Settings</button>
          <button style={goldenStyle} onClick={() => handleServerAction('ForceAd')}>Force Ad Trigger</button>
          <button style={featureStyle} onClick={() => navigate('/live-stats')}>Live Stats Board</button>
          <button style={featureStyle} onClick={() => navigate('/profile-edit')}>Add User Name</button>
          <button style={featureStyle} onClick={() => navigate('/profile-edit')}>Add Profile Link</button>
          <button style={featureStyle} onClick={() => handleServerAction('RegionSelector')}>Region Selector</button>
          <button style={featureStyle} onClick={() => navigate('/wallet')}>Pay Now Gateway</button>
          <button style={secureStyle} onClick={() => handleServerAction('BlockUser')}>Block User</button>
          <button style={secureStyle} onClick={() => handleServerAction('ReportAbuse')}>Report Abuse</button>
        </div>

        {/* लोकेशन */}
        <button onClick={() => handleServerAction('ShareMap')} style={{ marginTop: '25px', width: '100%', padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>📍 Share Map Location</button>
      </div>
    </Layout>
  );
};

export default MessengerPage;
