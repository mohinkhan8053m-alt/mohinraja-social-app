import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();
  const users = ["Mohan Raja", "RangManch Team", "Business Partner", "Creative Designer"];

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Arial' }}>
      
      {/* 1. प्रोफेशनल टॉप हेडर - बाईं तरफ RangManch ब्रांडिंग */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0, fontSize: '20px' }}>RangManch</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate(-1)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>⬅️</button>
          <button onClick={() => navigate('/settings')} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer' }}>⚙️</button>
        </div>
      </header>

      {/* 2. फॉलोअर्स/फॉलोइंग लिस्ट (सभी को मैसेज करने के लिए) */}
      <div style={{ padding: '10px' }}>
        {users.map((name, index) => (
          <div key={index} style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>{name}</span>
            <button onClick={() => navigate(`/chat/${name}`)} style={{ padding: '6px 12px', borderRadius: '5px', background: '#fbbf24', border: 'none', cursor: 'pointer' }}>Chat</button>
          </div>
        ))}
      </div>

      {/* 3. बड़ी कंपनियों के लिए ऐड स्लॉट (कमाई का जरिया) */}
      <div style={{ margin: '20px', padding: '15px', background: '#fff3cd', border: '2px dashed #ffc107', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>📢 Promote Your Brand Here</p>
        <button onClick={() => navigate('/promote')} style={{ width: '100%', padding: '10px', background: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Boost Your Business</button>
      </div>

      {/* 4. बॉटम नेविगेशन - हर पेज से जुड़ा हुआ */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #dbdbdb' }}>
        <button onClick={() => navigate('/home')} style={{ border: 'none', background: 'none' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ border: 'none', background: 'none' }}>🔍</button>
        <button onClick={() => navigate('/profile')} style={{ border: 'none', background: 'none' }}>👤</button>
      </nav>
    </div>
  );
};

export default MessengerPage;
