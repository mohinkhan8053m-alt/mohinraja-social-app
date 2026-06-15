import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { getCurrencyData } from './CurrencyConfig';
import { useApi } from './ApiContext.jsx'; // तुम्हारा सर्वर कनेक्शन (प्लग)

const WalletPage = () => {
  // सर्वर और स्ट्राइप की चाबी यहाँ से आएगी
  const { serverUrl, stripeKey } = useApi();
  
  const [currency, setCurrency] = useState('IN');
  
  // तुम्हारा ओरिजिनल कमाई का डेटा (इसे बाद में सर्वर से बदल सकते हो)
  const [directDealIncome, setDirectDealIncome] = useState(15000); 
  const [socialEarnings, setSocialEarnings] = useState(2000);      
  
  const data = getCurrencyData(currency);

  // गणना (Calculations) - यह तुम्हारा ओरिजिनल लॉजिक है
  const calculateTotal = () => {
    const socialCommission = socialEarnings * 0.30; 
    const total = directDealIncome + socialCommission;
    return total.toFixed(2);
  };

  // विड्रॉल बटन का लॉजिक (अब इसमें सर्वर का एड्रेस भी जुड़ गया है)
  const handleWithdraw = () => {
    alert(`Payout triggered! Stripe processing Direct Income (100%) and Commission (30%) separately. 
    Server: ${serverUrl} | Key: ${stripeKey ? 'Active' : 'Missing'}`);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>💰 Master Wallet</h2>
        
        {/* करेंसी सेलेक्टर - कोई बदलाव नहीं किया */}
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

        {/* विड्रॉल बटन - यहाँ तुम्हारा ओरिजिनल लॉजिक है, बस क्लिक इवेंट को हैंडलर से जोड़ दिया है */}
        <button 
          onClick={handleWithdraw}
          style={{ marginTop: '20px', background: '#FFD700', color: '#000', padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold' }}
        >
          Auto-Withdraw All Funds
        </button>
      </div>
    </Layout>
  );
};

export default WalletPage;
