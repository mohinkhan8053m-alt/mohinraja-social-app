import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);
  const navigate = useNavigate();

  // 1. पॉप-अप ऐड लॉजिक (पेज लोड होते ही 3 सेकंड में दिखेगा)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc' }}>
      {/* हेडर */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee',
        position: 'sticky', top: 0, zIndex: 1000
      }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '26px', margin: 0, color: '#333' }}>RangManch</h1>
        <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}>⋮</button>
        
        {showTopMenu && (
          <div style={{ position: 'absolute', top: '60px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '160px', zIndex: 1001 }}>
            <div onClick={() => { navigate('/settings'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>⚙️ Settings</div>
            <div onClick={() => { navigate('/admin'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>📈 Admin</div>
          </div>
        )}
      </header>

      {/* 2. पॉप-अप ऐड सिस्टम (जो जबरदस्ती दिखेगा) */}
      {showAdPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center',
          alignItems: 'center', zIndex: 2000
        }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', width: '80%', textAlign: 'center' }}>
            <h3>📢 Special Promotion</h3>
            <p>ऐड देखें और 50 कॉइन्स जीतें!</p>
            <button onClick={() => { setShowAdPopup(false); alert('ऐड चल रहा है... रिवॉर्ड मिल गया!'); }} style={{ padding: '10px 20px', background: '#fbbf24', border: 'none', borderRadius: '8px' }}>अभी देखें (Watch & Earn)</button>
            <button onClick={() => setShowAdPopup(false)} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'red' }}>Skip</button>
          </div>
        </div>
      )}

      {/* मुख्य कंटेंट */}
      <main style={{ padding: '20px' }}>{children}</main>

      {/* बॉटम नेविगेशन */}
      <BottomNav />
    </div>
  );
};

export default Layout;
