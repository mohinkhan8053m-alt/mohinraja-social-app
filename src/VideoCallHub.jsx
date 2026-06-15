import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const VideoCallHub = () => {
  const { user } = useContext(UserContext);
  const { handleFollow } = useApi();
  const [callActive, setCallActive] = useState(false);
  const navigate = useNavigate();

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
            {/* एडवरटाइजिंग स्लॉट्स - विज्ञापन के लिए */}
            <div style={{ display:'flex', gap:'5px', marginBottom:'10px' }}>
               <div style={adSlot}>Ad 1</div><div style={adSlot}>Ad 2</div><div style={adSlot}>Ad 3</div>
            </div>

            {/* वीडियो स्ट्रीम स्क्रीन */}
            <div style={{ height: '300px', background: '#111', borderRadius: '15px', marginBottom: '10px' }}></div>

            {/* 12 मुख्य फीचर्स */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <button onClick={() => window.location.reload()}>🔄</button>
              <button onClick={() => navigate('/messenger')}>💬</button>
              <button onClick={() => handleFollow(user.userId, 'target_id')}>➕</button>
              <button onClick={() => setCallActive(false)} style={{background:'red', color:'#fff'}}>🔴</button>
              {['🔇','📷','🖥️','🌐','🤖','🎁','✨','🚫'].map((l, i) => <button key={i}>{l}</button>)}
            </div>

            {/* 28 एडवांस्ड फीचर्स (कुल 40) */}
            <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
              {['Tip','Wallet','Priv','Vol','Set','Arch','Zoom','Foc','Rec','Sync','Bst','Prem','Rate','Shr','Info','Rpt','Help','Ext','Mic','Cam','Trn','Lnk','Sav','Del','Upd','Log','Pfl','Ext'].map((f, i) => (
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
const adSlot = { flex:1, height:'50px', background:'#FFD700', borderRadius:'5px', color:'#000', fontSize:'9px', display:'flex', alignItems:'center', justifyContent:'center' };

export default VideoCallHub;
