import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 1. पॉप-अप वाला एरर फिक्स (सिर्फ एक बार दिखेगा)
  useEffect(() => {
    const hasSeenAd = localStorage.getItem('hasSeenAd');
    if (!hasSeenAd) {
      const timer = setTimeout(() => {
        setShowAdPopup(true);
      }, 3000);
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
        {/* यहाँ देखिए: अब ये 'रंग मंच' नाम सिर्फ तब दिखेगा जब आप किसी ऐसे पेज पर हों 
           जहां ये पहले से नहीं है। लेकिन भाई, सबसे आसान तरीका है इसे यहाँ से हटाना।
           अगर आप चाहते हैं कि ये 'Layout' से ही नाम आए, तो बाकी फाइलों से नाम हटाना होगा।
           
           मैंने यहाँ से नाम हटा दिया है ताकि आपका दोहरा नाम वाला एरर खत्म हो जाए। 
           अब आप अपने उन पेजों (HomePage, आदि) को देखें, वहां नाम एक ही बार दिखेगा।
        */}
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#fbbf24', background: '#fff9e6', padding: '5px 10px', borderRadius: '15px', border: '1px solid #fbbf24' }}>
            💰 500 Coins
          </div>
          <button onClick={() => setShowTopMenu(!showTopMenu)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' }}>⋮</button>
        </div>
        
        {showTopMenu && (
          <div style={{ position: 'absolute', top: '60px', right: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '160px', zIndex: 1001 }}>
            <div onClick={() => { navigate('/settings'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>⚙️ Settings</div>
            <div onClick={() => { navigate('/admin'); setShowTopMenu(false); }} style={{ padding: '8px', cursor: 'pointer' }}>📈 Admin</div>
          </div>
        )}
      </header>

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
