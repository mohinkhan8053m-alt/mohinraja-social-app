import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const MessengerPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { serverUrl } = useApi();
  const [msg, setMsg] = useState('');

  // AI Translate फंक्शन (किसी भी भाषा को हिंदी/इंग्लिश में बदलेगा)
  const handleTranslate = async (text) => {
    const res = await fetch(`${serverUrl}/api/ai-translate`, {
      method: 'POST',
      body: JSON.stringify({ text, targetLang: 'auto' })
    });
    // अनुवादित मैसेज यहाँ आएगा
  };

  return (
    <Layout>
      <div style={{ padding: '10px', fontFamily: 'Poppins' }}>
        {/* प्रीमियम बैनर */}
        <div style={premiumBanner}>
          <p style={{ margin: '0 0 5px 0', fontSize: '12px' }}>👑 Unlock AI Translation & Ad-Free Mode</p>
          <button onClick={() => navigate('/premium')} style={premiumBtn}>Go Premium</button>
        </div>

        {/* चैट लिस्ट (फेसबुक स्टाइल) */}
        <div style={{ height: '60vh', overflowY: 'scroll', background: '#fff', padding: '10px' }}>
          {/* यहाँ आपके फॉलोअर्स और उनकी चैट आएगी */}
          <div style={chatBubble}>Hello! How are you? <small style={{fontSize:'8px', float:'right'}}>✓✓</small></div>
        </div>

        {/* 'धाकड़' चैट इनपुट बार (AI + Voice + Translate) */}
        <div style={inputBarStyle}>
          <button onClick={() => alert('Opening Camera...')}>📷</button>
          <button onClick={() => alert('Recording Voice...')}>🎙️</button>
          <input 
            value={msg} 
            onChange={(e) => setMsg(e.target.value)} 
            placeholder="Type a message..." 
            style={inputStyle} 
          />
          <button onClick={() => handleTranslate(msg)}>🌐</button> {/* AI Translate Button */}
          <button style={sendBtn}>🚀</button>
        </div>

        {/* 49+ फीचर्स का ग्रिड (बटन के अंदर बटन) */}
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
          {/* ये रहे आपके सभी पुराने फीचर्स */}
          {['🤖AI', '🛡️Mod', '📢AdS', '💎Prem', '📊Ana', '✅Loc', '🌐Reg', '🌍Glob', '🎁Gift', '⚡Girl', '🔄Sync', '⚙️Set'].map((f, i) => (
             <button key={i} style={featureBtn}>{f}</button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Styles
const premiumBanner = { background: '#000', color: '#FFD700', padding: '10px', borderRadius: '15px', textAlign: 'center', marginBottom: '10px' };
const premiumBtn = { background: '#FFD700', border: 'none', padding: '5px 10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const inputBarStyle = { display: 'flex', gap: '5px', background: '#f0f0f0', padding: '10px', borderRadius: '20px', marginTop: '10px' };
const inputStyle = { flex: 1, border: 'none', background: 'transparent', outline: 'none' };
const sendBtn = { background: '#0095f6', color: '#fff', border: 'none', padding: '5px 15px', borderRadius: '15px' };
const chatBubble = { background: '#e1ffc7', padding: '10px', borderRadius: '10px', marginBottom: '5px', maxWidth: '80%' };
const featureBtn = { background: '#eee', border: 'none', padding: '8px', fontSize: '9px', borderRadius: '5px', fontWeight: 'bold' };

export default MessengerPage;
