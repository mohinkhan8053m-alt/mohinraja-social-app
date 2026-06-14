import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [showCallMenu, setShowCallMenu] = useState(false);

  // ग्लोबल स्टाइलिंग के लिए बटन
  const featureButtonStyle = { padding: '10px', fontSize: '12px', borderRadius: '5px', border: '1px solid #ddd', cursor: 'pointer' };
  const goldenButtonStyle = { ...featureButtonStyle, background: '#FFD700', fontWeight: 'bold' };

  return (
    <Layout>
      <div style={{ width: '100%', padding: '10px' }}>
        {/* 1. हेडर - ब्रांडिंग और ग्लोबल करेंसी कंट्रोल */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
          <div>
            <h3 style={{ margin: 0 }}>Chat: Moin Raja</h3>
            <span style={{ fontSize: '10px', color: '#666' }}>🌍 Global Hub Active</span>
          </div>
          <button onClick={() => setShowCallMenu(!showCallMenu)} style={{ background: '#0095f6', color: '#fff', padding: '8px 15px', border: 'none', borderRadius: '5px' }}>
            📹 Video Call
          </button>
        </header>

        {/* वीडियो कॉल मेनू */}
        {showCallMenu && (
          <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <button>🔇 Mute</button>
            <button>✨ Filter</button>
            <button>🌐 Translate</button>
            <button>📱 Screen Share</button>
            <button>💬 Chat Over Call</button>
          </div>
        )}

        {/* 2. मुख्य मैसेंजर फीचर्स (फेसबुक ग्रिड) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
          {/* कमाई वाले मुख्य फीचर्स को गोल्ड किया */}
          <button style={goldenButtonStyle} onClick={() => window.open('https://adsense.google.com')}>AdSense Apply</button>
          <button style={featureButtonStyle} onClick={() => {}}>Premium Toggle</button>
          <button style={featureButtonStyle} onClick={() => {}}>Get Analytics</button>
          <button style={goldenButtonStyle} onClick={() => {}}>Local Ad</button>
          <button style={featureButtonStyle} onClick={() => {}}>Multi-Region</button>
          <button style={goldenButtonStyle} onClick={() => {}}>Global Ad</button>
          <button style={featureButtonStyle} onClick={() => {}}>Send Gift</button>
          <button style={featureButtonStyle} onClick={() => {}}>⚡ Girl Filter</button>
          <button style={featureButtonStyle} onClick={() => {}}>Sync Data</button>
          <button style={featureButtonStyle} onClick={() => {}}>Server Hub</button>
          <button style={goldenButtonStyle} onClick={() => {}}>Force Ad</button>
          <button style={featureButtonStyle} onClick={() => {}}>Live Stats</button>
          <button style={featureButtonStyle} onClick={() => {}}>Add Name</button>
          <button style={featureButtonStyle} onClick={() => {}}>Add Link</button>
          <button style={featureButtonStyle} onClick={() => {}}>Region Select</button>
          <button style={featureButtonStyle} onClick={() => {}}>Pay Now</button>
        </div>

        {/* 3. लोकेशन शेयर */}
        <div style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
          <button onClick={() => alert('Sending Map Location...')} style={{ width: '100%', padding: '15px', background: '#eef', border: 'none', borderRadius: '10px' }}>📍 Share Map Location</button>
        </div>

        {/* सर्वर स्लॉट */}
        <div style={{ marginTop: '20px', padding: '10px', border: '2px dashed #000', borderRadius: '10px' }}>
          <p style={{ margin: 0, fontSize: '12px' }}>📡 <b>Server Hub:</b> AI Engine & Data Sync Active</p>
        </div>
      </div>
    </Layout>
  );
};

export default MessengerPage;
