import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumAdminPage = () => {
  const navigate = useNavigate();

  // [SERVER SLOT]: अपना डेटाबेस लॉजिक यहाँ जोड़ें
  const handleServer = (feature) => console.log(`[SERVER]: ${feature} active.`);

  return (
    <div className="admin-container">
      {/* 1. हेडर */}
      <header className="main-header">
        <h2 style={{ fontSize: '20px' }}>Creator Dashboard</h2>
        <button className="edit-btn" onClick={() => handleServer('Edit Profile')}>Edit Profile</button>
      </header>

      {/* 2. प्रीमियम सेक्शन */}
      <section className="vip-banner">
        <h3>VIP Premium Access</h3>
        <button className="subscribe-btn" onClick={() => handleServer('Subscribe')}>Subscribe Now</button>
      </section>

      {/* 3. एनालिटिक्स (4 बटन्स) */}
      <div className="stats-grid">
        {['Views: 12K', 'Likes: 850', 'Earnings: ₹5K', 'See Graph'].map(stat => (
          <button key={stat} className="stat-btn" onClick={() => handleServer(stat)}>{stat}</button>
        ))}
      </div>

      {/* 4. कंट्रोल सेंटर (8 बटन्स) */}
      <div className="control-center">
        <h4>Settings & Control</h4>
        <div className="settings-grid">
          {['Chat Guard', 'Support', 'Payouts', 'Blocked List', 'Auto Reply', 'Corporate Ads', 'Upload Media', 'Logout'].map(btn => (
            <button key={btn} className="control-btn" onClick={() => handleServer(btn)}>{btn}</button>
          ))}
        </div>
      </div>

      {/* 5. बॉटम नेविगेशन (Instagram Style) */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/explore')}>Explore</button>
        <button className="create-btn" onClick={() => navigate('/create')}>+</button>
        <button onClick={() => navigate('/messenger')}>Chat</button>
      </nav>

      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default PremiumAdminPage;
