import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumAdminPage = () => {
  const navigate = useNavigate();

  // प्रोफेशनल प्रीमियम स्टाइल
  const btnStyle = {
    padding: '12px 18px',
    margin: '8px',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: '0.3s'
  };

  const handleAction = (feature) => alert(`Action Active: ${feature}`);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px' }}>Creator Dashboard</h2>
        <button style={{ ...btnStyle, backgroundColor: '#000', color: '#fff' }} onClick={() => handleAction('Edit Profile')}>Edit Profile</button>
      </header>

      {/* 2. प्रीमियम बैनर (नया फीचर) */}
      <section style={{ backgroundColor: '#fbbf24', padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🚀 VIP Premium Access</h3>
        <p>अपने फीचर्स को अनलॉक करें और अपनी कमाई को बूस्ट करें!</p>
        <button style={btnStyle} onClick={() => handleAction('Subscribe Now')}>Subscribe Now</button>
      </section>

      {/* 3. एनालिटिक्स ग्रिड */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
        {['Views: 12K', 'Likes: 850', 'Earnings: ₹5K', 'See Graph'].map(stat => (
          <button key={stat} style={{ ...btnStyle, backgroundColor: '#f8f8f8' }} onClick={() => handleAction(stat)}>{stat}</button>
        ))}
      </div>

      {/* 4. कंट्रोल सेंटर (18 फीचर्स) */}
      <div style={{ marginBottom: '40px' }}>
        <h4 style={{ marginBottom: '15px' }}>Settings & Control</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
          {['Chat Guard', 'Support', 'Payouts', 'Blocked List', 'Auto Reply', 'Corporate Ads', 'Upload Media', 'Logout', 'Live Mode', 'Security', 'Themes', 'Invite', 'History', 'Backups', 'Language', 'Terms', 'Privacy', 'Feedback'].map(btn => (
            <button key={btn} style={btnStyle} onClick={() => handleAction(btn)}>{btn}</button>
          ))}
        </div>
      </div>

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <button style={btnStyle} onClick={() => navigate('/home')}>Home</button>
        <button style={btnStyle} onClick={() => navigate('/explore')}>Explore</button>
        <button style={{ ...btnStyle, backgroundColor: '#fbbf24', borderRadius: '50%', width: '50px' }} onClick={() => navigate('/create')}>+</button>
        <button style={btnStyle} onClick={() => navigate('/messenger')}>Chat</button>
      </nav>

      {/* [SERVER SLOT]: यहाँ आपका बैकएंड डेटा सुरक्षित है */}
      <div id="server-slot" style={{ display: 'none', margin: '40px 0', border: '2px dashed #ccc', padding: '20px' }}>
        {/* API Data here */}
      </div>
    </div>
  );
};

export default PremiumAdminPage;
