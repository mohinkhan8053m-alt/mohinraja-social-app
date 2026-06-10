import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterMessengerPage = () => {
  const navigate = useNavigate();
  const [isCalling, setIsCalling] = useState(false);

  // प्रीमियम कलर थीम
  const primaryColor = '#fbbf24'; 
  const btnStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontWeight: 'bold' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर (इसमें 3 बटन: Back, Video Call, Location Share) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button style={btnStyle} onClick={() => navigate(-1)}>⬅️</button>
        <h3>Moin Raja</h3>
        <button style={{...btnStyle, color: primaryColor}} onClick={() => setIsCalling(true)}>🎥</button>
        <button style={btnStyle} onClick={() => alert('Map Loading...')}>📍</button>
      </header>

      {/* 2. वीडियो कॉल इंटरफेस (5 प्रीमियम बटन) */}
      {isCalling && (
        <div style={{ background: '#000', padding: '20px', borderRadius: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
            <button onClick={() => alert('Voice AI')} style={btnStyle}>🎙️</button>
            <button onClick={() => alert('Filter')} style={btnStyle}>✨</button>
            <button onClick={() => alert('Camera')} style={btnStyle}>🔄</button>
            <button onClick={() => alert('Screen')} style={btnStyle}>📱</button>
            <button onClick={() => setIsCalling(false)} style={{...btnStyle, background: 'red'}}>🔴</button>
          </div>
        </div>
      )}

      {/* 3. चैट एरिया (सेंड बटन) */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input placeholder="Message..." style={{ flex: 1, padding: '10px' }} />
        <button style={{...btnStyle, background: primaryColor}}>✈️</button>
      </div>

      {/* [SERVER SLOT]: सर्वर वाले 35+ फीचर्स का डेटा यहाँ से जुड़ेगा */}
      <div id="server-feature-slot" style={{ marginTop: '20px', border: '1px dashed #ccc', padding: '10px' }}>
        {/* यहाँ आपके सभी एडमिन, सिक्योरिटी, और वॉलेट के 35 बटन रेंडर होंगे */}
      </div>

      {/* बॉटम नेविगेशन (4 बटन) */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>
    </div>
  );
};

export default MasterMessengerPage;
