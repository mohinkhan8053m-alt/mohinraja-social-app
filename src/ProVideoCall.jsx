import React, { useState } from 'react';
import { useApi } from './ApiContext.jsx';

const ProVideoCall = () => {
  const { callProVideo } = useApi();
  const [showGifts, setShowGifts] = useState(false);

  // आपके सभी 36 फीचर्स
  const features = ['🔇','📷','🖥️','🌐','🤖','🎁','✨','🚫','Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','Ext'];
  
  // 10 जादुई गिफ्टिंग कैटेगरी
  const giftCategories = ['🎁G1','🎁G2','🎁G3','🎁G4','🎁G5','🎁G6','🎁G7','🎁G8','🎁G9','🎁G10'];

  const handleFeatureClick = (f) => {
    if (f === '🎁') {
      setShowGifts(!showGifts); // गिफ्टिंग मेनू खोलें/बंद करें
    } else {
      callProVideo({ feature: f });
      alert(`Feature ${f} activated!`);
    }
  };

  return (
    <div style={{ background: '#000', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* वीडियो सेक्शन */}
      <div style={{ height: '300px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Video Live...
      </div>

      {/* मुख्य फीचर ग्रिड */}
      {!showGifts ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', padding: '10px' }}>
          {features.map((f, i) => (
            <button key={i} onClick={() => handleFeatureClick(f)} style={featureBtn}>
              {f}
            </button>
          ))}
        </div>
      ) : (
        /* जादुई गिफ्टिंग मेनू (बटन के अंदर बटन) */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', padding: '20px', background: '#1a1a1a' }}>
          {giftCategories.map((g, i) => (
            <button key={i} onClick={() => { callProVideo({ feature: g }); alert(`Gift ${g} Sent! 🎁`); }} style={giftBtn}>
              {g}
            </button>
          ))}
          <button onClick={() => setShowGifts(false)} style={{...featureBtn, gridColumn: 'span 5', background: '#d00'}}>Close Gifts</button>
        </div>
      )}
    </div>
  );
};

const featureBtn = { background: '#333', color: '#fff', border: 'none', padding: '10px', fontSize: '8px', cursor: 'pointer' };
const giftBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default ProVideoCall;
