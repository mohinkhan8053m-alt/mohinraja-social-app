import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const MessengerPage = () => {
  const { user } = useContext(UserContext);
  const { proServer } = useApi();
  const navigate = useNavigate();
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [friends, setFriends] = useState([]); // यहाँ आपकी फ्रेंड लिस्ट आएगी

  // 1. 49 मुख्य फीचर्स
  const mainFeatures = [
    '🤖AI', '🛡️Mod', '📢AdS', '💎Prem', '📊Ana', '✅Loc', '🌐Reg', '🌍Glob', '⚡Girl', '🔄Sync', 
    '⚙️Set', '🎥VidCall', '📸Cam', '🎙️Mic', '📞Tel', '💾Save', '☁️Cloud', '🔑Auth', '🔔Noti', '🎨Theme',
    '📝Note', '📂File', '🔗Link', '📍Map', '🗓️Cal', '🧮Calc', '⏳Timer', '⏱️Stop', '🔦Flash', '🌡️Temp',
    '🚗Auto', '✈️Fly', '🍔Food', '🎮Game', '🎵Music', '🎬Video', '📖Read', '✍️Edit', '🧩Plug', '📦Pack',
    '🛡️Fire', '🛸Drone', '📡Signal', '💡Bulb', '🚪Lock', '🌡️AC', '💧Water', '🔌Power', '📡Wifi'
  ];

  // 2. 10 गिफ्टिंग फीचर्स
  const giftFeatures = ['🎁G1', '🎁G2', '🎁G3', '🎁G4', '🎁G5', '🎁G6', '🎁G7', '🎁G8', '🎁G9', '🎁G10'];

  // मास्टर फीचर फंक्शन (Pro Server से जुड़ा)
  const executeFeature = async (featureName) => {
    if (featureName === '🎁GiftMenu') {
      setActiveSubMenu(activeSubMenu === 'gifts' ? null : 'gifts');
      return;
    }
    try {
      const response = await fetch(`${proServer}/api/execute-feature`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feature: featureName, userId: user?.id })
      });
      alert(`मोइन भाई, ${featureName} कमांड सर्वर पर भेजी गई! ✅`);
    } catch (err) { alert("सर्वर कनेक्शन एरर!"); }
  };

  return (
    <Layout>
      <div style={{ padding: '15px', paddingBottom: '100px' }}>
        
        {/* Facebook Style Chat List (फॉलोअर्स और फॉलोइंग) */}
        <h4 style={{ marginBottom: '10px' }}>Recent Chats</h4>
        <div style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
           {/* यहाँ आप अपनी फ्रेंड लिस्ट मैप करेंगे */}
           <div style={friendCard} onClick={() => navigate('/chat/user1')}>
             <div style={avatar}></div>
             <span>Mohan Raja's Friends...</span>
           </div>
        </div>

        {/* 49 फीचर्स का ग्रिड */}
        <h4 style={{ marginBottom: '10px' }}>Messenger Tools (59 Total)</h4>
        <div style={gridStyle}>
          {mainFeatures.map((f, i) => (
            <button key={i} style={featureBtn} onClick={() => executeFeature(f)}>{f}</button>
          ))}
          <button style={{...featureBtn, background: '#FFD700'}} onClick={() => executeFeature('🎁GiftMenu')}>🎁Gifts</button>
        </div>

        {/* गिफ्टिंग सब-मेनू */}
        {activeSubMenu === 'gifts' && (
          <div style={giftGridStyle}>
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
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' };
const giftGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginTop: '10px', padding: '10px', background: '#e1ffc7', borderRadius: '10px' };
const featureBtn = { background: '#f8f8f8', border: '1px solid #ddd', padding: '8px 2px', fontSize: '9px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };
const friendCard = { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: '#fff', borderRadius: '10px', border: '1px solid #eee' };
const avatar = { width: '40px', height: '40px', borderRadius: '50%', background: '#ccc' };

export default MessengerPage;
