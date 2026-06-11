import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const btnStyle = { padding: '8px 12px', borderRadius: '8px', border: 'none', background: '#f0f0f0', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' };
  const navBtn = { background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर (रंग मंच प्रीमियम नाम + सेटिंग्स आइकन) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '24px', margin: 0 }}>RangManch</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={navBtn} onClick={() => alert('Settings')}>⚙️</button>
          <button style={navBtn} onClick={() => navigate('/messenger')}>💬</button>
        </div>
      </header>

      {/* 2. प्रीमियम रिवार्ड्स और ट्रांसलेट बार */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button style={btnStyle} onClick={() => alert('Rewards')}>🎁 Rewards</button>
        <button style={btnStyle} onClick={() => alert('Translating...')}>🌐 Translate</button>
      </div>

      {/* 3. स्टोरीज़ */}
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ minWidth: '60px', height: '60px', borderRadius: '50%', background: '#ddd' }}></div>
        ))}
      </div>

      {/* 4. पोस्ट फीड (बूस्ट फीचर के साथ) */}
      <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '15px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <strong>Sponsored</strong>
          <button style={{ ...btnStyle, background: '#fbbf24' }} onClick={() => alert('Boost ID...')}>🚀 Boost</button>
        </div>
        <div style={{ height: '200px', background: '#f9f9f9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[Content Post]</div>
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          {['Like', 'Comment', 'Share', 'Save'].map(action => (
            <button key={action} style={btnStyle} onClick={() => alert(`${action} Clicked!`)}>{action}</button>
          ))}
        </div>
      </div>

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '15px', background: '#fff', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-around' }}>
        <button style={navBtn} onClick={() => navigate('/home')}>🏠</button>
        <button style={navBtn} onClick={() => navigate('/explore')}>🔍</button>
        <button style={navBtn} onClick={() => navigate('/profile')}>👤</button>
        <button style={{...navBtn, background: '#000', color: '#fff', borderRadius: '50%', width: '30px', height: '30px'}} onClick={() => alert('Add Post')}>+</button>
      </nav>
    </div>
  );
};

export default HomePage;
