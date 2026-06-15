import React, { useContext, useState } from 'react';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const MessengerPage = () => {
  const { user } = useContext(UserContext);
  const { serverUrl } = useApi();
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // 1. 49 मुख्य फीचर्स की लिस्ट
  const mainFeatures = [
    '🤖AI', '🛡️Mod', '📢AdS', '💎Prem', '📊Ana', '✅Loc', '🌐Reg', '🌍Glob', '⚡Girl', '🔄Sync', 
    '⚙️Set', '🎥VidCall', '📸Cam', '🎙️Mic', '📞Tel', '💾Save', '☁️Cloud', '🔑Auth', '🔔Noti', '🎨Theme',
    '📝Note', '📂File', '🔗Link', '📍Map', '🗓️Cal', '🧮Calc', '⏳Timer', '⏱️Stop', '🔦Flash', '🌡️Temp',
    '🚗Auto', '✈️Fly', '🍔Food', '🎮Game', '🎵Music', '🎬Video', '📖Read', '✍️Edit', '🧩Plug', '📦Pack',
    '🛡️Fire', '🛸Drone', '📡Signal', '💡Bulb', '🚪Lock', '🌡️AC', '💧Water', '🔌Power', '📡Wifi'
  ];

  // 2. 10 गिफ्टिंग फीचर्स
  const giftFeatures = ['🎁G1', '🎁G2', '🎁G3', '🎁G4', '🎁G5', '🎁G6', '🎁G7', '🎁G8', '🎁G9', '🎁G10'];

  // मास्टर फंक्शन: जो सीधा आपके सर्वर को हिट करेगा
  const executeFeature = async (featureName) => {
    if (featureName === '🎁GiftMenu') {
      setActiveSubMenu(activeSubMenu === 'gifts' ? null : 'gifts');
      return;
    }

    try {
      // यह सीधा आपकी ApiContext के सर्वर से जुड़ेगा
      const response = await fetch(`${serverUrl}/api/execute-feature`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feature: featureName, userId: user?.id })
      });
      const data = await response.json();
      alert(`मोइन भाई, ${featureName} कमांड सर्वर पर भेजी गई! ✅`);
    } catch (error) {
      alert(`सर्वर एरर: ${featureName} अभी नहीं चल रहा, सर्वर लिंक चेक करें!`);
    }
  };

  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        {/* चैट सेक्शन */}
        <div style={{ height: '35vh', background: '#fff', borderRadius: '15px', padding: '10px', overflowY: 'auto' }}>
          <div style={chatBubble}>Hello! Server is ready for 59 features. 🚀</div>
        </div>

        {/* 49 फीचर्स का ग्रिड */}
        <div style={gridStyle}>
          {mainFeatures.map((f, i) => (
            <button key={i} style={featureBtn} onClick={() => executeFeature(f)}>{f}</button>
          ))}
          {/* गिफ्टिंग मेनू का बटन */}
          <button style={{...featureBtn, background: '#FFD700'}} onClick={() => executeFeature('🎁GiftMenu')}>🎁Gifts</button>
        </div>

        {/* 10 गिफ्टिंग बटनों का सब-मेनू */}
        {activeSubMenu === 'gifts' && (
          <div style={{...gridStyle, background: '#e1ffc7', padding: '10px', borderRadius: '10px', marginTop: '10px'}}>
            {giftFeatures.map((g, i) => (
              <button key={i} style={featureBtn} onClick={() => executeFeature(g)}>{g}</button>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

// Styles
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '15px' };
const featureBtn = { background: '#eee', border: 'none', padding: '8px 5px', fontSize: '9px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };
const chatBubble = { background: '#0095f6', color: '#fff', padding: '10px', borderRadius: '10px', fontSize: '14px' };

export default MessengerPage;
