import React from 'react';
import BottomNav from './BottomNav.jsx';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingBottom: '80px', minHeight: '100vh', background: '#fcfcfc' }}>
      {/* हेडर: रंगमंच अब बाईं तरफ, बिना भीड़ के एकदम क्लीन */}
      <header style={{ 
        display: 'flex', alignItems: 'center', 
        padding: '15px 20px', background: '#fff', borderBottom: '1px solid #eee',
        position: 'sticky', top: 0, zIndex: 1000
      }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '28px', margin: 0, color: '#333' }}>
          RangManch
        </h1>
      </header>

      {/* मुख्य पेज का कंटेंट यहाँ आएगा */}
      <main style={{ padding: '20px' }}>
        {children}
      </main>

      {/* बॉटम नेविगेशन (गियर और 3-डॉट के साथ) */}
      <BottomNav />
    </div>
  );
};

export default Layout;
