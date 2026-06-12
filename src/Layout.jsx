import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc' }}>
      {/* हेडर: नाम बाईं तरफ, 3-डॉट मेनू दाईं तरफ (ऊपर) */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee',
        position: 'sticky', top: 0, zIndex: 1000
      }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '26px', margin: 0, color: '#333' }}>
          RangManch
        </h1>
        
        {/* ऊपर दाईं तरफ 3-डॉट मेनू */}
        <button 
          onClick={() => setShowTopMenu(!showTopMenu)} 
          style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', padding: '5px' }}
        >
          ⋮
        </button>

        {/* 3-डॉट का पॉप-अप मेनू (ऊपर दाईं तरफ) */}
        {showTopMenu && (
          <div style={{
            position: 'absolute', top: '60px', right: '15px', background: '#fff',
            border: '1px solid #ddd', borderRadius: '12px', padding: '10px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '160px', zIndex: 1001
          }}>
            <div onClick={() => { navigate('/settings'); setShowTopMenu(false); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>⚙️ Settings</div>
            <div onClick={() => { navigate('/admin'); setShowTopMenu(false); }} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>📈 Admin</div>
            <div onClick={() => { navigate('/security'); setShowTopMenu(false); }} style={{ padding: '10px', cursor: 'pointer' }}>🛡️ Security</div>
          </div>
        )}
      </header>

      {/* मुख्य पेज का कंटेंट */}
      <main style={{ padding: '20px' }}>
        {children}
      </main>

      {/* बॉटम नेविगेशन (अब यहाँ बटन बिल्कुल नहीं टकराएंगे!) */}
      <BottomNav />
    </div>
  );
};

export default Layout;
