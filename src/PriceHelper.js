import React from 'react';
import { getPricing } from './PriceHelper'; // आपके हेल्पर फाइल का पाथ

const PricingDashboard = ({ country }) => {
  const pricing = getPricing(country);
  const theme = { bg: '#000', gold: '#fbbf24', border: '1px solid #fbbf24', cardBg: 'rgba(255, 255, 255, 0.05)' };

  return (
    <div style={{ background: theme.bg, padding: '20px', color: '#fff', fontFamily: 'serif' }}>
      <h2 style={{ textAlign: 'center', color: theme.gold, marginBottom: '30px', fontSize: '24px' }}>Premium Plans</h2>
      
      {/* यहाँ बटन और कार्ड्स पूरे पेज पर अलग-अलग और साफ़ दिखेंगे */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* VIP प्लान का बटन और कार्ड */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>VIP Plan</h3>
          <p style={{ fontSize: '20px', margin: '10px 0' }}>{pricing.symbol}{pricing.vip}</p>
          <button style={{ background: theme.gold, border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold' }}>Buy Now</button>
        </div>

        {/* Local Ad प्लान का बटन और कार्ड */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>Local Ad</h3>
          <p style={{ fontSize: '20px', margin: '10px 0' }}>{pricing.symbol}{pricing.localAd}</p>
          <button style={{ background: '#166534', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>Promote</button>
        </div>

        {/* AdFree प्लान का बटन और कार्ड */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>Ad Free</h3>
          <p style={{ fontSize: '20px', margin: '10px 0' }}>{pricing.symbol}{pricing.adFree}</p>
          <button style={{ background: '#1e40af', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>Upgrade</button>
        </div>

        {/* Global Ad प्लान का बटन और कार्ड */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>Global Ad</h3>
          <p style={{ fontSize: '20px', margin: '10px 0' }}>{pricing.symbol}{pricing.globalAd}</p>
          <button style={{ background: '#7f1d1d', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 'bold' }}>Go Global</button>
        </div>

      </div>
    </div>
  );
};

export default PricingDashboard;
          
