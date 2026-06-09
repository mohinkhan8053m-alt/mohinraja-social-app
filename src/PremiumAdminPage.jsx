import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdBanner } from './AdProvider';

const PremiumAdminPage = () => {
  const navigate = useNavigate();
  const [isChatGuardOn, setIsChatGuardOn] = useState(true);
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: '#111' };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', paddingBottom: '100px', fontFamily: 'serif' }}>
      <AdBanner />

      {/* 1. प्रीमियम हेडर */}
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: theme.border }}>
        <h2 style={{ color: theme.gold, fontSize: '24px', margin: 0 }}>Creator Dashboard</h2>
        <div onClick={() => alert('Uploading Photo...')} style={{ width: '45px', height: '45px', borderRadius: '50%', border: theme.border, cursor: 'pointer', background: theme.cardBg }}></div>
      </header>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* 2. VIP प्रीमियम कार्ड */}
        <div style={{ background: 'linear-gradient(to right, #2e1065, #000)', padding: '30px', borderRadius: '25px', border: theme.border, textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', color: theme.gold, margin: '0 0 10px' }}>VIP Premium</h3>
          <p style={{ opacity: 0.8, marginBottom: '20px' }}>Unlock exclusive AI filters.</p>
          <button onClick={() => alert('Subscription Active')} style={{ background: theme.gold, color: '#000', padding: '12px 30px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe Now</button>
        </div>

        {/* 3. प्रमोशन बटन */}
        <button onClick={() => alert("Portal opened!")} style={{ width: '100%', background: '#1e40af', color: '#fff', padding: '18px', borderRadius: '15px', border: theme.border, fontWeight: 'bold', fontSize: '16px' }}>🏢 Corporate Ad Deal</button>

        {/* 4. स्टैट्स ग्रिड */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[{t: 'Views', v: '12K'}, {t: 'Likes', v: '850'}, {t: 'Earnings', v: '₹5K'}].map((item, i) => (
            <div key={i} style={{ padding: '15px', background: theme.cardBg, borderRadius: '15px', border: theme.border, textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#aaa' }}>{item.t}</div>
              <div style={{ fontWeight: 'bold', color: theme.gold, fontSize: '18px' }}>{item.v}</div>
            </div>
          ))}
        </div>

        {/* 5. सुरक्षा और सपोर्ट */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={{ padding: '20px', background: theme.cardBg, borderRadius: '20px', border: theme.border, textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px', color: '#fff' }}>Chat Guard</h4>
            <button onClick={() => setIsChatGuardOn(!isChatGuardOn)} style={{ padding: '10px 25px', borderRadius: '50px', background: isChatGuardOn ? '#166534' : '#991b1b', color: '#fff', border: 'none', fontWeight: 'bold' }}>{isChatGuardOn ? 'ON' : 'OFF'}</button>
          </div>
          <div style={{ padding: '20px', background: theme.cardBg, borderRadius: '20px', border: theme.border, textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px', color: '#fff' }}>Support</h4>
            <button onClick={() => alert('Contacting Support...')} style={{ padding: '10px 25px', borderRadius: '50px', background: theme.gold, color: '#000', border: 'none', fontWeight: 'bold' }}>Help</button>
          </div>
        </div>
      </div>

      {/* 6. प्रीमियम बॉटम नेविगेशन */}
      <nav style={{ position: 'fixed', bottom: '0', width: '100%', background: '#000', borderTop: theme.border, display: 'flex', justifyContent: 'space-around', padding: '15px', zIndex: '100' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🏠</button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>🔍</button>
        <button style={{ background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', borderRadius: '50%', width: '50px', height: '50px', marginTop: '-35px', boxShadow: '0 0 10px #b45309' }}>+</button>
        <button onClick={() => navigate('/messenger')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>💬</button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>👤</button>
      </nav>
    </div>
  );
};

export default PremiumAdminPage;
