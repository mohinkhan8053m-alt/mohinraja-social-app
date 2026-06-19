import React, { useState } from 'react';
import { VideoServer } from './VideoServer.js'; // मास्टर सर्वर
import { AdServer } from './AdServer.js';       // विज्ञापन और कॉइन लॉजिक
import { PaymentServer } from './PaymentServer.js'; // प्रीमियम

const MessengerPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [inCall, setInCall] = useState(false);

  // 12 मुख्य बटन जो स्क्रीन पर दिखेंगे
  const mainFeatures = [
    { name: 'Video', icon: '🎥' }, { name: 'Gift', icon: '🎁' }, 
    { name: 'Trans', icon: '🔊' }, { name: 'Filter', icon: '✨' }, 
    { name: 'Block', icon: '🚫' }, { name: 'Prem', icon: '👑' }, 
    { name: 'Earn', icon: '💰' }, { name: 'Ads', icon: '📢' }
  ];

  // बटन क्लिक हैंडलर (जो सर्वर से सर्वर कॉल करेगा)
  const handleFeature = (feature) => {
    if (feature === 'Earn') AdServer.showRewardedAd();
    else if (feature === 'Prem') PaymentServer.openPremium();
    else VideoServer.execute(feature); // बाकी सारे फीचर्स सर्वर के पास जाएंगे
  };

  return (
    <div style={containerStyle}>
      {/* विज्ञापन बैनर */}
      <div style={adBanner}>Google AdSense / Company Promo</div>

      {/* वीडियो कॉल स्क्रीन (Active) */}
      {inCall && (
        <div style={videoScreen}>
          <div style={remoteVideo}></div>
          <button style={hangupBtn} onClick={() => { VideoServer.execute('EndCall'); setInCall(false); }}>🔴</button>
        </div>
      )}

      {/* मुख्य कंट्रोल्स (स्क्रीन पर 8-12 बटन) */}
      <div style={controlBar}>
        {mainFeatures.map((f, i) => (
          <button key={i} style={mainBtn} onClick={() => handleFeature(f.name)}>
            {f.icon}
          </button>
        ))}
        <button style={dotsBtn} onClick={() => setShowMore(!showMore)}>⋮</button>
      </div>

      {/* मोर फीचर्स (Nested) */}
      {showMore && (
        <div style={nestedGrid}>
          {['AI', 'Mod', 'Ana', 'Loc', 'Save', 'Cloud', 'Auth', 'Noti'].map((f, i) => (
            <button key={i} style={subBtn} onClick={() => VideoServer.execute(f)}>{f}</button>
          ))}
        </div>
      )}
    </div>
  );
};

// स्टाइल्स वही प्रोफेशनल डार्क थीम में
const containerStyle = { background: '#000', minHeight: '100vh', color: '#fff' };
const adBanner = { height: '50px', background: '#222', textAlign: 'center', fontSize: '10px', paddingTop: '10px' };
const videoScreen = { height: '60vh', background: '#111', position: 'relative' };
const remoteVideo = { height: '100%', width: '100%' };
const hangupBtn = { position: 'absolute', bottom: '20px', left: '45%', background: 'red', border: 'none', padding: '15px', borderRadius: '50%' };
const controlBar = { position: 'fixed', bottom: '10px', width: '96%', left: '2%', display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: '4px' };
const mainBtn = { background: '#222', border: '1px solid #444', padding: '10px 5px', fontSize: '12px', borderRadius: '5px', color: '#fff' };
const dotsBtn = { background: '#FFD700', border: 'none', padding: '10px', borderRadius: '5px', fontWeight: 'bold' };
const nestedGrid = { position: 'fixed', bottom: '70px', width: '96%', left: '2%', background: '#111', padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' };
const subBtn = { background: '#333', color: '#fff', border: 'none', padding: '10px', fontSize: '9px' };

export default MessengerPage;
