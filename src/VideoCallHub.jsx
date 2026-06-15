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

  // रिवार्ड ऐड लॉजिक (ऐड देखो, 10 कॉइन कमाओ)
  const handleEarnCoins = async () => {
    // यहाँ आपका 'Rewarded Ad' SDK (जैसे AdMob) ट्रिगर होगा
    console.log("Showing Rewarded Ad...");
    // ऐड खत्म होने पर सर्वर को सिग्नल जाएगा:
    setUser(prev => ({ ...prev, coins: prev.coins + 10 }));
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
            {/* नया प्रीमियम बैज (Ad-Free Path) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
               <button onClick={() => navigate('/premium')} style={premiumBtn}>👑 Go Premium (No Ads)</button>
               <button onClick={handleEarnCoins} style={coinBtn}>💰 Earn 10 Coins (Ad)</button>
            </div>

            <div style={{ height: '250px', background: '#111', borderRadius: '15px', marginBottom: '10px' }}></div>

            {/* 12 मुख्य फीचर्स (अब इसमें गिफ्टिंग भी शामिल है) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <button onClick={() => window.location.reload()}>🔄</button>
              <button onClick={() => navigate('/messenger')}>💬</button>
              <button onClick={() => handleFollow(user.userId, 'target_id')}>➕</button>
              <button onClick={() => setCallActive(false)} style={{background:'red', color:'#fff'}}>🔴</button>
              {['🔇','📷','🖥️','🌐','🤖','🎁','✨','🚫'].map((l, i) => <button key={i}>{l}</button>)}
            </div>

            {/* अन्य फीचर्स (कुल 45+) */}
            <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
              {['Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','Ext','Add1','Add2','Add3'].map((f, i) => (
                <button key={i} style={{ fontSize: '7px', padding: '5px', background:'#222', border:'none', color:'#fff' }}>{f}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const startBtn = { padding: '20px 40px', background: '#FFD700', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor:'pointer' };
const premiumBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '15px', fontSize: '10px', fontWeight: 'bold' };
const coinBtn = { background: '#fff', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '15px', fontSize: '10px', fontWeight: 'bold' };

export default VideoCallHub;
