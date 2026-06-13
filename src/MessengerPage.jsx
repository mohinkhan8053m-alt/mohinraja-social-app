import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [showCallMenu, setShowCallMenu] = useState(false);

  return (
    <Layout>
      <div style={{ width: '100%', padding: '10px' }}>
        {/* 1. हेडर और वीडियो कॉल बटन (दाईं तरफ साफ़) */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
          <h3>Chat: Moin Raja</h3>
          <button onClick={() => setShowCallMenu(!showCallMenu)} style={{ background: '#0095f6', color: '#fff', padding: '8px 15px', border: 'none', borderRadius: '5px' }}>
            📹 Video Call
          </button>
        </header>

        {/* वीडियो कॉल के अंदर के 5 बटन (जो आपने कहा था) */}
        {showCallMenu && (
          <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <button>🔇 Mute</button>
            <button>✨ Filter</button>
            <button>🌐 Translate</button>
            <button>📱 Screen Share</button>
            <button>💬 Chat Over Call</button>
          </div>
        )}

        {/* 2. आपके 16 मुख्य मैसेंजर फीचर्स (फेसबुक स्टाइल ग्रिड) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
          <button onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button onClick={() => {}}>Premium Toggle</button>
          <button onClick={() => {}}>Get Analytics</button>
          <button onClick={() => {}}>Local Ad</button>
          <button onClick={() => {}}>Multi-Region</button>
          <button onClick={() => {}}>Global Ad</button>
          <button onClick={() => {}}>Send Gift</button>
          <button onClick={() => {}}>⚡ Girl Filter</button>
          <button onClick={() => {}}>Sync Data</button>
          <button onClick={() => {}}>Server Hub</button>
          <button onClick={() => {}}>Force Ad</button>
          <button onClick={() => {}}>Live Stats</button>
          <button onClick={() => {}}>Add Name</button>
          <button onClick={() => {}}>Add Link</button>
          <button onClick={() => {}}>Region Select</button>
          <button onClick={() => {}}>Pay Now</button>
        </div>

        {/* 3. लोकेशन शेयर बटन (3-डॉट की जगह यहाँ दे दिया है) */}
        <div style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
          <button onClick={() => alert('Sending Map Location...')} style={{ width: '100%', padding: '15px', background: '#eef' }}>📍 Share Map Location</button>
        </div>

        {/* सर्वर स्लॉट (AI और डेटा के लिए) */}
        <div style={{ marginTop: '20px', padding: '10px', border: '2px dashed #000' }}>
          <p>📡 <b>Server Hub:</b> AI Engine & Data Sync Active</p>
        </div>
      </div>
    </Layout>
  );
};

export default MessengerPage;
