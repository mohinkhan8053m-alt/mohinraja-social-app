import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataServer } from './DataServer.js';
import { AuthServer } from './AuthServer.js';

const HomePage = () => {
  const navigate = useNavigate();
  const [creators, setCreators] = useState([]);
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');

  useEffect(() => {
    DataServer.getCreators().then(setCreators);
  }, []);

  const handleCall = (creator) => {
    if (!AuthServer.isPremium()) {
      alert("ग्लोबल बात करने के लिए प्रीमियम लें!");
      navigate('/plans'); // App.js के हिसाब से updated
    } else {
      navigate(`/pro-video-call/${creator.id}`);
    }
  };

  const filteredCreators = creators.filter(c => {
    const matchesSearch = c.country.toLowerCase().includes(search.toLowerCase());
    const matchesGender = genderFilter === 'All' ? true : c.gender === genderFilter;
    return matchesSearch && matchesGender;
  });

  return (
    <div style={{ padding: '15px', paddingBottom: '80px', background: '#f9f9f9', minHeight: '100vh' }}>
      {/* 1. Dashboard (Withdraw & Register) */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button onClick={() => navigate('/bank')} style={withdrawBtn}>Withdraw 💸</button>
        <button onClick={() => navigate('/join-creator')} style={regBtn}>🚀 Become a Creator</button>
      </div>

      {/* 2. Premium & Ads */}
      <button onClick={() => navigate('/plans')} style={premiumBtn}>👑 Unlock Premium Global Access</button>
      <button onClick={() => alert("Ad Loaded...")} style={adBtn}>🎁 Watch Ads to get 10 Free Coins</button>

      {/* 3. Global Search & Gender Filter */}
      <input placeholder="Search by Country (e.g. India, USA)..." onChange={(e) => setSearch(e.target.value)} style={searchBar} />
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        {['All', 'Boy', 'Girl'].map(g => (
          <button key={g} onClick={() => setGenderFilter(g)} style={filterBtn(genderFilter === g)}>{g}</button>
        ))}
      </div>

      {/* 4. Creator Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {filteredCreators.map(c => (
          <div key={c.id} style={card}>
            <img src={c.img} style={imgStyle} onClick={() => navigate(`/profile/${c.id}`)} />
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '0' }}>{c.name} {c.isVerified && '✅'}</h4>
              <p style={{ fontSize: '10px', color: '#666' }}>📍 {c.country} • {c.gender}</p>
              <div style={coinTag}>💰 {c.coins} Coins/Min</div>
              
              <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                <button onClick={() => handleCall(c)} style={btn}>Call</button>
                <button onClick={() => navigate(`/pro-messenger`)} style={msgBtn}>Chat</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles (आपके डिज़ाइन को वैसा ही रखा है)
const filterBtn = (active) => ({ flex: 1, padding: '8px', border: 'none', borderRadius: '20px', background: active ? '#000' : '#ddd', color: active ? '#fff' : '#000', fontWeight: 'bold', cursor: 'pointer' });
const withdrawBtn = { background: '#28a745', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', flex: 1, fontWeight: 'bold', cursor: 'pointer' };
const regBtn = { background: '#6f42c1', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', flex: 1, fontWeight: 'bold', cursor: 'pointer' };
const premiumBtn = { width:'100%', padding:'12px', background:'#FFD700', border:'none', borderRadius:'10px', fontWeight:'bold', marginBottom:'10px', cursor: 'pointer' };
const adBtn = { width:'100%', padding:'10px', background:'#ff4757', color:'#fff', border:'none', borderRadius:'10px', marginBottom:'15px', cursor: 'pointer' };
const searchBar = { width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid #ddd', marginBottom:'15px' };
const card = { background:'#fff', borderRadius:'15px', overflow:'hidden', border:'1px solid #eee' };
const imgStyle = { width:'100%', height:'140px', objectFit:'cover', cursor: 'pointer' };
const coinTag = { background:'#000', color:'#FFD700', fontSize: '10px', padding: '4px', borderRadius: '5px', textAlign: 'center', margin: '5px 0' };
const btn = { flex:1, background: '#0095f6', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px', cursor: 'pointer' };
const msgBtn = { flex:1, background: '#eee', color: '#000', border: 'none', padding: '8px', borderRadius: '5px', cursor: 'pointer' };

export default HomePage;
