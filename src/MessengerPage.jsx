import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();
  const users = ["Mohan Raja", "RangManch Team", "Business Partner", "Creative Designer"];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Arial', paddingBottom: '70px' }}>
      
      {/* 1. प्रोफेशनल टॉप हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '20px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate(-1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>⬅️</button>
          <button onClick={() => navigate('/settings')} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}>⚙️</button>
        </div>
      </header>

      {/* 2. लिस्ट - बटन को वीडियो कॉल से जोड़ दिया है */}
      <div style={{ padding: '10px' }}>
        {users.map((name, index) => (
          <div key={index} style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>{name}</span>
            {/* यहाँ बटन अब सीधे वीडियो कॉल पेज पर ले जाएगा */}
            <button onClick={() => navigate('/video-call')} style={{ padding: '6px 12px', borderRadius: '5px', background: '#fbbf24', border: 'none', cursor: 'pointer' }}>Call</button>
          </div>
        ))}
      </div>

      {/* 3. ऐड स्लॉट */}
      <div style={{ margin: '20px', padding: '15px', background: '#fff3cd', border: '2px dashed #ffc107', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>📢 Promote Your Brand Here</p>
        <button onClick={() => navigate('/promote')} style={{ width: '100%', padding: '10px', background: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Boost Your Business</button>
      </div>

      {/* 4. बॉटम नेविगेशन - अब इसमें वीडियो कॉल और मैसेंजर दोनों हैं */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #dbdbdb', zIndex: 1000 }}>
        <button onClick={() => navigate('/home')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>🏠</button>
        <button onClick={() => navigate('/messenger')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>💬</button>
        <button onClick={() => navigate('/video-call')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>🎥</button>
        <button onClick={() => navigate('/explore')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>🔍</button>
        <button onClick={() => navigate('/profile')} style={{ fontSize: '20px', border: 'none', background: 'none' }}>👤</button>
      </nav>
    </div>
  );
};

export default MessengerPage;
