import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { PaymentServer } from './PaymentServer.js';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [followers, setFollowers] = useState([]); // प्रोफाइल से डेटा यहाँ आएगा

  // 62 फीचर्स की पूरी लिस्ट
  const allFeatures = [
    'AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync',
    'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme',
    'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp',
    'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack',
    'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts',
    'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads', 'Cloud', 'Auth', 'Noti', 'Ana', 'Mod'
  ];

  // स्क्रीन पर दिखने वाले 12 मुख्य बटन
  const mainFeatures = ['AI', 'Gift', 'VidCall', 'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Loc', 'Prem', 'Earn', 'Ads', 'Cam', 'Mic'];

  const handleFeature = (feature) => {
    if (feature === 'Watch-Earn') AdServer.showRewardedAd();
    else if (feature === 'Prem' || feature === 'Ad-Free') PaymentServer.openPremium();
    else if (feature === 'VidCall') navigate('/video-call'); // वीडियो कॉल फाइल से जुड़ गया
    else VideoServer.execute(feature); // बाकी सब मास्टर सर्वर पर
  };

  return (
    <div style={containerStyle}>
      {/* 1. प्रोफाइल और फॉलोअर्स लिस्ट (Profile Connection) */}
      <div style={profileSection}>
        <div style={userInfo}>👤 Mohan Raja | Status: Online</div>
        <div style={listArea}>
          {/* यहाँ से प्रोफाइल का बायो और फॉलोअर्स का डेटा लोड होगा */}
          <div style={userCard}>Follower 1: India 🇮🇳 (View Profile)</div>
        </div>
      </div>

      {/* 2. मुख्य 12 कंट्रोल बटन */}
      <div style={controlBar}>
        {mainFeatures.map((f) => (
          <button key={f} style={mainBtn} onClick={() => handleFeature(f)}>{f}</button>
        ))}
        <button style={dotsBtn} onClick={() => setShowMore(!showMore)}>⋮</button>
      </div>

      {/* 3. मोर फीचर्स (बाकी 50 फीचर्स यहाँ हैं) */}
      {showMore && (
        <div style={nestedGrid}>
          {allFeatures.filter(f => !mainFeatures.includes(f)).map((f) => (
            <button key={f} style={subBtn} onClick={() => handleFeature(f)}>{f}</button>
          ))}
        </div>
      )}
    </div>
  );
};

// स्टाइल्स
const containerStyle = { background: '#000', minHeight: '100vh', color: '#fff', paddingBottom: '120px' };
const profileSection = { padding: '20px', borderBottom: '1px solid #333' };
const userInfo = { fontWeight: 'bold', marginBottom: '10px' };
const listArea = { height: '30vh', overflowY: 'auto' };
const userCard = { padding: '10px', background: '#222', marginBottom: '5px', borderRadius: '5px' };
const controlBar = { position: 'fixed', bottom: '10px', width: '96%', left: '2%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' };
const mainBtn = { background: '#333', border: 'none', padding: '10px', fontSize: '9px', color: '#fff', borderRadius: '5px' };
const dotsBtn = { background: '#FFD700', border: 'none', padding: '10px', borderRadius: '5px', color: '#000' };
const nestedGrid = { position: 'fixed', bottom: '80px', left: '2%', width: '96%', background: '#111', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', maxHeight: '200px', overflowY: 'scroll', border: '1px solid #444' };
const subBtn = { background: '#444', color: '#fff', border: 'none', padding: '8px', fontSize: '8px' };

export default MessengerPage;
