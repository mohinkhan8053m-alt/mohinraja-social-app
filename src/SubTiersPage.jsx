import React from 'react';
import Layout from './Layout.jsx';

const SubTiersPage = () => {
  const tiers = [
    { name: 'Basic Chat', price: 99, benefit: 'Standard Access' },
    { name: 'Gold Member', price: 499, benefit: 'Priority + Badge' },
    { name: 'VIP Access', price: 999, benefit: 'Direct Connect' }
  ];

  const handlePurchase = (tier) => {
    // यहाँ आपकी पेमेंट API कनेक्ट होगी
    alert(`Redirecting to Stripe: Processing ₹${tier.price} (70% Payout for Performer)`);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '500px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>👑 प्रीमियम मेंबरशिप</h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          अपने लिए सही टियर चुनें और एक्सक्लूसिव फीचर्स अनलॉक करें।
        </p>

        <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          {tiers.map((tier) => (
            <div key={tier.name} style={tierStyle(tier.name)}>
              <h3 style={{ margin: '0 0 5px 0' }}>{tier.name}</h3>
              <p style={{ fontSize: '12px', margin: 0 }}>{tier.benefit}</p>
              <h4 style={{ margin: '10px 0' }}>₹{tier.price}</h4>
              <button onClick={() => handlePurchase(tier)} style={btnStyle}>
                अभी खरीदें (Secure)
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', padding: '15px', background: '#fff9c4', borderRadius: '10px', fontSize: '11px', border: '1px solid #ffe082' }}>
          <p style={{ margin: 0 }}>✅ <b>पेआउट स्ट्रक्चर:</b> 70% क्रिएटर को, 30% प्लेटफॉर्म फीस।</p>
        </div>
      </div>
    </Layout>
  );
};

const tierStyle = (name) => ({
  border: name === 'Gold Member' ? '2px solid #FFD700' : '1px solid #eee',
  padding: '20px',
  borderRadius: '15px',
  background: '#fff',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
});

const btnStyle = { background: '#000', color: '#fff', padding: '12px 20px', borderRadius: '10px', width: '100%', border: 'none', cursor: 'pointer', fontWeight: 'bold' };

export default SubTiersPage;
