import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { getCurrencyData } from './CurrencyConfig';

const WalletPage = () => {
  const [currency, setCurrency] = useState('IN'); // 'IN', 'US', 'KW'
  const [balance, setBalance] = useState(2000); // टोटल कॉइन्स
  const [giftEarnings, setGiftEarnings] = useState(500); // मान लीजिए 500 कॉइन गिफ्ट से आए
  
  const data = getCurrencyData(currency);

  // आपका कुल कमीशन (कॉल + गिफ्ट दोनों का)
  const calculateTotalEarnings = () => {
    const callCommission = (balance * data.payoutRate) * data.commission;
    const giftCommission = giftEarnings * data.giftCommission;
    return (callCommission + giftCommission).toFixed(2);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>💰 Wallet & Earnings</h2>
        
        {/* देश के हिसाब से करेंसी सेलेक्टर */}
        <select onChange={(e) => setCurrency(e.target.value)} style={{ padding: '10px', width: '100%', borderRadius: '10px' }}>
          <option value="IN">🇮🇳 India (INR)</option>
          <option value="US">🇺🇸 Global (USD)</option>
          <option value="KW">🇰🇼 Kuwait (KWD)</option>
        </select>

        {/* अर्निंग डैशबोर्ड (आपका कमीशन) */}
        <div style={{ background: '#000', color: '#fff', padding: '20px', borderRadius: '20px', marginTop: '20px' }}>
          <p style={{ opacity: 0.8 }}>Your Net Profit (30% Commission)</p>
          <h1 style={{ margin: '10px 0' }}>{data.symbol} {calculateTotalEarnings()}</h1>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '10px' }}>
            <span>From Calls: {data.symbol} {(balance * data.payoutRate * data.commission).toFixed(2)}</span>
            <span>From Gifts: {data.symbol} {(giftEarnings * data.giftCommission).toFixed(2)}</span>
          </div>
        </div>

        {/* विड्रॉल बटन */}
        <button 
          onClick={() => alert("Payout successfully initiated to your registered Bank/PayPal!")}
          style={{ marginTop: '20px', background: '#FFD700', color: '#000', padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold' }}
        >
          Auto-Withdraw Now
        </button>
      </div>
    </Layout>
  );
};

export default WalletPage;
