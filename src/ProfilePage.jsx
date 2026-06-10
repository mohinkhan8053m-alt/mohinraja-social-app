import React from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const theme = { bg: '#000', gold: '#fbbf24', text: '#fff', border: '1px solid #fbbf24' };

  // 28 फीचर्स की लिस्ट
  const features = [
    'Edit Profile', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Logout', 
    'Invite', 'Help', 'Security', 'Data', 'Notifications', 'Language', 
    'Theme', 'Premium', 'About', 'Feedback', 'Boost', 'ChatGuard', 
    'Translate', 'VideoCall', 'BlockUser', 'AdminPanel', 'Share', 'Archive',
    'Saved', 'Close Friends', 'Activity', 'Insights'
  ];

  const handleFeatureClick = (feature) => {
    // यहाँ सर्वर लिंक की जगह खाली छोड़ी है (बाद में यहाँ अपना API लिंक डालें)
    /* [SERVER_API_LINK_START] */
    console.log(`Executing feature: ${feature}`);
    alert(`${feature} is ready! (Server link pending)`);
    /* [SERVER_API_LINK_END] */
  };

  return (
    <div className="profile-container">
      {/* 1. प्रोफाइल हेडर */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: theme.border, margin: '0 auto 10px', background: '#222' }}></div>
        <h2 style={{ color: theme.gold, margin: '5px' }}>Mohin Raja</h2>
      </header>

      {/* 2. फॉलोअर्स/फॉलोइंग */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', borderTop: theme.border, borderBottom: theme.border, padding: '10px' }}>
        <div style={{ textAlign: 'center' }}><strong>1.2K</strong><br/>Followers</div>
        <div style={{ textAlign: 'center' }}><strong>850</strong><br/>Following</div>
      </div>

      {/* 3. इंस्टाग्राम स्टाइल बटन्स (मैसेंजर + फॉलो) */}
      <div className="action-bar">
        <button className="gold-border-btn" onClick={() => alert('Following!')}>Follow</button>
        <button className="gold-border-btn" onClick={() => navigate('/messenger')}>Message</button>
      </div>

      {/* 4. 28 फीचर्स का व्यवस्थित ग्रिड */}
      <div className="features-grid">
        {features.map((item, index) => (
          <button key={index} className="feature-btn" onClick={() => handleFeatureClick(item)}>
            {item}
          </button>
        ))}
      </div>

      {/* 5. बॉटम नेविगेशन (स्टोरी प्लस के साथ) */}
      <nav className="nav-bar">
        <div style={{textAlign: 'center'}} onClick={() => alert('Add Story')}>
            <button style={{background:'none', border:theme.border, color:theme.gold, padding:'5px 15px', borderRadius:'5px'}}>+</button>
            <div style={{fontSize:'9px', marginTop:'5px'}}>Story</div>
        </div>
        <button onClick={() => navigate('/home')} style={{background:'none', border:'none', color:'#fff'}}>🔍</button>
        <button onClick={() => navigate('/messenger')} style={{background:'none', border:'none', color:'#fff'}}>💬</button>
        <button onClick={() => navigate('/settings')} style={{background:'none', border:'none', color:'#fff'}}>⚙️</button>
        <button onClick={() => navigate('/profile')} style={{background:'none', border:'none', color:theme.gold}}>👤</button>
      </nav>
    </div>
  );
};

export default MasterProfilePage;
