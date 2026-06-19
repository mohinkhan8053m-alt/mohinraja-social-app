import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataServer } from './DataServer.js'; // मास्टर डेटा सर्वर

const RankPage = () => {
  const navigate = useNavigate();
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // DataServer से रैंकिंग डेटा मंगाया
    DataServer.getTopRankings().then(data => setRankings(data));
  }, []);

  return (
    <div style={{ padding: '20px', background: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>🏆 Top Creators Ranking</h2>
      
      <div style={{ marginTop: '20px' }}>
        {rankings.map((creator, index) => (
          <div key={creator.id} style={rankCard}>
            <div style={rankNumber}>#{index + 1}</div>
            <img src={creator.img} style={avatar} />
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <h4 style={{ margin: 0 }}>{creator.name}</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>💰 {creator.totalEarnings} Coins Earned</p>
            </div>
            <button 
              onClick={() => navigate(`/pro-video-call/${creator.id}`)} 
              style={callBtn}
            >
              Call
            </button>
          </div>
        ))}
      </div>
      
      {/* वापस होम पेज जाने का बटन */}
      <button onClick={() => navigate('/')} style={backBtn}>Back to Home</button>
    </div>
  );
};

// स्टाइल्स
const rankCard = { display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', borderRadius: '15px', marginBottom: '10px', border: '1px solid #eee' };
const rankNumber = { fontSize: '20px', fontWeight: 'bold', color: '#FFD700', width: '40px' };
const avatar = { width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' };
const callBtn = { background: '#0095f6', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px' };
const backBtn = { width: '100%', marginTop: '20px', padding: '15px', background: '#333', color: '#fff', border: 'none', borderRadius: '10px' };

export default RankPage;

