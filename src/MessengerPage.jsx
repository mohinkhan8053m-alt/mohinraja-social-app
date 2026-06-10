import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();

  // प्रोफेशनल बटन स्टाइल
  const btnStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <button style={btnStyle} onClick={() => navigate(-1)}>Back</button>
        <h1 style={{ fontSize: '18px' }}>RangManch Chat</h1>
        {/* वीडियो कॉल बटन - बड़ा और आकर्षक */}
        <button 
          style={{ ...btnStyle, backgroundColor: '#fbbf24', padding: '15px 30px', fontSize: '18px' }} 
          onClick={() => navigate('/video-call')}>
          🎥 Start Video Call
        </button>
      </header>

      {/* 2. प्रीमियम टूलबार */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
        <button style={btnStyle} onClick={() => alert('Location Shared!')}>Share Location</button>
        <button style={btnStyle} onClick={() => alert('Translating...')}>Translate Chat</button>
        <button style={btnStyle} onClick={() => alert('Gift Sent!')}>Send Gift</button>
      </div>

      {/* 3. चैट एरिया */}
      <main style={{ padding: '20px 0' }}>
        <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '10px' }}>
          <p>नमस्ते! कैसे हैं आप?</p>
          <button style={{ ...btnStyle, fontSize: '12px' }} onClick={() => alert('Translation: Hello! How are you?')}>Translate</button>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p>Unlock AI Features</p>
          <button style={{ ...btnStyle, backgroundColor: '#000', color: '#fff' }} onClick={() => alert("Payment Gateway Loading...")}>Upgrade Now</button>
        </div>
      </main>

      {/* 4. इनपुट एरिया */}
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
        <button style={btnStyle} onClick={() => alert('AI Filter On')}>AI Filter</button>
        <button style={btnStyle} onClick={() => alert('Opening Gallery...')}>Gallery</button>
        <button style={btnStyle} onClick={() => alert('Emoji Picker')}>Emoji</button>
        <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
        <button style={{ ...btnStyle, backgroundColor: '#000', color: '#fff' }} onClick={() => alert('Message Sent!')}>Send</button>
      </div>

      {/* बॉटम नेविगेशन */}
      <nav style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <button style={btnStyle} onClick={() => navigate('/home')}>Home</button>
        <button style={btnStyle} onClick={() => navigate('/explore')}>Explore</button>
        <button style={btnStyle} onClick={() => navigate('/profile')}>Profile</button>
      </nav>

      {/* [SERVER SLOT]: यहाँ आपका बैकएंड डेटा सुरक्षित है */}
      <div id="server-slot" style={{ display: 'none', margin: '20px 0', padding: '20px', border: '2px dashed #ccc' }}>
        {/* अपना API का डेटा यहाँ रेंडर करें */}
      </div>
    </div>
  );
};

export default MessengerPage;
