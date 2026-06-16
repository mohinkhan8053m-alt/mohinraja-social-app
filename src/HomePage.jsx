import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // प्रो-चैनल इंपोर्ट किया

const HomePage = () => {
  const navigate = useNavigate();
  const { callProSecure } = useApi(); // मास्टर सिक्योर चैनल यहाँ एक्टिवेट हो गया
  
  const [creators] = useState([
    { id: 1, name: 'Sara', gender: 'female', country: 'India', distance: '5km', coins: 100, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'John', gender: 'male', country: 'USA', distance: 'Global', coins: 250, img: 'https://via.placeholder.com/150' }
  ]);
  const [genderFilter, setGenderFilter] = useState('all');

  // प्रो-कॉल हैंडलर: अब यह सीधे प्रो-सिक्योर चैनल का उपयोग करेगा
  const handleProCall = async (creatorId) => {
    // सर्वर को सिग्नल भेजें कि प्रो-कॉल शुरू हो रही है
    await callProSecure({ action: 'START_PRO_CALL', creatorId, status: 'initializing' });
    navigate(`/pro-video-call/${creatorId}`);
  };

  const filteredCreators = creators.filter(c => genderFilter === 'all' || c.gender === genderFilter);

  return (
    <Layout>
      <div style={{ padding: '15px', paddingBottom: '80px' }}>
        
        {/* 1. Earnings */}
        <div style={topDashboard}>
          <div style={{ fontSize: '14px' }}>My Earnings: <b>₹4,500</b></div>
          <button onClick={() => navigate('/bank')} style={withdrawBtn}>Withdraw 💸</button>
        </div>

        {/* 2. Banners */}
        <button onClick={() => alert("Buy Ad-Free Plan")} style={adFreeBtn}>💎 Go Ad-Free</button>
        <div style={earnBanner}>🚀 Want to earn? <button onClick={() => navigate('/join-creator')} style={joinBtn}>Create Profile</button></div>

        {/* 3. Search & Filter */}
        <input placeholder="Search country, name..." style={searchBar} />
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => setGenderFilter('all')} style={filterBtn}>All</button>
          <button onClick={() => setGenderFilter('female')} style={filterBtn}>Girls 💖</button>
          <button onClick={() => setGenderFilter('male')} style={filterBtn}>Boys 💙</button>
        </div>

        {/* 4. Creator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {filteredCreators.map((c) => (
            <div key={c.id} style={card}>
              <img src={c.img} style={img} alt={c.name} />
              <div style={{ padding: '8px' }}>
                <h4 style={{ margin: '0' }}>{c.name}</h4>
                <p style={{ fontSize: '10px', color: '#666' }}>{c.country} • {c.distance}</p>
                <div style={coinTag}>💰 {c.coins} Coins/Min</div>
              </div>
              {/* प्रो-कॉल बटन अब सिक्योर चैनल से जुड़ा है */}
              <button onClick={() => handleProCall(c.id)} style={btn}>Call Now</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// स्टाइल्स वही हैं जो आपने दिए थे
const topDashboard = { background: '#000', color: '#FFD700', padding: '15px', borderRadius: '10px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const withdrawBtn = { background: '#28a745', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px', fontWeight: 'bold' };
const adFreeBtn = { width: '100%', background: '#fff', border: '1px solid #FFD700', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontWeight: 'bold' };
const earnBanner = { background: '#0095f6', color: '#fff', padding: '15px', textAlign: 'center', borderRadius: '10px', marginBottom: '15px' };
const joinBtn = { background: '#fff', color: '#0095f6', border: 'none', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' };
const searchBar = { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' };
const filterBtn = { flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: '#fff' };
const card = { border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', background: '#fff' };
const img = { width: '100%', height: '140px', objectFit: 'cover' };
const coinTag = { background: '#000', color: '#FFD700', fontSize: '10px', padding: '4px', borderRadius: '5px', textAlign: 'center', margin: '5px 0' };
const btn = { width: '100%', background: '#0095f6', color: '#fff', border: 'none', padding: '8px' };

export default HomePage;
