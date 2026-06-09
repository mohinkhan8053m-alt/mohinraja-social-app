import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPricing } from './PriceHelper';

const PricingDashboard = ({ country }) => {
  const navigate = useNavigate();
  const pricing = getPricing(country);
  
  // क्लासिक प्रीमियम थीम (गोल्डन और ब्लैक)
  const theme = { 
    bg: '#000', 
    gold: '#fbbf24', 
    border: '1px solid #fbbf24', 
    cardBg: '#111' 
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, padding: '20px', color: '#fff', fontFamily: 'serif' }}>
      <h2 style={{ textAlign: 'center', color: theme.gold, marginBottom: '30px', fontSize: '28px' }}>Premium Plans</h2>
      
      {/* 4 प्लान्स - ग्रिड लेआउट में अलग-अलग */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* 1. VIP प्लान */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold, margin: '0 0 10px' }}>VIP Plan</h3>
          <p style={{ fontSize: '22px', margin: '10px 0', fontWeight: 'bold' }}>{pricing.symbol}{pricing.vip}</p>
          <button onClick={() => alert('VIP Payment Link...')} style={{ width: '100%', background: theme.gold, color: '#000', border: 'none', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Buy Now</button>
        </div>

        {/* 2. Local Ad प्लान */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold, margin: '0 0 10px' }}>Local Ad</h3>
          <p style={{ fontSize: '22px', margin: '10px 0', fontWeight: 'bold' }}>{pricing.symbol}{pricing.localAd}</p>
          <button onClick={() => alert('Promoting Link...')} style={{ width: '100%', background: '#166534', color: '#fff', border: 'none', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Promote</button>
        </div>

        {/* 3. AdFree प्लान */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold, margin: '0 0 10px' }}>Ad Free</h3>
          <p style={{ fontSize: '22px', margin: '10px 0', fontWeight: 'bold' }}>{pricing.symbol}{pricing.adFree}</p>
          <button onClick={() => alert('Upgrading...')} style={{ width: '100%', background: '#1e40af', color: '#fff', border: 'none', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Upgrade</button>
        </div>

        {/* 4. Global Ad प्लान */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold, margin: '0 0 10px' }}>Global Ad</h3>
          <p style={{ fontSize: '22px', margin: '10px 0', fontWeight: 'bold' }}>{pricing.symbol}{pricing.globalAd}</p>
          <button onClick={() => alert('Going Global...')} style={{ width: '100%', background: '#7f1d1d', color: '#fff', border: 'none', padding: '12px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Go Global</button>
        </div>

      </div>
    </div>
  );
};

export default PricingDashboard;
          
