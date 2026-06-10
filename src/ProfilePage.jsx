import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterProfilePage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    'Account': ['Edit Profile', 'Settings', 'Privacy', 'Wallet', 'Bank/UPI', 'Logout'],
    'Security & Data': ['Security', 'Data', 'ChatGuard', 'BlockUser', 'Archive', 'Saved'],
    'Premium Features': ['Premium', 'Boost', 'Insights', 'Live Mode', 'Dark Mode', 'Activity'],
    'Support & More': ['Invite', 'Help', 'Language', 'About', 'Feedback', 'AdminPanel']
  };

  const btnStyle = { width: '100%', padding: '15px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '10px', background: '#fff', cursor: 'pointer', fontWeight: 'bold' };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      {/* 1. हेडर */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#eee', margin: 'auto' }}></div>
        <h2 style={{ margin: '10px' }}>Mohin Raja</h2>
      </div>

      {/* 2. फॉलोअर्स सेक्शन */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div><strong>1.2K</strong><br/>Followers</div>
        <div><strong>850</strong><br/>Following</div>
      </div>

      {/* 3. मेन बटन्स */}
      <div style={{ padding: '20px 0' }}>
        {Object.keys(sections).map((sec) => (
          <div key={sec}>
            <button style={{ ...btnStyle, background: '#000', color: '#fff' }} onClick={() => setActiveSection(activeSection === sec ? null : sec)}>
              {sec} ▾
            </button>
            {activeSection === sec && sections[sec].map(item => (
              <button key={item} style={{ ...btnStyle, background: '#f9f9f9', marginLeft: '10px', width: '95%' }} onClick={() => alert(`${item}Clicked`)}>
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* 4. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #eee' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
        <button onClick={() => navigate('/profile')}>👤</button>
      </nav>

      {/* [SERVER SLOT]: सर्वर वाले फीचर्स का डेटा यहाँ आएगा */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default MasterProfilePage;
