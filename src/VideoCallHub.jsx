import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const VideoCallHub = () => {
  const { user, setUser } = useContext(UserContext);
  const { handleFollow } = useApi();
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

  // यह है आपका 'मास्टर सर्वर लिंक'। आप सिर्फ इस फंक्शन में अपनी दूसरी फाइल का लॉजिक जोड़ देना।
  const executeServerAction = (featureName) => {
    console.log(`Feature ${featureName} is triggering your main server file...`);
    // यहाँ आपकी मेन सर्वर फाइल का लिंक/फंक्शन कॉल होगा
  };

  return (
    <Layout>
      <div style={{ padding: '10px', background: '#000', minHeight: '90vh', color: '#fff' }}>
        {!callActive ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>RangManch Live</h1>
            <button style={startBtn} onClick={() => setCallActive(true)}>🎥 START VIDEO CALL</button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
               <button onClick={() => navigate('/premium')} style={premiumBtn}>👑 Go Premium</button>
               <button onClick={() => setUser(prev => ({ ...prev, coins: prev.coins + 10 }))} style={coinBtn}>💰 Earn 10</button>
            </div>

            <div style={{ height: '250px', background: '#111', borderRadius: '15px', marginBottom: '10px' }}></div>

            {/* 12 मुख्य फीचर्स */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <button onClick={() => window.location.reload()}>🔄</button>
              <button onClick={() => navigate('/messenger')}>💬</button>
              <button onClick={() => handleFollow(user.userId, 'target_id')}>➕</button>
              <button onClick={() => setCallActive(false)} style={{background:'red', color:'#fff'}}>🔴</button>
              {['🔇','📷','🖥','🌐','🤖','🎁','✨','🚫'].map((l, i) => (
                <button key={i} onClick={() => executeServerAction(l)}>{l}</button>
              ))}
            </div>

            {/* 44 अन्य फीचर्स (कुल 56 का मास्टर सेट) */}
            <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
              {['Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','S1','S2','S3','Add1','Add2','Add3','Extra'].map((f, i) => (
                <button key={i} onClick={() => executeServerAction(f)} style={{ fontSize: '7px', padding: '5px', background:'#222', border:'none', color:'#fff' }}>{f}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

// स्टाइल्स वही हैं जो आपके कोड में थे
const startBtn = { padding: '20px 40px', background: '#FFD700', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor:'pointer' };
const premiumBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '15px', fontSize: '10px', fontWeight: 'bold' };
const coinBtn = { background: '#fff', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '15px', fontSize: '10px', fontWeight: 'bold' };

export default VideoCallHub;
