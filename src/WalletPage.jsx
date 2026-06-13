import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { getCurrencyData } from './CurrencyConfig';

const WalletPage = () => {
  const [currency, setCurrency] = useState('INR');
  const [balance, setBalance] = useState(2000);
  const data = getCurrencyData(currency);

  // लड़की की कमाई का हिसाब (5 कॉइन/मिनट का फिक्स रेट)
  const calculatePayout = (coins) => {
    const total = coins * 0.5; // 1 कॉइन = 0.5 यूनिट
    return (total * (1 - data.commission)).toFixed(2); // आपका कमीशन कटकर
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>💰 Wallet & Earnings</h2>
        
        {/* करेंसी सेलेक्टर */}
        <select onChange={(e) => setCurrency(e.target.value)} style={{ padding: '10px', width: '100%' }}>
          <option value="INR">INR (India)</option>
          <option value="USD">USD (Global)</option>
          <option value="EUR">EUR (Europe)</option>
        </select>

        {/* अर्निंग डैशबोर्ड */}
        <div style={{ background: '#222', color: '#fff', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
          <p>Net Earnings (After {data.commission * 100}% Platform Fee)</p>
          <h1>{data.symbol} {calculatePayout(balance)}</h1>
          <button 
            onClick={() => alert("Withdrawal sent to your linked Bank/UPI/PayPal automatically!")}
            style={{ background: '#fff', color: '#000', padding: '10px', border: 'none', borderRadius: '5px', width: '100%' }}
          >
            Auto-Withdraw Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WalletPage;
