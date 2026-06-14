import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [showCallMenu, setShowCallMenu] = useState(false);

  // जबरदस्ती विज्ञापन (Rewarded Ad) वाला फीचर
  const triggerRewardedAd = () => {
    const watch = window.confirm("Watch 30s Ad to get 10 FREE Coins?");
    if (watch) {
      alert("Ad playing... +10 Coins added to your balance!");
    }
  };

  const featureButtonStyle = { padding: '15px', fontSize: '14px', borderRadius: '10px', border: '1px solid #ddd', cursor: 'pointer', background: '#fff' };
  const goldenButtonStyle = { ...featureButtonStyle, background: '#FFD700', fontWeight: 'bold', border: 'none' };
  const secureButtonStyle = { ...featureButtonStyle, background: '#ff4757', color: '#fff', fontWeight: 'bold' };

  return (
    <Layout>
      <div style={{ width: '100%', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
        
        {/* 1. हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '2px solid #eee' }}>
          <div>
            <h3 style={{ margin: 0 }}>Chat: Moin Raja</h3>
            <span style={{ fontSize: '12px', color: '#666' }}>🌍 Global Hub Active</span>
          </div>
          <button onClick={() => setShowCallMenu(!showCallMenu)} style={{ background: '#0095f6', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
            📹 Video Call
          </button>
        </header>

        {/* 2. वीडियो कॉल के दौरान विज्ञापन स्लॉट (Banner Slot) */}
        <div style={{ margin: '15px 0', height: '60px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px dashed #999' }}>
          [AdSense/Promotion Banner Space]
        </div>

        {/* 3. जबरदस्ती कॉइन रिवॉर्ड पॉपअप बटन */}
        <button onClick={triggerRewardedAd} style={{ width: '100%', padding: '15px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '10px', marginBottom: '15px', fontWeight: 'bold' }}>
          🎁 Watch Ad & Get 10 Coins
        </button>

        {/* 4. मुख्य फीचर्स का महा-ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          <button style={{...featureButtonStyle, background: '#4CAF50', color: '#fff'}} onClick={() => alert('AI Translation ON')}>🤖 AI Chat Translate</button>
          <button style={{...featureButtonStyle, background: '#e1bee7'}} onClick={() => alert('Auto-Mod Active')}>🛡️ Auto-Mod Engine</button>
          <button style={goldenButtonStyle} onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button style={featureButtonStyle}>Premium Toggle</button>
          <button style={featureButtonStyle}>Get Analytics</button>
          <button style={goldenButtonStyle}>Local Ad Control</button>
          <button style={featureButtonStyle}>Multi-Region Setup</button>
          <button style={goldenButtonStyle}>Global Ad Manager</button>
          <button style={goldenButtonStyle}>Send Gift (30% Comm)</button>
          <button style={featureButtonStyle}>⚡ Girl Filter</button>
          <button style={featureButtonStyle}>Sync Data Hub</button>
          <button style={featureButtonStyle}>Server Hub Settings</button>
          <button style={goldenButtonStyle}>Force Ad Trigger</button>
          <button style={featureButtonStyle}>Live Stats Board</button>
          <button style={featureButtonStyle}>Add User Name</button>
          <button style={featureButtonStyle}>Add Profile Link</button>
          <button style={featureButtonStyle}>Region Selector</button>
          <button style={featureButtonStyle}>Pay Now Gateway</button>
          <button style={secureButtonStyle}>Block User</button>
          <button style={secureButtonStyle}>Report Abuse</button>
        </div>

        {/* 5. लोकेशन */}
        <div style={{ marginTop: '25px' }}>
          <button onClick={() => alert('Sending Map...')} style={{ width: '100%', padding: '20px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold' }}>📍 Share Map Location</button>
        </div>

        {/* 6. सर्वर स्लॉट */}
        <div style={{ marginTop: '25px', padding: '20px', border: '3px dashed #333', borderRadius: '15px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '12px' }}>📡 <b>Server Engine Slot:</b> [AI Moderation, Ads & Data Sync Active]</p>
        </div>
      </div>
    </Layout>
  );
};

export default MessengerPage;
