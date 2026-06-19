import React, { useState } from 'react';
import { VideoServer } from './VideoServer.js';
import { AdServer } from './AdServer.js';
import { PaymentServer } from './PaymentServer.js';

const VideoCallHub = () => {
  const [callActive, setCallActive] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // सभी 56 फीचर्स की लिस्ट
  const mainFeatures = ['🔇','📷','🖥','🌐','🤖','🎁','✨','🚫','🔄','💬','➕','🔴'];
  const extraFeatures = ['Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','S1','S2','S3','Add1','Add2','Add3','Extra'];

  return (
    <div style={containerStyle}>
      {!callActive ? (
        <div style={centerStyle}>
          <h1>RangManch Live</h1>
          <button style={startBtn} onClick={() => setCallActive(true)}>🎥 START VIDEO CALL</button>
          <button style={earnBtn} onClick={() => AdServer.showRewardedAd()}>💰 Watch Ad & Earn 10</button>
        </div>
      ) : (
        <div style={videoCallLayout}>
          {/* बड़ी स्क्रीन और छोटी स्क्रीन */}
          <div style={bigScreen}></div>
          <div style={smallScreen}></div>

          {/* विज्ञापन और प्रीमियम का विकल्प */}
          <div style={adBanner}>Google Ad / Company Ad</div>
          <button style={premiumBtn} onClick={() => PaymentServer.openPremium()}>👑 Go Premium (No Ads)</button>

          {/* 12 मुख्य बटन */}
          <div style={controlBar}>
            {mainFeatures.map((f, i) => (
              <button key={i} onClick={() => f === '🔴' ? setCallActive(false) : VideoServer.execute(f)} style={f === '🔴' ? redBtn : btnStyle}>
                {f}
              </button>
            ))}
            {/* तीन डॉट बटन */}
            <button onClick={() => setShowMore(!showMore)} style={btnStyle}>⋮</button>
          </div>

          {/* बाकी 44 फीचर्स (तीन डॉट के अंदर) */}
          {showMore && (
            <div style={extraGrid}>
              {extraFeatures.map((f, i) => (
                <button key={i} onClick={() => VideoServer.execute(f)} style={smallBtn}>{f}</button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// स्टाइल्स
const containerStyle = { background: '#000', minHeight: '100vh', color: '#fff', padding: '10px' };
const centerStyle = { textAlign: 'center', paddingTop: '30vh' };
const videoCallLayout = { position: 'relative', height: '90vh' };
const bigScreen = { width: '100%', height: '70%', background: '#222', borderRadius: '15px' };
const smallScreen = { position: 'absolute', top: '10px', right: '10px', width: '80px', height: '120px', background: '#444', borderRadius: '10px' };
const controlBar = { position: 'absolute', bottom: '20px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px' };
const adBanner = { textAlign: 'center', padding: '10px', background: '#333', marginTop: '10px' };
const startBtn = { padding: '15px 30px', background: '#FFD700', borderRadius: '30px', border: 'none', fontWeight: 'bold', display: 'block', margin: '20px auto' };
const earnBtn = { background: 'none', border: '1px solid #fff', color: '#fff', padding: '10px', borderRadius: '20px' };
const premiumBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '5px', borderRadius: '5px', width: '100%', marginTop: '5px' };
const btnStyle = { padding: '10px', background: '#444', border: 'none', color: '#fff', borderRadius: '5px' };
const redBtn = { padding: '10px', background: '#ff3b30', border: 'none', color: '#fff', borderRadius: '5px' };
const extraGrid = { position: 'absolute', bottom: '80px', background: '#222', padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px', width: '100%' };
const smallBtn = { fontSize: '9px', background: '#111', color: '#fff', border: 'none', padding: '5px' };

export default VideoCallHub;
