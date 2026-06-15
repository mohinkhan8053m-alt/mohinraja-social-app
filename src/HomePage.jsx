import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  // यहाँ से आप लड़के/लड़कियों का डेटा सर्वर से लाएंगे (फिलहाल एक डमी प्रोफाइल)
  const [creators] = useState([
    { id: 1, name: 'Sara', country: 'India', distance: '5km', coins: 100, img: '...' },
    { id: 2, name: 'John', country: 'USA', distance: 'Global', coins: 250, img: '...' }
  ]);

  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        
        {/* 1. Earn Money Banner - लड़के/लड़कियों के लिए */}
        <div style={earnBanner}>
          🚀 **Want to earn money?** <button onClick={() => navigate('/join-creator')} style={joinBtn}>Create Profile</button>
        </div>

        {/* 2. Global Search & Filter */}
        <input placeholder="Search country, name..." style={searchBar} />

        {/* 3. Creator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {creators.map((c) => (
            <div key={c.id} style={card} onClick={() => navigate(`/pro-video-call/${c.id}`)}>
              <img src={c.img} style={img} />
              <div style={{ padding: '8px' }}>
                <h4 style={{ margin: '0' }}>{c.name}</h4>
                <p style={{ fontSize: '10px', color: '#666' }}>{c.country} • {c.distance}</p>
                <div style={coinTag}>💰 {c.coins} Coins/Min</div>
              </div>
              <button style={btn}>Call Now</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// स्टाइल्स
const earnBanner = { background: '#28a745', color: '#fff', padding: '15px', textAlign: 'center', borderRadius: '10px', marginBottom: '15px' };
const joinBtn = { background: '#fff', color: '#28a745', border: 'none', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' };
const searchBar = { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' };
const card = { border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', background: '#fff' };
const img = { width: '100%', height: '140px', objectFit: 'cover' };
const coinTag = { background: '#000', color: '#FFD700', fontSize: '10px', padding: '4px', borderRadius: '5px', textAlign: 'center', margin: '5px 0' };
const btn = { width: '100%', background: '#0095f6', color: '#fff', border: 'none', padding: '8px' };

export default HomePage;
