import React from 'react';

const BoostDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🚀 Boost Your Content</h2>
      <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #0095f6', borderRadius: '15px' }}>
        <p>Select post to boost reach:</p>
        <button style={{ width: '100%', padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px' }}>
          Start Campaign (Targeting: Global)
        </button>
      </div>
    </div>
  );
};

export default BoostDashboard;
