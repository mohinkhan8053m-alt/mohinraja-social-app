import React, { useState, useEffect } from 'react';
import { PaymentServer } from './PaymentServer.js'; // मास्टर पेमेंट सर्वर
import { DataServer } from './DataServer.js';       // मास्टर डेटा सर्वर

const WalletPage = () => {
  const [wallet, setWallet] = useState({ balance: 0, earnings: 0, history: [] });
  const [processing, setProcessing] = useState(false);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    // 1. पेमेंट सर्वर से डेटा फेच करें
    PaymentServer.getWalletData().then(data => {
      setWallet(data);
      setCurrency(data.currency);
    });
  }, []);

  const handleWithdraw = async () => {
    setProcessing(true);
    // 2. पेमेंट सर्वर के जरिए विथड्रॉल
    const result = await PaymentServer.withdrawFunds(wallet.totalPayable);
    if (result.success) {
      alert("✅ विथड्रॉल सफल! पैसा आपके बैंक में भेज दिया गया है।");
      setWallet({ ...wallet, balance: 0, earnings: 0 }); // वॉलेट रिसेट
    } else {
      alert("❌ ट्रांजेक्शन फेल: " + result.message);
    }
    setProcessing(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', background: '#f4f4f4', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>💰 Master Wallet ({currency.toUpperCase()})</h2>

      {/* बैलेंस कार्ड्स */}
      <div style={cardStyle('#27ae60')}>
        <p>Direct Deals</p>
        <h2>{currency.toUpperCase()} {wallet.balance.toFixed(2)}</h2>
      </div>

      <div style={cardStyle('#000', '#fff')}>
        <p>Social/Gifting (30% Share)</p>
        <h2>{currency.toUpperCase()} {wallet.earnings.toFixed(2)}</h2>
      </div>

      {/* नया फीचर: विथड्रॉल हिस्ट्री */}
      <div style={{ marginTop: '20px' }}>
        <h4>📜 Recent Transactions</h4>
        {wallet.history.map((t, i) => (
          <div key={i} style={historyItem}>{t.date} | {t.amount} {currency}</div>
        ))}
      </div>

      <button onClick={handleWithdraw} disabled={processing} style={btnStyle(processing)}>
        {processing ? 'Processing...' : 'Auto-Withdraw All Funds'}
      </button>
    </div>
  );
};

// स्टाइल्स
const cardStyle = (bg, color = '#fff') => ({ background: bg, color: color, padding: '20px', borderRadius: '20px', marginBottom: '15px' });
const historyItem = { padding: '10px', background: '#fff', borderBottom: '1px solid #eee', fontSize: '12px' };
const btnStyle = (p) => ({ marginTop: '20px', background: p ? '#ccc' : '#FFD700', padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold', cursor: 'pointer' });

export default WalletPage;
