import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // बटनों के लिए प्रोफेशनल प्रीमियम स्टाइल
  const btnStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600'
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <h2 style={{ margin: 0 }}>RangManch</h2>
        <div>
          <button style={btnStyle} onClick={() => alert('Rewards Section')}>Rewards</button>
          <button style={btnStyle} onClick={() => alert('Translating...')}>Translate</button>
          <button style={btnStyle} onClick={() => alert('No Notifications')}>Notifications</button>
          <button style={btnStyle} onClick={() => navigate('/messenger')}>Messenger</button>
        </div>
      </header>

      {/* 2. स्टोरीज़ */}
      <div style={{ display: 'flex', gap: '10px', padding: '20px 0' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
        ))}
      </div>

      {/* 3. पोस्ट फीड */}
      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '12px', maxWidth: '500px', margin: '20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <strong>Sponsored</strong>
          <button style={{ ...btnStyle, backgroundColor: '#fbbf24', color: '#000' }}>Boost</button>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>[Content Post]</div>
        <div style={{ marginTop: '10px' }}>
          {['Like', 'Comment', 'Share', 'Save'].map(action => (
            <button key={action} style={{ ...btnStyle, backgroundColor: '#f0f0f0', color: '#000' }} onClick={() => alert(`${action} Clicked!`)}>
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* 4. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #ddd' }}>
        <button style={btnStyle} onClick={() => navigate('/home')}>Home</button>
        <button style={btnStyle} onClick={() => navigate('/explore')}>Explore</button>
        <button style={btnStyle} onClick={() => navigate('/profile')}>Profile</button>
      </nav>
      
      {/* [SERVER SLOT]: यहाँ अपना डेटा जोड़ें */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default HomePage;
