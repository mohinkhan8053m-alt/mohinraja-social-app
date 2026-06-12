import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // बटनों के लिए स्टाइल्स
  const btnStyle = { padding: '8px 12px', borderRadius: '12px', border: 'none', background: '#f4f4f4', cursor: 'pointer', fontWeight: 'bold', fontSize: '11px', transition: '0.3s' };
  const actionBtn = { ...btnStyle, background: '#000', color: '#fff' };

  return (
    <div style={{ background: '#fff', paddingBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
      
      {/* 1. प्रीमियम रिवार्ड्स, ट्रांसलेट, और नए फीचर्स */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '5px' }}>
        <button style={btnStyle} onClick={() => navigate('/rewards')}>🎁 Rewards</button>
        <button style={btnStyle} onClick={() => console.log('Translating...')}>🌐 Translate</button>
        <button style={btnStyle} onClick={() => console.log('Live Status Active')}>⚡ Live Status</button>
        <button style={btnStyle} onClick={() => console.log('Global Connect')}>🌍 Global</button>
      </div>

      {/* 2. स्टोरीज़ (गोल आकार) */}
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{ minWidth: '65px', height: '65px', borderRadius: '50%', background: '#eee', border: '2px solid #fbbf24', cursor: 'pointer' }}></div>
        ))}
      </div>

      {/* 3. पोस्ट फीड (बूस्ट फीचर के साथ) */}
      <div style={{ border: '1px solid #f0f0f0', padding: '15px', borderRadius: '20px', marginTop: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
          <strong>Sponsored</strong>
          <button style={{ ...btnStyle, background: '#fbbf24' }} onClick={() => console.log('Boost initiated')}>🚀 Boost</button>
        </div>
        
        {/* पोस्ट कंटेंट */}
        <div style={{ height: '220px', background: '#f9f9f9', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
          [User Video/Image Content]
        </div>

        {/* लाइक, कमेंट, शेयर, सेव */}
        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
          {['Like', 'Comment', 'Share', 'Save'].map(action => (
            <button key={action} style={btnStyle} onClick={() => console.log(`${action} Action Recorded`)}>{action}</button>
          ))}
        </div>
      </div>

      {/* 4. सर्वर स्लॉट (अदृश्य/अंडर द हुड) */}
      <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ddd', borderRadius: '10px', textAlign: 'center', fontSize: '9px', color: '#888' }}>
        📡 RangManch Core: Real-time Sync Active
      </div>
    </div>
  );
};

export default HomePage;
