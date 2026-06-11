import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

  const clientAction = (name) => alert(`Action: ${name} (Running locally)`);
  const serverAction = (name) => alert(`Requesting Server: ${name}... (Backend Required)`);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '15px', fontFamily: 'Arial' }}>
      {/* 1. ब्रांडेड हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0 }}>RangManch</h2>
        <button onClick={() => navigate('/settings')}>⚙️ Settings</button>
      </header>

      {!callActive ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
          <button style={{ padding: '30px 60px', fontSize: '20px', borderRadius: '40px', background: '#000', color: '#fbbf24', border: 'none', cursor: 'pointer' }} 
                  onClick={() => setCallActive(true)}>🎥 START VIDEO CALL</button>
          
          <div style={{ marginTop: '30px', padding: '15px', background: '#fff3cd', border: '1px dashed #ffc107', width: '90%', textAlign: 'center' }}>
            📢 **Promoted Ad Space**
          </div>
        </div>
      ) : (
        <div>
          <div style={{ height: '300px', background: '#000', borderRadius: '15px', marginBottom: '20px', display:'flex', justifyContent:'center', alignItems:'center', color:'#fff' }}>
            [Live Video Stream]
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {/* लोकल बटन (चलने वाले) */}
            <button onClick={() => clientAction('Message')}>💬 Message</button>
            <button onClick={() => clientAction('Filters')}>✨ Filters</button>
            <button onClick={() => clientAction('Camera')}>📷 Camera</button>
            <button onClick={() => clientAction('Share')}>📱 Share</button>
            <button onClick={() => clientAction('Report')}>⚠️ Report</button>
            <button style={{background: 'red', color: '#fff'}} onClick={() => { setCallActive(false); alert('Ad Displayed!'); }}>🔴 End Call</button>
            
            {/* सर्वर बटन (सर्वर की जरूरत) */}
            <button onClick={() => serverAction('Voice AI')}>🎙️ Voice AI</button>
            <button onClick={() => serverAction('Text AI')}>🌐 Text AI</button>
            <button onClick={() => serverAction('Gift')}>🎁 Send Gift</button>
            <button onClick={() => serverAction('Tip')}>💰 Tip User</button>
            <button onClick={() => serverAction('Wallet')}>💳 My Wallet</button>
            <button onClick={() => serverAction('Private')}>🔒 Private</button>
          </div>
        </div>
      )}

      {/* सर्वर स्लॉट (बाकी काम यहाँ होगा) */}
      <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #000', textAlign: 'center' }}>
        <p>📡 <b>Backend Server Slot:</b> Payments, AI Engine, Ad Records</p>
      </div>
    </div>
  );
};

export default VideoCallHub;
