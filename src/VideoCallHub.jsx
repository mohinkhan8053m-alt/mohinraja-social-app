import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCallHub = () => {
  const navigate = useNavigate();
  const [callActive, setCallActive] = useState(false);

  // प्रीमियम बटन स्टाइल
  const btnStyle = {
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {!callActive ? (
        // कॉल शुरू करने का बड़ा प्रीमियम बटन
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <button 
            style={{ padding: '25px 50px', fontSize: '22px', borderRadius: '50px', background: '#000', color: '#fbbf24', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setCallActive(true)}>
            🎥 START VIDEO CALL
          </button>
        </div>
      ) : (
        // कॉल एक्टिव होने पर दिखने वाले 9 + अन्य बटन
        <div>
          <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <button style={btnStyle} onClick={() => alert('Followed!')}>+ Follow</button>
            <button style={btnStyle} onClick={() => setCallActive(false)}>❌ Close</button>
          </header>

          <div style={{ height: '300px', background: '#f0f0f0', borderRadius: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            [Video Feed]
          </div>

          {/* 9 प्रीमियम फीचर्स का ग्रिड */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <button style={btnStyle} onClick={() => alert('Message Open')}>💬 Message</button>
            <button style={btnStyle} onClick={() => alert('Voice AI On')}>🎙️ Voice AI</button>
            <button style={btnStyle} onClick={() => alert('Text AI On')}>🌐 Text AI</button>
            <button style={btnStyle} onClick={() => alert('Filters On')}>✨ Filters</button>
            <button style={btnStyle} onClick={() => alert('Reconnect')}>🔄 Reconnect</button>
            <button style={btnStyle} onClick={() => alert('Camera Switch')}>📷 Camera</button>
            <button style={btnStyle} onClick={() => alert('Screen Share')}>📱 Share</button>
            <button style={btnStyle} onClick={() => alert('Gift Menu')}>🎁 Gift</button>
            <button style={{ ...btnStyle, background: 'red', color: '#fff' }} onClick={() => setCallActive(false)}>🔴 End</button>
          </div>
        </div>
      )}

      {/* [SERVER SLOT]: यहाँ आपका बैकएंड डेटा सुरक्षित है */}
      <div id="server-slot" style={{ display: 'none', marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>
        {/* सर्वर डेटा यहाँ लोड होगा */}
      </div>
    </div>
  );
};

export default VideoCallHub;
