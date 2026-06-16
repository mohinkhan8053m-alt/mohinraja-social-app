import React, { useState } from 'react';
import { useApi } from './ApiContext.jsx'; // प्रो-चैनल इंपोर्ट

const ProMessenger = () => {
  const { callProSecure } = useApi(); // 👈 मास्टर सिक्योर चैनल का इस्तेमाल
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const allFeatures = [
    '🤖AI', '🛡️Mod', '📢AdS', '💎Prem', '📊Ana', '✅Loc', '🌐Reg', '🌍Glob', '⚡Girl', '🔄Sync', 
    '⚙️Set', '🎥VidCall', '📸Cam', '🎙️Mic', '📞Tel', '💾Save', '☁️Cloud', '🔑Auth', '🔔Noti', '🎨Theme',
    '📝Note', '📂File', '🔗Link', '📍Map', '🗓️Cal', '🧮Calc', '⏳Timer', '⏱️Stop', '🔦Flash', '🌡️Temp',
    '🚗Auto', '✈️Fly', '🍔Food', '🎮Game', '🎵Music', '🎬Video', '📖Read', '✍️Edit', '🧩Plug', '📦Pack',
    '🛡️Fire', '🛸Drone', '📡Signal', '💡Bulb', '🚪Lock', '🌡️AC', '💧Water', '🔌Power', '📡Wifi',
    '🎁G1', '🎁G2', '🎁G3', '🎁G4', '🎁G5', '🎁G6', '🎁G7', '🎁G8', '🎁G9', '🎁G10'
  ];

  // 👈 प्रो-सिक्योर तरीके से फीचर एग्जीक्यूट करना
  const executeFeature = async (feature) => {
    try {
      await callProSecure({ 
        feature, 
        source: 'ProMessenger',
        timestamp: new Date().toISOString()
      });
      console.log(`[PRO-SECURE] Action ${feature} sent via Messenger`);
    } catch (err) { 
      console.error("ProSecure Connection Error", err); 
    }
  };

  return (
    <div style={overlayContainer}>
      <div style={messageBar}>
        <div style={quickBar}>
          <button style={miniBtn}>🌐 AI</button>
          <button style={miniBtn}>🎁 G1</button>
          <button onClick={() => setShowAllFeatures(!showAllFeatures)} style={dotsBtn}>•••</button>
        </div>
        <input style={inputStyle} placeholder="Pro Message..." />
      </div>

      {showAllFeatures && (
        <div style={popupStyle}>
          <div style={gridStyle}>
            {allFeatures.map(f => (
              <button key={f} onClick={() => executeFeature(f)} style={featureBtn}>{f}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles (वही, एकदम साफ़)
const overlayContainer = { position: 'absolute', bottom: '10px', width: '96%', left: '2%', zIndex: 1000 };
const messageBar = { background: 'rgba(0,0,0,0.9)', padding: '12px', borderRadius: '15px' };
const quickBar = { display: 'flex', gap: '8px', marginBottom: '10px' };
const miniBtn = { background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '6px', padding: '6px 10px', fontSize: '11px' };
const dotsBtn = { background: '#FFD700', border: 'none', borderRadius: '6px', padding: '6px 12px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: 'none', boxSizing: 'border-box' };
const popupStyle = { background: '#111', color: '#fff', padding: '15px', borderRadius: '15px', marginTop: '10px', maxHeight: '250px', overflowY: 'auto' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' };
const featureBtn = { background: '#333', color: '#fff', border: '1px solid #555', padding: '8px', fontSize: '10px', borderRadius: '6px', cursor: 'pointer' };

export default ProMessenger;
