import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider'; 
import { getPricing } from './PriceHelper';

const PremiumAdminPage = () => {
  const navigate = useNavigate();
  const [isChatGuardOn, setIsChatGuardOn] = useState(true);
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  const handleServerAction = (action) => {
    console.log(`Executing ${action}...`);
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', paddingBottom: '100px', fontFamily: 'serif' }}>
      <AdBanner />

      {/* 1-2. हेडर */}
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: theme.border }}>
        <h2 style={{ color: theme.gold, fontSize: '24px' }}>Creator Dashboard</h2>
        <div onClick={() => handleServerAction('uploadPhoto')} style={{ width: '45px', height: '45px', borderRadius: '50%', border: theme.border, cursor: 'pointer' }}></div>
      </header>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* 3-4. VIP कार्ड */}
        <div style={{ background: 'linear-gradient(to right, #4c1d95, #000)', padding: '30px', borderRadius: '25px', border: theme.border, textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', color: theme.gold }}>VIP Premium</h3>
          <p style={{ opacity: 0.8, marginBottom: '20px' }}>Unlock exclusive AI filters.</p>
          <button onClick={() => handleServerAction('subscribe')} style={{ background: theme.gold, color: '#000', padding: '12px 30px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe Now</button>
        </div>

        {/* 5. प्रमोशन कार्ड */}
        <div style={{ padding: '20px', background: theme.cardBg, borderRadius: '20px', border: theme.border }}>
          <h4 style={{ color: theme.gold, marginBottom: '10px' }}>Promote Business</h4>
          <button onClick={() => alert("Portal opened!")} style={{ width: '100%', background: '#1e40af', color: '#fff', padding: '15px', borderRadius: '15px', border: 'none', fontWeight: 'bold' }}>Corporate Ad Deal</button>
        </div>

        {/* 6-8. स्टैट्स ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[{t: 'Views', v: '12K'}, {t: 'Likes', v: '850'}, {t: 'Earnings', v: '₹5K'}].map((item, i) => (
            <div key={i} style={{ padding: '15px', background: theme.cardBg, borderRadius: '15px', border: theme.border, textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#aaa' }}>{item.t}</div>
              <div style={{ fontWeight: 'bold', color: theme.gold }}>{item.v}</div>
            </div>
          ))}
        </div>

        {/* 9-10. सुरक्षा और सपोर्ट */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={{ padding: '20px', background: theme.cardBg, borderRadius: '20px', border: theme.border, textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px' }}>Chat Guard</h4>
            <button onClick={() => setIsChatGuardOn(!isChatGuardOn)} style={{ padding: '10px 20px', borderRadius: '50px', background: isChatGuardOn ? '#166534' : '#991b1b', color: '#fff', border: 'none' }}>{isChatGuardOn ? 'ON' : 'OFF'}</button>
          </div>
          <div style={{ padding: '20px', background: theme.cardBg, borderRadius: '20px', border: theme.border, textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px' }}>Support</h4>
            <button onClick={() => handleServerAction('contactSupport')} style={{ padding: '10px 20px', borderRadius: '50px', background: theme.gold, color: '#000', border: 'none' }}>Help</button>
          </div>
        </div>
      </div>

      {/* 11-16. बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px', zIndex: '100' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🔍</button>
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', borderRadius: '50%', width: '50px', height: '50px', marginTop: '-35px' }}>+</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>👤</button>
      </nav>
    </div>
  );
};

export default PremiumAdminPage;
