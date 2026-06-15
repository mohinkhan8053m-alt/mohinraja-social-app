import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const VideoCallHub = () => {
  const { user } = useContext(UserContext);
  const { serverUrl } = useApi();
  const [callActive, setCallActive] = useState(false);
  const [callCount, setCallCount] = useState(0);
  const navigate = useNavigate();

  // विज्ञापन लॉजिक: हर 2 कॉल बाद
  const triggerAd = () => {
    if (!user.isPremium) {
      alert("📺 विज्ञापन (AdSense/Company Promo) चल रहा है...");
      // यहाँ आपका Google AdSense या सर्वर-साइड विज्ञापन का कोड आएगा
    }
  };

  const handleStartCall = () => {
    setCallCount(prev => prev + 1);
    if (callCount >= 1) { // 2 कॉल होते ही विज्ञापन
      triggerAd();
      setCallCount(0);
    }
    setCallActive(true);
  };

  return (
    <Layout>
      <div style={{ padding: '10px' }}>
        {!callActive ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>RangManch Live</h1>
            {/* कंपनी प्रमोशन स्टोरी स्लॉट */}
            <div style={{ margin: '20px 0', padding: '10px', background: '#eee', borderRadius: '10px' }}>
              <p style={{fontSize:'12px'}}>Featured Stories (Companies/Boosted):</p>
              <div style={{ display:'flex', gap:'10px', justifyContent:'center' }}>
                {['Ad 1', 'Ad 2', 'Ad 3'].map(ad => <div key={ad} style={{width:'50px', height:'50px', background:'#ccc', borderRadius:'50%'}}></div>)}
              </div>
            </div>
            <button style={startBtn} onClick={handleStartCall}>🎥 START VIDEO CALL</button>
          </div>
        ) : (
          <div>
            <div style={{ height: '300px', background: '#000', borderRadius: '15px' }}>
               {/* वीडियो स्ट्रीम */}
            </div>

            {/* 3 विज्ञापन स्लॉट (सबसे ज्यादा विज्ञापन) */}
            <div style={{ display:'flex', gap:'5px', marginTop:'10px' }}>
                <div style={adStyle}>AdSlot 1</div>
                <div style={adStyle}>AdSlot 2</div>
                <div style={adStyle}>AdSlot 3</div>
            </div>

            {/* मेन 12 फीचर्स */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '10px' }}>
              {[
                {l:'🔄', a:()=>window.location.reload()}, {l:'💬', a:()=>navigate('/messenger')}, 
                {l:'🔇', a:()=>alert('Mute')}, {l:'📷', a:()=>alert('Cam')},
                {l:'🖥️', a:()=>alert('Screen')}, {l:'🌐', a:()=>alert('AI Trans')},
                {l:'🤖', a:()=>alert('Text Trans')}, {l:'🎁', a:()=>navigate('/gifts')},
                {l:'✨', a:()=>alert('Filter')}, {l:'➕', a:()=>alert('Follow')},
                {l:'🚫', a:()=>alert('Report'), s:{background:'red', color:'#fff'}},
                {l:'🔴', a:()=>setCallActive(false), s:{background:'red', color:'#fff'}}
              ].map((b, i) => <button key={i} onClick={b.a} style={b.s || btnStyle}>{b.l}</button>)}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const adStyle = { flex:1, height:'50px', background:'#FFD700', borderRadius:'5px', textAlign:'center', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center' };
const startBtn = { padding: '30px 60px', borderRadius: '40px', background: '#000', color: '#FFD700', border: 'none', cursor: 'pointer', fontWeight: 'bold' };
const btnStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', background: '#fff' };

export default VideoCallHub;
