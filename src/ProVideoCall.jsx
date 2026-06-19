import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoServer } from './VideoServer.js'; 
import { AdServer } from './AdServer.js';
import { PaymentServer } from './PaymentServer.js';
import ProMessenger from './ProMessenger.jsx';
import { getGifts } from './GiftService.js';

const ProVideoCall = () => {
  const navigate = useNavigate();
  const [callActive, setCallActive] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showGifts, setShowGifts] = useState(false);

  // 56 फीचर्स का मास्टर एरे
  const features = ['🔄', '💬', '➕', '🔴', '🔇', '📷', '🖥', '🌐', '🤖', '🎁', '✨', '🚫', 'Tip', 'Wallet', 'Priv', 'Vol', 'Set', 'Arch', 'Zoom', 'Foc', 'Rec', 'Sync', 'Bst', 'Prem', 'Rate', 'Shr', 'Info', 'Rpt', 'Help', 'Ext', 'Mic', 'Cam', 'Trn', 'Lnk', 'Sav', 'Del', 'Upd', 'Log', 'Pfl', 'S1', 'S2', 'S3', 'Add1', 'Add2', 'Add3', 'Extra'];

  return (
    <div style={containerStyle} onClick={() => setShowControls(!showControls)}>
      
      {/* वीडियो स्क्रीन: सामने वाला बड़ा, आप छोटे */}
      <div style={bigScreen}></div>
      <div style={smallScreen}></div>

      {/* विज्ञापन और प्रीमियम (सिर्फ कॉल के दौरान) */}
      {showControls && (
        <>
          <div style={adBanner}>Google AdSense / Company Ad</div>
          <button style={premiumBtn} onClick={() => PaymentServer.openPremium()}>👑 Go Premium</button>
          <button style={earnBtn} onClick={() => AdServer.showRewardedAd()}>💰 Earn 10</button>
        </>
      )}

      {/* प्रो-मैसेंजर */}
      {showControls && (
        <div style={messengerOverlay}>
          <ProMessenger />
        </div>
      )}

      {/* कंट्रोल्स: यह सिर्फ कॉल के दौरान और क्लिक करने पर दिखेंगे */}
      {showControls && (
        <div style={controlBar}>
          {features.map((f, i) => (
            <button key={i} onClick={() => f === '🎁' ? setShowGifts(!showGifts) : VideoServer.execute(f)} style={btnStyle}>
              {f}
            </button>
          ))}
        </div>
      )}

      {/* गिफ्टिंग (डायनामिक) */}
      {showGifts && (
        <div style={giftGrid}>
          {getGifts().map((g, i) => (
            <button key={i} onClick={() => VideoServer.sendGift(g)} style={giftItem}>{g.name}</button>
          ))}
          <button onClick={() => setShowGifts(false)} style={closeBtn}>Close</button>
        </div>
      )}
    </div>
  );
};

// स्टाइल्स (ग्लोबल ब्रांड लुक)
const containerStyle = { background: '#000', height: '100vh', position: 'relative', overflow: 'hidden' };
const bigScreen = { height: '100vh', width: '100%', background: '#1a1a1a' };
const smallScreen = { position: 'absolute', top: '20px', right: '20px', width: '90px', height: '130px', background: '#333', borderRadius: '10px' };
const controlBar = { position: 'absolute', bottom: '20px', left: '10px', right: '10px', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '5px', background: 'rgba(0,0,0,0.6)', padding: '10px' };
const btnStyle = { background: '#444', color: '#fff', border: 'none', padding: '8px', fontSize: '10px', borderRadius: '4px' };
const adBanner = { position: 'absolute', top: '20px', width: '100%', textAlign: 'center', color: '#fff', background: 'rgba(0,0,0,0.5)' };
const premiumBtn = { position: 'absolute', top: '80px', left: '10px', background: '#FFD700', border: 'none', padding: '5px 10px', borderRadius: '5px' };
const earnBtn = { position: 'absolute', top: '80px', right: '10px', background: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' };
const giftGrid = { position: 'absolute', bottom: '150px', background: '#222', padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px', width: '100%' };
const giftItem = { background: '#FFD700', padding: '10px', border: 'none', borderRadius: '5px', fontSize: '9px' };
const messengerOverlay = { position: 'absolute', bottom: '250px', width: '100%', padding: '10px' };
const closeBtn = { background: '#d00', color: '#fff', border: 'none', padding: '10px' };

export default ProVideoCall;
