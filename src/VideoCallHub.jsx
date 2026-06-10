import React, { useState } from 'react';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);

  // Client-Side बटन (जो तुरंत चलेंगे - 6 बटन)
  const clientAction = (name) => alert(`Action: ${name} (Running locally)`);

  // Server-Side बटन (जिनके लिए सर्वर चाहिए - 6 बटन)
  const serverAction = (name) => alert(`Requesting Server: ${name}... (Pending Backend)`);

  const btnStyle = { padding: '12px', borderRadius: '10px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontWeight: 'bold', fontSize: '11px' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '15px', fontFamily: 'Arial' }}>
      {!callActive ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
          <button style={{ padding: '20px 40px', fontSize: '18px', borderRadius: '30px', background: '#000', color: '#fbbf24', border: 'none', cursor: 'pointer' }} onClick={() => setCallActive(true)}>
            🎥 START VIDEO CALL
          </button>
        </div>
      ) : (
        <div>
          <div style={{ height: '300px', background: '#000', borderRadius: '15px', marginBottom: '20px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {/* 6 बटन: जो बिना सर्वर के चलेंगे */}
            <button style={btnStyle} onClick={() => clientAction('Message')}>💬 Message</button>
            <button style={btnStyle} onClick={() => clientAction('Filters')}>✨ Filters</button>
            <button style={btnStyle} onClick={() => clientAction('Camera Switch')}>📷 Camera</button>
            <button style={btnStyle} onClick={() => clientAction('Share')}>📱 Share</button>
            <button style={btnStyle} onClick={() => clientAction('Close')}>❌ Close</button>
            <button style={{...btnStyle, background: 'red', color: '#fff'}} onClick={() => setCallActive(false)}>🔴 End</button>

            {/* 6 बटन: जो सर्वर/पेमेंट से चलेंगे */}
            <button style={btnStyle} onClick={() => serverAction('Voice AI')}>🎙️ Voice AI</button>
            <button style={btnStyle} onClick={() => serverAction('Text AI')}>🌐 Text AI</button>
            <button style={btnStyle} onClick={() => serverAction('Reconnect')}>🔄 Reconnect</button>
            <button style={btnStyle} onClick={() => serverAction('Gift')}>🎁 Gift</button>
            <button style={btnStyle} onClick={() => serverAction('Tip User')}>💰 Tip</button>
            <button style={btnStyle} onClick={() => serverAction('Private Call')}>🔒 Private</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCallHub;
