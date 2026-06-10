import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCallHub = () => {
  const navigate = useNavigate();

  // सर्वर के लिए फंक्शन (जहाँ तुम बाद में लिंक जोड़ोगे)
  const handleAction = (action) => {
    /* [SERVER_API_LINK_START] */
    console.log(`[SERVER SLOT]: ${action} triggered.`);
    alert(`${action} activated!`);
    /* [SERVER_API_LINK_END] */
  };

  return (
    <div className="video-hub-page">
      
      {/* 1. टॉप बार (3 बटन्स) */}
      <header className="vh-header">
        <button onClick={() => handleAction('Follow')} className="follow-btn">+ Follow</button>
        <span className="vip-status">VIP STATUS</span>
        <button onClick={() => navigate(-1)} className="close-btn">❌</button>
      </header>

      {/* 2. वीडियो एरिया */}
      <div className="video-area">
        <p>[REMOTE VIDEO FEED]</p>
        <div className="pip-view">[SELF VIEW]</div>
      </div>

      {/* 3. बॉटम कंट्रोल्स (6 बटन्स) */}
      <div className="control-grid">
        <button onClick={() => handleAction('Mute')} className="icon-btn">🎤</button>
        <button onClick={() => handleAction('Rotate')} className="icon-btn">🔄</button>
        <button onClick={() => handleAction('Translate')} className="icon-btn">👁️‍🗨️</button>
        <button onClick={() => handleAction('Gift')} className="icon-btn">🎁</button>
        <button onClick={() => handleAction('Share')} className="icon-btn">💻</button>
        <button onClick={() => handleAction('Screenshot')} className="icon-btn">📸</button>
      </div>

      {/* 4. बड़ा वीडियो कॉल बटन (Highlight) */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button onClick={() => handleAction('StartCall')} className="large-call-btn">
          🎥 START VIDEO CALL
        </button>
      </div>

      {/* 5. मैसेंजर सेक्शन (4 बटन्स) */}
      <div className="messenger-section">
        <button onClick={() => handleAction('OpenChat')} className="chat-open-btn">💬 Open Message Box</button>
        <div className="chat-row">
          <span>नमस्ते! (Hello)</span>
          <button onClick={() => handleAction('TranslateMsg')} className="i-btn">i</button>
        </div>
        <div className="input-row">
           <input placeholder="Message..." className="chat-input" />
           <button onClick={() => handleAction('Send')} className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallHub;
