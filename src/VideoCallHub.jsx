import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider';

const VideoCallHub = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', btnBg: '#111' };
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div style={{ height: '100vh', background: '#000', color: '#fff', position: 'relative' }}>
      
      {/* 1. टॉप कंट्रोल्स */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 50 }}><AdBanner /></div>
      
      <div style={{ position: 'absolute', top: '80px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: theme.gold }}>Live Video Chat</h2>
        <div style={{ border: theme.border, padding: '5px 15px', borderRadius: '10px', display: 'inline-block', fontSize: '12px' }}>Encryption: Secure</div>
      </div>

      {/* 2. वीडियो फीड */}
      <div style={{ width: '100%', height: '100%', background: '#222' }}></div> {/* रिमोट वीडियो फीड */}
      
      {/* 3. लाइव चैट ओवरले (6 फीचर) */}
      {isChatOpen && (
        <div style={{ position: 'absolute', bottom: '150px', right: '20px', width: '250px', height: '300px', background: 'rgba(0,0,0,0.9)', border: theme.border, borderRadius: '20px', padding: '15px' }}>
          <h4 style={{ color: theme.gold }}>Chat</h4>
          <div style={{ height: '150px', overflowY: 'auto' }}></div>
          <input type="text" placeholder="Message..." style={{ width: '100%', padding: '8px', background: '#333', border: 'none', color: '#fff' }} />
          <button style={{ marginTop: '10px', width: '100%', background: theme.gold, color: '#000', fontWeight: 'bold', border: 'none', padding: '8px' }}>Send</button>
        </div>
      )}

      {/* 4. बॉटम कंट्रोल्स - इंस्टाग्राम स्टाइल में (सभी 7 बटन्स) */}
      <div style={{ position: 'absolute', bottom: '30px', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <button onClick={() => console.log('Mic')} style={{ background: theme.btnBg, border: theme.border, borderRadius: '50%', padding: '15px', color: '#fff' }}>🎤</button>
        <button onClick={() => console.log('Rotate')} style={{ background: theme.btnBg, border: theme.border, borderRadius: '50%', padding: '15px', color: '#fff' }}>🔄</button>
        <button onClick={() => setIsChatOpen(!isChatOpen)} style={{ background: theme.btnBg, border: theme.border, borderRadius: '50%', padding: '15px', color: '#fff' }}>💬</button>
        
        {/* वीडियो कॉल का सबसे बड़ा और अलग बटन (आपका मेन मकसद) */}
        <button onClick={() => navigate(-1)} style={{ background: '#991b1b', border: 'none', borderRadius: '50%', padding: '25px', fontSize: '30px', color: '#fff', boxShadow: '0 0 20px #991b1b' }}>❌</button>
        
        <button onClick={() => console.log('Gift')} style={{ background: theme.gold, border: 'none', borderRadius: '50%', padding: '15px', color: '#000', fontSize: '20px' }}>🎁</button>
        <button onClick={() => console.log('Filter')} style={{ background: theme.btnBg, border: theme.border, borderRadius: '50%', padding: '15px', color: '#fff' }}>✨</button>
      </div>
    </div>
  );
};

export default VideoCallHub;
