import React, { useState } from 'react';
import { VideoServer } from './VideoServer.js'; 

const ProMessenger = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // फीचर्स को 'More' के अंदर डालने के लिए
  const allFeatures = [
    '🛡️Mod', '📢AdS', '💎Prem', '📊Ana', '✅Loc', '🌐Reg', '🌍Glob', '⚡Girl', '🔄Sync', 
    '⚙️Set', '🎥VidCall', '📸Cam', '🎙️Mic', '📞Tel', '💾Save', '☁️Cloud', '🔑Auth', '🔔Noti', '🎨Theme',
    '📝Note', '📂File', '🔗Link', '📍Map', '🗓️Cal', '🧮Calc', '⏳Timer', '⏱️Stop', '🔦Flash', '🌡️Temp',
    '🚗Auto', '✈️Fly', '🍔Food', '🎮Game', '🎵Music', '🎬Video', '📖Read', '✍️Edit', '🧩Plug', '📦Pack',
    '🛡️Fire', '🛸Drone', '📡Signal', '💡Bulb', '🚪Lock', '🌡️AC', '💧Water', '🔌Power', '📡Wifi'
  ];

  return (
    <div style={overlayContainer}>
      <div style={messageBar}>
        {/* सामने दिखने वाले मुख्य कंट्रोल्स */}
        <div style={quickBar}>
          <button style={actionBtn} onClick={() => VideoServer.execute('AI')}>🤖 AI</button>
          <button style={giftBtn} onClick={() => VideoServer.execute('Gift')}>🎁 Gift</button>
          <button onClick={() => setShowAllFeatures(!showAllFeatures)} style={dotsBtn}>⋮</button>
        </div>
        <input style={inputStyle} placeholder="Type a pro message..." />
      </div>

      {/* तीन डॉट के अंदर बाकी सब फीचर्स (साफ़ ग्रिड में) */}
      {showAllFeatures && (
        <div style={popupStyle}>
          <div style={gridStyle}>
            {allFeatures.map(f => (
              <button key={f} onClick={() => VideoServer.execute(f)} style={featureBtn}>{f}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// स्टाइल्स
const overlayContainer = { position: 'absolute', bottom: '10px', width: '96%', left: '2%', zIndex: 1000 };
const messageBar = { background: 'rgba(0,0,0,0.8)', padding: '10px', borderRadius: '15px', border: '1px solid #333' };
const quickBar = { display: 'flex', gap: '8px', marginBottom: '8px' };
const actionBtn = { background: '#222', color: '#FFD700', border: '1px solid #FFD700', borderRadius: '6px', padding: '6px 12px', fontSize: '11px' };
const giftBtn = { background: '#FFD700', color: '#000', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold' };
const dotsBtn = { background: '#444', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #444', background: '#111', color: '#fff', boxSizing: 'border-box' };
const popupStyle = { background: '#000', color: '#fff', padding: '10px', borderRadius: '15px', marginTop: '5px', maxHeight: '200px', overflowY: 'auto', border: '1px solid #444' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' };
const featureBtn = { background: '#222', color: '#fff', border: 'none', padding: '6px', fontSize: '9px', borderRadius: '4px', cursor: 'pointer' };

export default ProMessenger;
