import React from 'react';
import Layout from './Layout.jsx';

const SubTiersPage = () => {
  // यह सिर्फ 30% कमीशन वाले मॉडल्स के लिए है
  const tiers = [
    { name: 'Basic Chat', price: 99, commission: 0.30, benefit: 'Standard Access' },
    { name: 'Gold Member', price: 499, commission: 0.30, benefit: 'Priority + Badge' },
    { name: 'VIP Access', price: 999, commission: 0.30, benefit: 'Direct Connect' }
  ];

  const handlePurchase = (tier) => {
    // यहाँ स्ट्राइप का लॉजिक आएगा जो सिर्फ 30% काटकर आपको देगा
    alert(`Redirecting to Secure Stripe Checkout... 
    Commission Structure: 30% to Platform, 70% to Performer.`);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>👑 Premium Membership</h2>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Choose your tier to unlock exclusive features.
        </p>

        <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          {tiers.map((tier) => (
            <div key={tier.name} style={{ border: '2px solid #000', padding: '20px', borderRadius: '15px' }}>
              <h3>{tier.name}</h3>
              <p>{tier.benefit}</p>
              <h4>Price: ₹{tier.price}</h4>
              <button 
                onClick={() => handlePurchase(tier)}
                style={{ background: '#000', color: '#fff', padding: '10px 20px', borderRadius: '8px', width: '100%' }}
              >
                Buy Now (Secure)
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', padding: '15px', background: '#f0f0f0', borderRadius: '10px', fontSize: '12px' }}>
          <p><b>Note:</b> This payment gateway is configured for 30% platform commission. 
          Company/Direct Deals are processed via a separate 100% payout gateway.</p>
        </div>
      </div>
    </Layout>
  );
};

export default SubTiersPage;
