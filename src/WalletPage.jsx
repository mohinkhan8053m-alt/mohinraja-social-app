import React, { useState, useContext } from 'react';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';
// मास्टर इंजन से अपना नया फंक्शन मंगाया
import { getLocalizedPrice } from './PriceHelper.js'; 

const WalletPage = () => {
  const { user, setUser } = useContext(UserContext);
  const { serverUrl } = useApi();
  const [processing, setProcessing] = useState(false);

  // ग्लोबल करेंसी कन्वर्जन (यूजर की कंट्री के हिसाब से)
  const currencyInfo = getLocalizedPrice(user.countryCode || 'IN', 1); // 1 USD का बेस रेट

  // कुल कमाई की गणना
  const calculateTotal = () => {
    const socialCommission = user.totalEarnings * 0.30; 
    return (user.walletBalance + socialCommission).toFixed(2);
  };

  const handleWithdraw = async () => {
    setProcessing(true);
    try {
      const response = await fetch(`${serverUrl}/api/withdraw`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify({ 
          userId: user.userId, 
          amount: calculateTotal(),
          currency: currencyInfo.currency // सर्वर को करेंसी भी भेज रहे हैं
        })
      });

      if (response.ok) {
        setUser(prev => ({ ...prev, walletBalance: 0, totalEarnings: 0 }));
      }
    } catch (error) {
      console.error("Payout Failed:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins', color: '#000' }}>
        <h2>💰 Master Wallet ({currencyInfo.currency.toUpperCase()})</h2>

        {/* 1. Direct Income Box */}
        <div style={cardStyle('#27ae60')}>
          <p style={{ margin: 0 }}>Direct Company Deals (100%)</p>
          <h2>{currencyInfo.currency.toUpperCase()} {user.walletBalance.toFixed(2)}</h2>
        </div>

        {/* 2. Social Revenue Box */}
        <div style={cardStyle('#000', '#fff')}>
          <p style={{ margin: 0, opacity: 0.8 }}>Social/Gifting Share (30%)</p>
          <h2>{currencyInfo.currency.toUpperCase()} {(user.totalEarnings * 0.30).toFixed(2)}</h2>
        </div>

        {/* Total Box */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Total Payable: {calculateTotal()} {currencyInfo.currency.toUpperCase()}</h3>
        </div>

        {/* Withdraw Button */}
        <button 
          onClick={handleWithdraw}
          disabled={processing}
          style={btnStyle(processing)}
        >
          {processing ? 'Processing Payout...' : 'Auto-Withdraw All Funds'}
        </button>
      </div>
    </Layout>
  );
};

const cardStyle = (bg, color = '#fff') => ({ 
  background: bg, color: color, padding: '20px', borderRadius: '20px', marginBottom: '15px' 
});

const btnStyle = (processing) => ({ 
  marginTop: '20px', background: processing ? '#ccc' : '#FFD700', color: '#000', 
  padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold', cursor: 'pointer' 
});

export default WalletPage;
