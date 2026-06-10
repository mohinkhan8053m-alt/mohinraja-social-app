import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();

  // स्टाइलिश बटन्स
  const btnStyle = { padding: '10px 15px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontWeight: 'bold' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर (प्रोफाइल फोटो + नाम + प्रमोशन प्लस बटन) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
        <div style={{ textAlign: 'center' }}><h2>Mohin Raja</h2></div>
        {/* प्रमोशन प्लस बटन */}
        <button style={{...btnStyle, background: '#fbbf24'}} onClick={() => alert('Start Promotion!')}>+</button>
      </div>

      {/* 2. फॉलोअर्स और फॉलोइंग (सब दिखेगा) */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <div style={{ textAlign: 'center' }}><strong>1.2K</strong><br/>Followers</div>
        <div style={{ textAlign: 'center' }}><strong>850</strong><br/>Following</div>
        <div style={{ textAlign: 'center' }}><strong>45</strong><br/>Posts</div>
      </div>

      {/* 3. मुख्य बटन्स (Follow, Message, Call) */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button style={{...btnStyle, background: '#000', color: '#fff'}} onClick={() => alert('Followed!')}>Follow</button>
        <button style={btnStyle} onClick={() => navigate('/messenger')}>Message</button>
        <button style={btnStyle} onClick={() => navigate('/video-call')}>🎥 Call</button>
      </div>

      {/* 4. 40 बटन्स का खजाना (Settings Drawer) */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button style={{ width: '100%', padding: '15px', background: '#f0f0f0', border: 'none', borderRadius: '10px', fontWeight: 'bold' }} 
                onClick={() => alert('यहाँ आपके सभी 40 प्रीमियम फीचर्स खुलेंगे!')}>
          ⚙️ Manage All Features & Settings
        </button>
      </div>

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default MasterProfilePage;
