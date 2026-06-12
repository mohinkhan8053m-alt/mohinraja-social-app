import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

  // स्क्रीन पर दिखने वाले 11 बटन
  const mainButtons = [
    { label: '🔄', action: () => window.location.reload() },
    { label: '💬', action: () => navigate('/messenger') },
    { label: '🔇', action: () => console.log('Mute') },
    { label: '📷', action: () => console.log('Camera') },
    { label: '🖥️', action: () => alert('Screen Sharing Initiated...') }, // स्क्रीन शेयरिंग बटन
    { label: '🌐', action: () => alert('AI Voice translating...') },
    { label: '🤖', action: () => alert('AI Text translating...') },
    { label: '🎁', action: () => navigate('/gifts') },
    { label: '✨', action: () => alert('Filter applied...') },
    { label: '⚠️', action: () => alert('Reporting...') },
    { label: '🔴', action: () => setCallActive(false), style: { background: 'red', color: '#fff' } }
  ];

  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        {!callActive ? (
          <div style={{ textAlign: 'center', paddingTop: '80px' }}>
            <h1 style={{ fontFamily: 'cursive' }}>RangManch Live</h1>
            <button 
              style={{ padding: '40px 80px', fontSize: '24px', borderRadius: '50px', background: '#000', color: '#fbbf24', border: 'none', cursor: 'pointer' }} 
              onClick={() => setCallActive(true)}>
              🎥 START VIDEO CALL
            </button>
          </div>
        ) : (
          <div>
            {/* स्क्रीन लेआउट */}
            <div style={{ height: '350px', background: '#1a1a1a', borderRadius: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '90px', height: '120px', background: '#333', borderRadius: '15px' }}></div>
            </div>

            {/* 11 मुख्य बटन */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '20px' }}>
              {mainButtons.map((btn, i) => (
                <button key={i} onClick={btn.action} style={btn.style || { padding: '10px' }}>{btn.label}</button>
              ))}
            </div>

            {/* 10 एडवांस्ड टूल बटन */}
            <div style={{ marginTop: '20px', padding: '10px', background: '#f4f4f4', borderRadius: '12px' }}>
              <p style={{ fontSize: '10px', textAlign: 'center' }}>Advanced Tools</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
                {['Tip', 'Wallet', 'Private', 'Vol', 'Settings', 'Archive', 'Zoom', 'Focus', 'Record', 'Sync'].map(f => (
                  <button key={f} style={{ fontSize: '10px', padding: '5px' }}>{f}</button>
                ))}
              </div>
            </div>

            {/* सर्वर स्लॉट */}
            <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #000', borderRadius: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '11px' }}>📡 <b>Server Engine:</b> AI, Payments, Screen-Cast & Stream</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VideoCallHub;
