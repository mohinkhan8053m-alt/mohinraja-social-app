import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  useEffect(() => {
    const hasSeenAd = localStorage.getItem('hasSeenAd');
    if (!hasSeenAd) {
      const timer = setTimeout(() => { setShowAdPopup(true); }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSkip = () => {
    setShowAdPopup(false);
    localStorage.setItem('hasSeenAd', 'true');
  };

  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc' }}>
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee',
        position: 'sticky', top: 0, zIndex: 1000
      }}>
        
        {isHomePage ? (
          <h1 style={{ fontFamily: 'cursive', fontSize: '24px', margin: 0, color: '#333' }}>RangManch</h1>
        ) : (
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>⬅️ Back</button>
        )}
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* पार्टनरशिप के लिए एक छोटा बटन */}
          <button onClick={() => navigate('/partnerships')} style={{ background: '#FFD700', border: 'none', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            🤝 Partner
          </button>
          
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#fbbf24', background: '#fff9e6', padding: '5px 10px', borderRadius: '15px', border: '1px solid #fbbf24' }}>
            💰 500
          </div>
          
          <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}>⋮</button>
        </div>
        
        {showTopMenu && (
          <div style={{ position: 'absolute', top: '60px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '160px', zIndex: 1001 }}>
            <div onClick={() => { navigate('/settings'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>⚙️ Settings</div>
            <div onClick={() => { navigate('/admin'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>📈 Admin</div>
            <div onClick={() => { navigate('/promote'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>🚀 Promote</div>
          </div>
        )}
      </header>

      {/* एड पॉपअप वही रहेगा */}
      {showAdPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', width: '80%', textAlign: 'center' }}>
            <h3>📢 Special Promotion</h3>
            <p>ऐड देखें और 50 कॉइन्स जीतें!</p>
            <button onClick={handleSkip} style={{ padding: '10px 20px', background: '#fbbf24', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>अभी देखें</button>
            <button onClick={handleSkip} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>Skip</button>
          </div>
        </div>
      )}

      <main style={{ padding: '20px' }}>{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
