import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { getCurrencyData } from './CurrencyConfig';

const WalletPage = () => {
  const [currency, setCurrency] = useState('IN');
  
  // अलग-अलग कमाई का डेटा
  const [directDealIncome, setDirectDealIncome] = useState(15000); // कंपनियों से डायरेक्ट 100%
  const [socialEarnings, setSocialEarnings] = useState(2000);      // गिफ्ट/प्रीमियम (30% वाला)
  
  const data = getCurrencyData(currency);

  // गणना (Calculations)
  const calculateTotal = () => {
    const socialCommission = socialEarnings * 0.30; // सिर्फ 30% आपका
    const total = directDealIncome + socialCommission;
    return total.toFixed(2);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>💰 Master Wallet</h2>
        
        {/* करेंसी सेलेक्टर */}
        <select onChange={(e) => setCurrency(e.target.value)} style={{ padding: '10px', width: '100%', borderRadius: '10px', marginBottom: '20px' }}>
          <option value="IN">🇮🇳 India (INR)</option>
          <option value="US">🇺🇸 Global (USD)</option>
          <option value="KW">🇰🇼 Kuwait (KWD)</option>
        </select>

        {/* 1. Direct Business Income (100% आपका) */}
        <div style={{ background: '#27ae60', color: '#fff', padding: '20px', borderRadius: '20px', marginBottom: '15px' }}>
          <p style={{ margin: 0, opacity: 0.9 }}>Direct Company/Creator Deals (100%)</p>
          <h2 style={{ margin: '5px 0' }}>{data.symbol} {directDealIncome.toFixed(2)}</h2>
          <small>Stripe Gateway: No commission deducted</small>
        </div>

        {/* 2. Social Revenue (30% आपका) */}
        <div style={{ background: '#000', color: '#fff', padding: '20px', borderRadius: '20px' }}>
          <p style={{ margin: 0, opacity: 0.8 }}>Social/Gifting Revenue (30% Share)</p>
          <h2 style={{ margin: '5px 0' }}>{data.symbol} {(socialEarnings * 0.30).toFixed(2)}</h2>
          <small>Platform Fees Applied (70% shared with performers)</small>
        </div>

        {/* कुल योग */}
        <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
          <h3>Total Payable: {data.symbol} {calculateTotal()}</h3>
        </div>

        {/* विड्रॉल बटन */}
        <button 
          onClick={() => alert("Payout triggered! Stripe processing Direct Income (100%) and Commission (30%) separately.")}
          style={{ marginTop: '20px', background: '#FFD700', color: '#000', padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold' }}
        >
          Auto-Withdraw All Funds
        </button>
      </div>
    </Layout>
  );
};

export default WalletPage;
