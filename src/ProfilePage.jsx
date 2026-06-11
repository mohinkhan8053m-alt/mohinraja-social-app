import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InstagramProfile = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff', paddingBottom: '70px', fontFamily: 'Arial' }}>
      
      {/* 1. हेडर */}
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #dbdbdb' }}>
        <h2 style={{ fontSize: '22px', fontFamily: 'cursive' }}>RangManch</h2>
        <div>
          <button style={{ background: 'none', border: 'none' }} onClick={() => navigate('/settings')}>⚙️</button>
          <button style={{ background: 'none', border: 'none' }} onClick={() => setShowMenu(!showMenu)}>⋮</button>
        </div>
      </header>

      {/* 2. प्रोफाइल स्टेट्स */}
      <div style={{ display: 'flex', padding: '20px', justifyContent: 'space-between' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#eee' }}></div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div><strong>45</strong><br/>Posts</div>
          <div><strong>1.2K</strong><br/>Followers</div>
        </div>
      </div>

      {/* 3. मुख्य बटन्स (Navigation Enabled) */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '8px' }}>
        <button onClick={() => navigate('/edit-profile')} style={{ flex: 1, padding: '8px' }}>Edit</button>
        <button onClick={() => navigate('/messenger')} style={{ flex: 1, padding: '8px' }}>Message</button>
        <button onClick={() => navigate('/promote')} style={{ padding: '8px 15px', background: '#fbbf24', border: 'none', borderRadius: '5px' }}>+ Promote</button>
      </div>

      {/* 4. मेनू (हर बटन अलग पेज पर ले जाएगा) */}
      {showMenu && (
        <div style={{ padding: '20px' }}>
          <button onClick={() => navigate('/saved')} style={{ display: 'block', width: '100%', padding: '10px' }}>Saved</button>
          <button onClick={() => navigate('/wallet')} style={{ display: 'block', width: '100%', padding: '10px' }}>Wallet</button>
          <button onClick={() => navigate('/premium')} style={{ display: 'block', width: '100%', padding: '10px' }}>Premium</button>
          <button onClick={() => navigate('/admin')} style={{ display: 'block', width: '100%', padding: '10px' }}>Admin Panel</button>
        </div>
      )}

      {/* 5. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff' }}>
        <button onClick={() => navigate('/home')}>🏠</button>
        <button onClick={() => navigate('/explore')}>🔍</button>
        <button onClick={() => navigate('/messenger')}>💬</button>
      </nav>
    </div>
  );
};

export default InstagramProfile;
