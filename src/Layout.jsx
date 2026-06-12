import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh' }}>
      {/* हेडर: रंगमंच बाईं तरफ, सेटिंग बटन दाईं तरफ */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '15px 20px', background: '#fff', borderBottom: '1px solid #eee',
        position: 'sticky', top: 0, zIndex: 1000
      }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '28px', margin: 0 }}>RangManch</h1>
        <button 
          style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }} 
          onClick={() => navigate('/settings')}
        >
          ⚙️
        </button>
      </header>

      {/* मुख्य पेज का कंटेंट यहाँ आएगा */}
      <main style={{ padding: '20px' }}>
        {children}
      </main>

      {/* बॉटम नेविगेशन */}
      <BottomNav />
    </div>
  );
};

export default Layout;
