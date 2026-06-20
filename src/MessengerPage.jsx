import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { PaymentServer } from './PaymentServer.js';

const MessengerPage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  // 62 फीचर्स की मास्टर लिस्ट
  const allFeatures = [
    'AI', 'Mod', 'AdS', 'Prem', 'Ana', 'Loc', 'Reg', 'Glob', 'Girl', 'Sync',
    'Set', 'VidCall', 'Cam', 'Mic', 'Tel', 'Save', 'Cloud', 'Auth', 'Noti', 'Theme',
    'Note', 'File', 'Link', 'Map', 'Cal', 'Calc', 'Timer', 'Stop', 'Flash', 'Temp',
    'Auto', 'Fly', 'Food', 'Game', 'Music', 'Video', 'Read', 'Edit', 'Plug', 'Pack',
    'Fire', 'Drone', 'Signal', 'Bulb', 'Lock', 'AC', 'Water', 'Power', 'Wifi', 'Gifts',
    'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Filter', 'Trans', 'Block', 'Ads'
  ];

  const mainFeatures = ['AI', 'Gift', 'VidCall', 'Ad-Free', 'Ad-Sound', 'Watch-Earn', 'Loc', 'Prem', 'Earn', 'Ads', 'Cam', 'Mic'];

  const handleFeature = (feature) => {
    if (feature === 'Watch-Earn') AdServer.showRewardedAd();
    else if (feature === 'Prem' || feature === 'Ad-Free') PaymentServer.openPremium();
    else if (feature === 'VidCall') navigate('/video-call');
    else VideoServer.execute(feature);
  };

  return (
    <div style={whiteContainerStyle}>
      {/* 1. प्रोफाइल और फॉलोअर्स लिस्ट (सफेद थीम) */}
      <div style={profileSection}>
        <h3 style={{color: '#333'}}>Mohan Raja's Friends</h3>
        <div style={userCard}>User: Moin Raja | Bio: Plumber & Creator 🇮🇳</div>
      </div>

      {/* 2. मुख्य कंट्रोल बार (सफेद और प्रीमियम) */}
      <div style={controlBar}>
        {mainFeatures.map((f) => (
          <button key={f} style={f === 'Prem' || f === 'Ad-Free' ? premiumBtn : mainBtn} onClick={() => handleFeature(f)}>
            {f}
          </button>
        ))}
        <button style={dotsBtn} onClick={() => setShowMore(!showMore)}>⋮</button>
      </div>

      {/* 3. मोर फीचर्स (सफेद ग्रिड) */}
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

// सफ़ेद थीम स्टाइल्स
const whiteContainerStyle = { background: '#fff', minHeight: '100vh', color: '#333', paddingBottom: '120px' };
const profileSection = { padding: '20px', borderBottom: '1px solid #eee' };
const userCard = { padding: '15px', background: '#f9f9f9', borderRadius: '10px', border: '1px solid #ddd' };
const controlBar = { position: 'fixed', bottom: '10px', width: '96%', left: '2%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' };
const mainBtn = { background: '#f0f0f0', border: '1px solid #ddd', padding: '10px', fontSize: '9px', borderRadius: '5px' };
const premiumBtn = { background: '#FFD700', border: 'none', padding: '10px', fontSize: '9px', borderRadius: '5px', fontWeight: 'bold' };
const dotsBtn = { background: '#333', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px' };
const nestedGrid = { position: 'fixed', bottom: '80px', left: '2%', width: '96%', background: '#fff', border: '1px solid #ddd', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', padding: '10px', maxHeight: '200px', overflowY: 'scroll' };
const subBtn = { background: '#eee', border: 'none', padding: '8px', fontSize: '8px', borderRadius: '3px' };

export default MessengerPage;
