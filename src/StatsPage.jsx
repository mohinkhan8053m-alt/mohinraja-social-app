import React from 'react';

const StatsPage = () => {
  return (
    <div style={{ padding: '20px', background: '#fff', minHeight: '100vh' }}>
      <h2>📊 Creator Stats</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
        <div style={cardStyle}><h3>12.5k</h3><p>Views</p></div>
        <div style={cardStyle}><h3>450</h3><p>Followers</p></div>
        <div style={cardStyle}><h3>85</h3><p>Likes</p></div>
        <div style={cardStyle}><h3>$120</h3><p>Earnings</p></div>
      </div>
    </div>
  );
};
const cardStyle = { padding: '20px', background: '#f8f8f8', borderRadius: '15px', textAlign: 'center', border: '1px solid #ddd' };

export default StatsPage;
