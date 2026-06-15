import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx';
import { calculateCommission } from './PriceHelper.js';

const ProVideoCall = () => {
  const navigate = useNavigate();
  const { callProVideo } = useApi();
  const [showGifts, setShowGifts] = useState(false);

  // आपके पूरे 36 फीचर्स (कोई कमी नहीं)
  const features = [
    '🔇','📷','🖥️','🌐','🤖','🎁','✨','🚫','Tip','Wallet','Priv','Vol','Set',
    'Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt',
    'Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','Ext'
  ];
  
  // 10 गिफ्टिंग फीचर्स
  const giftCategories = ['🎁G1','🎁G2','🎁G3','🎁G4','🎁G5','🎁G6','🎁G7','🎁G8','🎁G9','🎁G10'];

  // हैंडलर: हर बटन के लिए सर्वर-रेडी लॉजिक
  const handleFeatureClick = async (f) => {
    try {
      if (f === '🎁') {
        setShowGifts(!showGifts);
      } else {
        // कमीशन कैलकुलेशन
        const commission = calculateCommission(100); 
        
        // सर्वर कॉल
        await callProVideo({ 
          feature: f, 
          profit: commission.platformShare,
          timestamp: new Date().toISOString()
        });
        
        console.log(`Action: ${f} sent to server successfully!`);
      }
    } catch (e) {
      console.error("Server Error on:", f, e);
    }
  };

  return (
    <div style={{ background: '#000', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* टॉप बार - होम और अर्निंग फीचर्स */}
      <div style={topBar}>
        <button onClick={() => navigate('/home')} style={navBtn}>🏠 Home</button>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button onClick={() => navigate('/earn')} style={topBtn}>💰 Earn</button>
          <button onClick={() => navigate('/premium')} style={topBtn}>👑 Prem</button>
          <button onClick={() => navigate('/join-creator')} style={topBtn}>🚀 Join</button>
        </div>
      </div>

      {/* वीडियो सेक्शन */}
      <div style={{ flex: 1, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Live Video Streaming...
      </div>

      {/* 46 बटन्स का ग्रिड */}
      {!showGifts ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', padding: '10px' }}>
          {features.map((f, i) => (
            <button key={i} onClick={() => handleFeatureClick(f)} style={featureBtn}>
              {f}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', padding: '15px', background: '#1a1a1a' }}>
          {giftCategories.map((g, i) => (
            <button key={i} onClick={() => handleFeatureClick(g)} style={giftBtn}>
              {g}
            </button>
          ))}
          <button onClick={() => setShowGifts(false)} style={{...featureBtn, gridColumn: 'span 5', background: '#d00'}}>Close</button>
        </div>
      )}
    </div>
  );
};

// स्टाइल्स
const topBar = { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#111' };
const topBtn = { background: '#222', color: '#FFD700', border: '1px solid #FFD700', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' };
const navBtn = { background: '#444', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' };
const featureBtn = { background: '#333', color: '#fff', border: 'none', padding: '8px', fontSize: '10px', cursor: 'pointer', borderRadius: '4px' };
const giftBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default ProVideoCall;
