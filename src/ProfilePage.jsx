import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  const [profile, setProfile] = useState({ name: 'Mohin Raja', bio: 'अपनी कला, अपनी पहचान - रंगमंच' });

  // 40 फीचर्स की पूरी लिस्ट
  const allFeatures = [
    'Edit Profile', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Logout',
    'Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved',
    'Premium', 'Boost', 'Insights', 'Live Mode', 'Dark Mode', 'Activity',
    'Invite', 'Help', 'Language', 'About', 'Feedback', 'AdminPanel'
  ];

  const btnStyle = { padding: '12px', margin: '5px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', width: '90%' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. प्रोफाइल फोटो और नाम/बायो (एडिट के साथ) */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eee', margin: 'auto' }}></div>
        <h2>{profile.name}</h2>
        <p style={{ color: '#666' }}>{profile.bio}</p>
        <button style={{...btnStyle, background: '#000', color: '#fff'}} onClick={() => navigate('/edit-profile')}>✏️ Edit Profile</button>
      </div>

      {/* 2. 40 फीचर्स का मास्टर बटन */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{...btnStyle, background: '#fbbf24', fontWeight: 'bold'}} onClick={() => setShowFeatures(!showFeatures)}>
          ⚙️ Manage All 40+ Features ▾
        </button>

        {showFeatures && (
          <div style={{ marginTop: '10px', background: '#f9f9f9', padding: '10px', borderRadius: '10px' }}>
            {allFeatures.map(feat => (
              <button key={feat} style={btnStyle} onClick={() => alert(`${feat} फीचर एक्टिवेट हुआ!`)}>
                {feat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. बॉटम नेविगेशन (होम, एक्सप्लोर, मैसेंजर, प्रोफाइल) */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>

      {/* [SERVER SLOT]: यहाँ से आपका पूरा डेटा सर्वर पर सिंक होगा */}
      <div id="server-data-sync" style={{ display: 'none' }}>
        {/* सर्वर सिंक लॉजिक यहाँ आएगा */}
      </div>
    </div>
  );
};

export default MasterProfilePage;
