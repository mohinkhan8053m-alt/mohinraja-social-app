import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

  // आपके सभी ओरिजिनल फीचर्स (सारे के सारे)
  const mainButtons = [
    { label: '🔄', action: () => window.location.reload() },
    { label: '💬', action: () => navigate('/messenger') },
    { label: '🔇', action: () => alert('Mute Audio') },
    { label: '📷', action: () => alert('Camera Switched') },
    { label: '🖥️', action: () => alert('Screen Sharing...') },
    { label: '🌐', action: () => alert('AI Voice translating...') },
    { label: '🤖', action: () => alert('AI Text translating...') },
    { label: '🎁', action: () => navigate('/gifts') },
    { label: '✨', action: () => alert('Filter applied...') },
    { label: '➕', action: () => alert('Following User...') },
    { label: '🚫', action: () => alert('User Blocked & Reported!'), style: { background: '#ff0000', color: '#fff' } },
    { label: '🔴', action: () => setCallActive(false), style: { background: 'red', color: '#fff' } }
  ];

  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        {!callActive ? (
          <div style={{ textAlign: 'center', paddingTop: '80px' }}>
            <h1 style={{ fontFamily: 'cursive' }}>RangManch Live</h1>
            {/* सिक्योरिटी डिस्क्लेमर के साथ कॉल स्टार्ट */}
            <button 
              style={{ padding: '40px 80px', fontSize: '24px', borderRadius: '50px', background: '#000', color: '#fbbf24', border: 'none', cursor: 'pointer' }} 
              onClick={() => { alert("⚠️ Note: Recording is strictly prohibited. Stay respectful."); setCallActive(true); }}>
              🎥 START VIDEO CALL
            </button>
          </div>
        ) : (
          <div>
            <div style={{ height: '350px', background: '#1a1a1a', borderRadius: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '90px', height: '120px', background: '#333', borderRadius: '15px' }}></div>
              <button onClick={() => setCallActive(true)} style={{ position: 'absolute', top: '10px', left: '10px', background: '#fbbf24', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Quick Re-Call</button>
            </div>

            {/* Main Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '20px' }}>
              {mainButtons.map((btn, i) => (
                <button key={i} onClick={btn.action} style={btn.style || { padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>{btn.label}</button>
              ))}
            </div>

            {/* Ad Slot */}
            <div style={{ marginTop: '15px', padding: '10px', background: '#fff9c4', borderRadius: '10px', textAlign: 'center', border: '1px dashed #fbc02d' }}>
              <p style={{ fontSize: '10px', margin: 0 }}>Sponsored Ad Slot</p>
            </div>

            {/* 10 Advanced Tools (आपके ओरिजिनल सारे फीचर्स) */}
            <div style={{ marginTop: '20px', padding: '10px', background: '#f4f4f4', borderRadius: '12px' }}>
              <p style={{ fontSize: '10px', textAlign: 'center' }}>Advanced Tools</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
                {['Tip', 'Wallet', 'Private', 'Vol', 'Settings', 'Archive', 'Zoom', 'Focus', 'Record', 'Sync'].map(f => (
                  <button key={f} style={{ fontSize: '10px', padding: '5px' }}>{f}</button>
                ))}
              </div>
            </div>

            {/* Server Info */}
            <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #000', borderRadius: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '11px' }}>📡 <b>Server Engine:</b> AI, Payments, Screen-Cast & Stream Active</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VideoCallHub;
