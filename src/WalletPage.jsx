import React, { useState, useContext } from 'react';
import Layout from './Layout.jsx';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';
import { getPricing } from './PriceHelper.js'; // आपका नया ग्लोबल प्राइसिंग इंजन

const WalletPage = () => {
  const { user, setUser } = useContext(UserContext); // यूजर डेटा का एक्सेस
  const { serverUrl } = useApi(); // सर्वर का लिंक
  const [processing, setProcessing] = useState(false);

  // ग्लोबल प्राइसिंग उठा रहे हैं यूजर की लोकेशन के हिसाब से
  const prices = getPricing(user.countryCode || 'IN'); 

  // कुल कमाई की गणना (Direct + 30% Social Share)
  const calculateTotal = () => {
    const socialCommission = user.totalEarnings * 0.30; 
    return (user.walletBalance + socialCommission).toFixed(2);
  };

  // विड्रॉल फंक्शन - सीधा सर्वर से कनेक्टेड
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
          amount: calculateTotal() 
        })
      });

      if (response.ok) {
        // विड्रॉल के बाद यूजर का बैलेंस 0 कर देंगे (सक्सेस पर)
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
        <h2>💰 Master Wallet</h2>

        {/* 1. Direct Income Box */}
        <div style={cardStyle('#27ae60')}>
          <p style={{ margin: 0 }}>Direct Company Deals (100%)</p>
          <h2>₹ {user.walletBalance.toFixed(2)}</h2>
        </div>

        {/* 2. Social Revenue Box */}
        <div style={cardStyle('#000', '#fff')}>
          <p style={{ margin: 0, opacity: 0.8 }}>Social/Gifting Share (30%)</p>
          <h2>₹ {(user.totalEarnings * 0.30).toFixed(2)}</h2>
        </div>

        {/* Total Box */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Total Payable: {calculateTotal()}</h3>
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

// Styles
const cardStyle = (bg, color = '#fff') => ({ 
  background: bg, color: color, padding: '20px', borderRadius: '20px', marginBottom: '15px' 
});

const btnStyle = (processing) => ({ 
  marginTop: '20px', background: processing ? '#ccc' : '#FFD700', color: '#000', 
  padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold', cursor: 'pointer' 
});

export default WalletPage;
