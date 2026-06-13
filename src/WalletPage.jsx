import React, { useState } from 'react';
import Layout from './Layout.jsx';

const WalletPage = () => {
  const [balance, setBalance] = useState(200); // शुरुआती बैलेंस
  const [currency, setCurrency] = useState('INR'); // डिफ़ॉल्ट करेंसी

  const plans = [
    { id: 1, name: 'Starter Pack', coins: 500, price: 99 },
    { id: 2, name: 'Popular Pack', coins: 2000, price: 199 },
    { id: 3, name: 'Global VIP', coins: 5000, price: 499 },
  ];

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif', paddingBottom: '80px' }}>
        <h2 style={{ textAlign: 'center' }}>💰 My Wallet</h2>
        
        {/* बैलेंस कार्ड */}
        <div style={{ background: '#000', color: '#fff', padding: '20px', borderRadius: '20px', textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>Available Balance</p>
          <h1 style={{ margin: '10px 0' }}>{balance} Coins</h1>
        </div>

        {/* करेंसी सेलेक्टर (इंटरनेशनल के लिए) */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <select onChange={(e) => setCurrency(e.target.value)} style={{ padding: '8px', borderRadius: '10px' }}>
            <option value="INR">🇮🇳 INR (India)</option>
            <option value="USD">🇺🇸 USD (Global)</option>
            <option value="EUR">🇪🇺 EUR (Europe)</option>
          </select>
        </div>

        {/* रिचार्ज प्लान्स */}
        <h3>Recharge Plans</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {plans.map(plan => (
            <div key={plan.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #eee', borderRadius: '15px' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{plan.name}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{plan.coins} Coins</p>
              </div>
              <button 
                onClick={() => alert(`Redirecting to Payment Gateway for ${currency} ${plan.price}`)}
                style={{ padding: '10px 20px', background: '#000', color: '#fff', borderRadius: '10px', border: 'none' }}
              >
                Buy {currency === 'INR' ? '₹' : '$'}{plan.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WalletPage;
