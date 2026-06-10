import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const [showMessenger, setShowMessenger] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  // बटन स्टाइलिंग (सबके लिए समान प्रीमियम लुक)
  const btnStyle = {
    padding: '12px 20px',
    margin: '8px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: '0.3s'
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: 'Arial' }}>
      
      {/* 1. मैसेंजर सेक्शन */}
      <div style={{ marginBottom: '20px' }}>
        <button style={{ ...btnStyle, backgroundColor: '#000', color: '#fff' }} onClick={() => setShowMessenger(!showMessenger)}>
          💬 Messenger Options
        </button>
        {showMessenger && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
            {/* वीडियो कॉल बटन - बड़ा और अलग */}
            <button style={{ ...btnStyle, backgroundColor: '#fbbf24', padding: '20px 40px', fontSize: '20px' }} onClick={() => navigate('/video-call')}>
              🎥 Video Call (Direct)
            </button>
            <button style={{ ...btnStyle }} onClick={() => alert('Audio Calling...')}>📞 Audio Call</button>
            <button style={{ ...btnStyle }} onClick={() => navigate('/messenger')}>💬 Open Chat</button>
          </div>
        )}
      </div>

      {/* 2. कैटेगरी सेक्शन */}
      <div style={{ marginBottom: '20px' }}>
        <button style={{ ...btnStyle, backgroundColor: '#333', color: '#fff' }} onClick={() => setShowCategories(!showCategories)}>
          📂 Select Categories
        </button>
        {showCategories && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
            {['Music', 'Travel', 'Food', 'India', 'USA'].map(cat => (
              <button key={cat} style={{ ...btnStyle }} onClick={() => alert(`Opening ${cat}`)}>{cat}</button>
            ))}
          </div>
        )}
      </div>

      {/* सर्वर डेटा स्लॉट - इसे खाली छोड़ दिया है */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default ExplorePage;
