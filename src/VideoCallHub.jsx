import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

  // मेन बटन्स (इसमें 'Follow' और 'Block' जोड़ा गया है)
  const mainButtons = [
    { label: '🔄', action: () => window.location.reload() },
    { label: '💬', action: () => navigate('/messenger') },
    { label: '🔇', action: () => console.log('Mute') },
    { label: '📷', action: () => console.log('Camera') },
    { label: '🖥️', action: () => alert('Screen Sharing...') },
    { label: '🌐', action: () => alert('AI Voice translating...') },
    { label: '🤖', action: () => alert('AI Text translating...') },
    { label: '🎁', action: () => navigate('/gifts') },
    { label: '✨', action: () => alert('Filter applied...') },
    { label: '➕', action: () => alert('Following User...') }, // नया फॉलो बटन
    { label: '🚫', action: () => alert('User Blocked & Reported!'), style: { background: '#ff0000', color: '#fff' } }, // नया सिक्योरिटी बटन
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
            <div style={{ height: '350px', background: '#1a1a1a', borderRadius: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '90px', height: '120px', background: '#333', borderRadius: '15px' }}></div>
              {/* री-कॉल बटन यहाँ आ सकता है जब कॉल कटेगी */}
              <button onClick={() => setCallActive(true)} style={{ position: 'absolute', top: '10px', left: '10px', background: '#fbbf24' }}>Quick Re-Call</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '20px' }}>
              {mainButtons.map((btn, i) => (
                <button key={i} onClick={btn.action} style={btn.style || { padding: '10px' }}>{btn.label}</button>
              ))}
            </div>

            {/* विज्ञापन स्लॉट (यहाँ से कंपनी के विज्ञापन दिखेंगे) */}
            <div style={{ marginTop: '15px', padding: '10px', background: '#fff9c4', borderRadius: '10px', textAlign: 'center', border: '1px dashed #fbc02d' }}>
              <p style={{ fontSize: '10px', margin: 0 }}>Sponsored Ad Slot</p>
            </div>

            <div style={{ marginTop: '20px', padding: '10px', background: '#f4f4f4', borderRadius: '12px' }}>
              <p style={{ fontSize: '10px', textAlign: 'center' }}>Advanced Tools</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
                {['Tip', 'Wallet', 'Private', 'Vol', 'Settings', 'Archive', 'Zoom', 'Focus', 'Record', 'Sync'].map(f => (
                  <button key={f} style={{ fontSize: '10px', padding: '5px' }}>{f}</button>
                ))}
              </div>
            </div>

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
