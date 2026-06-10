import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const [showMessenger, setShowMessenger] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="explore-page">
      {/* 1. मैसेंजर सेक्शन (Nested Buttons) */}
      <div className="menu-group">
        <button className="main-action-btn" onClick={() => setShowMessenger(!showMessenger)}>💬 Messenger Options</button>
        {showMessenger && (
          <div className="options-container">
            <button className="sub-btn">🎥 Video Call</button>
            <button className="sub-btn">📞 Audio Call</button>
            <button className="sub-btn">💬 Open Chat</button>
          </div>
        )}
      </div>

      {/* 2. कैटेगरी सेक्शन */}
      <div className="menu-group">
        <button className="main-action-btn" onClick={() => setShowCategories(!showCategories)}>📂 Select Categories</button>
        {showCategories && (
          <div className="options-container">
            {['Music', 'Travel', 'Food', 'India', 'USA'].map(cat => (
              <button key={cat} className="sub-btn">{cat}</button>
            ))}
          </div>
        )}
      </div>

      {/* सर्वर डेटा स्लॉट */}
      <div id="server-slot" style={{ display: 'none' }}>{/* API Data here */}</div>
    </div>
  );
};

export default ExplorePage;
