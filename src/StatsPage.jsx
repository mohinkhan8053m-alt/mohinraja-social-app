import React from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // सर्वर कनेक्शन

const StatsPage = () => {
  const { serverUrl } = useApi();

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2 style={{ marginBottom: '20px' }}>📊 क्रिएटर स्टेट्स (Live)</h2>
        
        {/* स्टेट्स ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={cardStyle('#f0f9ff')}><h3>12.5k</h3><p>Views</p></div>
          <div style={cardStyle('#f0fff4')}><h3>450</h3><p>Followers</p></div>
          <div style={cardStyle('#fff5f5')}><h3>85</h3><p>Likes</p></div>
          <div style={cardStyle('#fffaf0')}><h3>$120</h3><p>Earnings</p></div>
        </div>

        {/* सर्वर सिंक का संकेत */}
        <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '12px', textAlign: 'center', border: '1px dashed #ccc' }}>
          <p style={{ fontSize: '11px', color: '#666' }}>📡 <b>Live Sync:</b> {serverUrl}</p>
          <button style={{ marginTop: '10px', padding: '8px 20px', background: '#000', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Refresh Data
          </button>
        </div>
      </div>
    </Layout>
  );
};

const cardStyle = (bg) => ({ 
  padding: '20px', 
  background: bg, 
  borderRadius: '15px', 
  textAlign: 'center', 
  border: '1px solid #eee' 
});

export default StatsPage;
