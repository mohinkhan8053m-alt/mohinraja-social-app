import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('girls');

  return (
    <Layout>
      <div style={{ padding: '15px' }}>
        <div style={banner}>👑 Go Ad-Free | Earn 30% Commission</div>
        
        <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
          <button onClick={() => setFilter('girls')} style={tabBtn}>Girls</button>
          <button onClick={() => setFilter('boys')} style={tabBtn}>Boys</button>
        </div>

        <input placeholder="Search Country..." style={searchBar} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {/* क्लिक करते ही प्रो फाइल खुलेगी */}
          <div style={card} onClick={() => navigate('/pro-video-call/1')}>
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" style={img} />
             <button style={btn}>Call Pro</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const banner = { background: '#000', color: '#FFD700', padding: '10px', textAlign: 'center', borderRadius: '10px' };
const tabBtn = { flex: 1, padding: '8px', background: '#eee', border: 'none', borderRadius: '5px' };
const searchBar = { width: '100%', padding: '10px', marginBottom: '10px' };
const card = { border: '1px solid #ddd', padding: '5px', borderRadius: '10px' };
const img = { width: '100%', height: '100px', objectFit: 'cover', borderRadius: '5px' };
const btn = { width: '100%', background: '#000', color: '#fff', border: 'none', padding: '5px' };
export default HomePage;
