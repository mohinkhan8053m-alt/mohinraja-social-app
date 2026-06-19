import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataServer } from './DataServer.js';
import { AuthServer } from './AuthServer.js'; // प्रीमियम चेक के लिए

const HomePage = () => {
  const navigate = useNavigate();
  const [creators, setCreators] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // DataServer से डेटा उठाना (कंट्री, कॉइन्स, प्रोफाइल डेटा)
    DataServer.getCreators().then(setCreators);
  }, []);

  const handleCall = (creator) => {
    // प्रीमियम चेक लॉजिक
    if (!AuthServer.isPremium()) {
      alert("ग्लोबल बात करने के लिए प्रीमियम लें!");
      navigate('/sub-plans');
    } else {
      navigate(`/pro-video-call/${creator.id}`);
    }
  };

  return (
    <div style={{ padding: '15px', paddingBottom: '80px', background: '#f9f9f9', minHeight: '100vh' }}>
      {/* 1. Dashboard */}
      <div style={topDashboard}>
        <div>My Earnings: <b>₹4,500</b></div>
        <button onClick={() => navigate('/bank')} style={withdrawBtn}>Withdraw 💸</button>
      </div>

      {/* 2. Premium & Free Coins Ads */}
      <button onClick={() => navigate('/sub-plans')} style={premiumBtn}>👑 Unlock Premium Global Access</button>
      <button onClick={() => alert("Ad Loaded...")} style={adBtn}>🎁 Watch Ads to get 10 Free Coins</button>

      {/* 3. Global Search */}
      <input 
        placeholder="Search by Country (e.g. India, USA)..." 
        onChange={(e) => setSearch(e.target.value)}
        style={searchBar} 
      />

      {/* 4. Creator Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {creators.filter(c => c.country.toLowerCase().includes(search.toLowerCase())).map(c => (
          <div key={c.id} style={card}>
            {/* प्रोफाइल देखने के लिए फोटो पर क्लिक */}
            <img src={c.img} style={imgStyle} onClick={() => navigate(`/profile/${c.id}`)} />
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '0' }}>{c.name} {c.isVerified && '✅'}</h4>
              <p style={{ fontSize: '10px', color: '#666' }}>📍 {c.country} • {c.gender}</p>
              <div style={coinTag}>💰 {c.coins} Coins/Min</div>
              
              {/* प्रो-वीडियो कॉल और मैसेंजर का कनेक्शन */}
              <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                <button onClick={() => handleCall(c)} style={btn}>Call</button>
                <button onClick={() => navigate(`/pro-messenger/${c.id}`)} style={msgBtn}>Chat</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const topDashboard = { background: '#000', color: '#FFD700', padding: '15px', borderRadius: '10px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' };
const withdrawBtn = { background: '#28a745', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px' };
const premiumBtn = { width:'100%', padding:'12px', background:'#FFD700', border:'none', borderRadius:'10px', fontWeight:'bold', marginBottom:'10px' };
const adBtn = { width:'100%', padding:'10px', background:'#ff4757', color:'#fff', border:'none', borderRadius:'10px', marginBottom:'15px' };
const searchBar = { width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid #ddd', marginBottom:'15px' };
const card = { background:'#fff', borderRadius:'15px', overflow:'hidden', border:'1px solid #eee' };
const imgStyle = { width:'100%', height:'140px', objectFit:'cover', cursor: 'pointer' };
const coinTag = { background:'#000', color:'#FFD700', fontSize: '10px', padding: '4px', borderRadius: '5px', textAlign: 'center', margin: '5px 0' };
const btn = { flex:1, background: '#0095f6', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px' };
const msgBtn = { flex:1, background: '#eee', color: '#000', border: 'none', padding: '8px', borderRadius: '5px' };

export default HomePage;
