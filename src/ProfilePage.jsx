import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    // hideHeader और hideFooter का इस्तेमाल किया है ताकि तुम्हारा डिज़ाइन लेआउट से न टकराए
    <Layout hideHeader={true} hideFooter={true}>
      <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
        
        {/* 1. हेडर */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
          <h2>Moin Raja</h2>
          <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
        </header>

        {/* 2. प्रोफाइल फोटो और स्टेट्स */}
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
          <button>Posts</button> <button>Followers</button> <button>Following</button>
        </div>

        {/* 3. मेन एक्शन बटन (सारे फीचर मौजूद हैं) */}
        <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
          <button onClick={() => navigate('/video-call')} style={{ flex: 1 }}>Follow (Video Call)</button>
          <button onClick={() => navigate('/messenger')} style={{ flex: 1 }}>Message</button>
          <button onClick={() => navigate('/edit-profile')} style={{ flex: 1 }}>Edit</button>
          <button onClick={() => navigate('/story-upload')} style={{ flex: 1 }}>🚀 Boost</button>
        </div>

        {/* 4. बॉटम नेविगेशन (जो तुमने दिया था, वही सुरक्षित है) */}
        <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #eee' }}>
          <button onClick={() => navigate('/home')}>🏠</button>
          <button onClick={() => navigate('/explore')}>🔍</button>
          <button onClick={() => navigate('/messenger')}>💬</button>
          <button onClick={() => navigate('/video-call')}>📹</button>
          <button onClick={() => navigate('/profile')}>👤</button>
        </nav>

        {/* 5. 15 बटनों वाला मेनू (सारे फीचर्स के साथ) */}
        {showMenu && (
          <div style={{ padding: '20px', background: '#f9f9f9', borderTop: '1px solid #ddd' }}>
            {['Saved', 'Activity', 'Insights', 'Data', 'Invite', 'Dark Mode', 'Help', 'Feedback', 'Admin Panel', 'Wallet', 'Bank/UPI', 'Premium', 'Blocked', 'Privacy', 'Security'].map(btn => (
              <button key={btn} onClick={() => navigate(`/${btn.toLowerCase()}`)} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '5px' }}>
                {btn}
              </button>
            ))}
          </div>
        )}

        {/* सर्वर इंजन की जगह (यहीं अपना बैकएंड जोड़ना) */}
        <div style={{ marginTop: '20px', textAlign: 'center', color: '#ccc', fontSize: '10px' }}>
          📡 Server Engine Integration Point
        </div>
      </div>
    </Layout>
  );
};

export default InstagramProfile;
