import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessengerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="messenger-page" style={{ background: '#fff', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 1. हेडर */}
      <header className="msg-header">
        <button onClick={() => navigate(-1)} className="text-btn">Back</button>
        <h1 style={{ fontSize: '18px' }}>RangManch Chat</h1>
        <button className="video-call-btn" onClick={() => navigate('/video-call')}>Start Video Call</button>
      </header>

      {/* 2. प्रीमियम टूलबार */}
      <div className="toolbar">
        <button className="tool-btn">Share Location</button>
        <button className="tool-btn">Translate Chat</button>
        <button className="tool-btn">Send Gift</button>
      </div>

      {/* 3. चैट एरिया */}
      <main style={{ padding: '20px' }}>
        <div className="chat-bubble">
          <p>नमस्ते! कैसे हैं आप?</p>
          <button className="mini-btn">Translate</button>
        </div>
        <div className="upgrade-box">
          <p>Unlock AI Features</p>
          <button className="upgrade-btn" onClick={() => alert("Payment...")}>Upgrade Now</button>
        </div>
      </main>

      {/* 4. इनपुट एरिया */}
      <div className="input-area">
        <button className="action-btn">AI Filter</button>
        <button className="action-btn">Gallery</button>
        <button className="action-btn">Emoji</button>
        <input type="text" placeholder="Type a message..." className="msg-input" />
        <button className="send-btn">Send</button>
      </div>

      {/* बॉटम नेविगेशन */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/explore')}>Explore</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
      </nav>

      {/* [SERVER SLOT]: अपना बैकएंड डेटा यहाँ जोड़ें */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default MessengerPage;
