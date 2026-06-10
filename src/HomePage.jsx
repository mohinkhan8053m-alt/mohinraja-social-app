import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 1-5: हेडर फीचर्स */}
      <header className="main-header">
        <h2 className="logo">RangManch</h2>
        <div className="top-nav">
          <button className="nav-btn">Rewards</button>
          <button className="nav-btn">Translate</button>
          <button className="nav-btn">Notifications</button>
          <button className="nav-btn">Messenger</button>
        </div>
      </header>

      {/* 6-10: स्टोरी फीचर्स */}
      <div className="stories-row">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="story-circle"></div>)}
      </div>

      {/* 11-17: पोस्ट फीड फीचर्स */}
      <div className="post-box">
        <div className="post-info"><span>Sponsored</span><button className="boost-btn">Boost</button></div>
        <div className="post-content">[Content]</div>
        <div className="action-buttons">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
          <button>Save</button>
        </div>
      </div>

      {/* 18-20: बॉटम नेविगेशन */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/explore')}>Explore</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
      </nav>
      
      {/* [SERVER SLOT]: यहाँ आपका बैकएंड डेटा सुरक्षित है */}
    </div>
  );
};

export default HomePage;
