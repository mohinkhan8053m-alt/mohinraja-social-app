import React, { useState, useContext } from 'react';
import Layout from './Layout.jsx';
import { getCurrencyData } from './CurrencyConfig';
import { UserContext } from './UserContext.jsx';
import { useApi } from './ApiContext.jsx';

const WalletPage = () => {
  const { user } = useContext(UserContext); // यूजर का बैलेंस यहाँ से आएगा
  const { serverUrl } = useApi();
  const [currency, setCurrency] = useState('IN');
  const [loading, setLoading] = useState(false);
  
  const data = getCurrencyData(currency);

  const calculateTotal = () => {
    const socialCommission = user.totalEarnings * 0.30; 
    const total = user.walletBalance + socialCommission;
    return total.toFixed(2);
  };

  const handleWithdraw = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${serverUrl}/api/withdraw`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.userId, amount: calculateTotal() })
      });
      if (response.ok) {
        alert("Success: Payout processed successfully!");
      }
    } catch (error) {
      alert("Error: Payout request failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
        <h2>💰 Master Wallet</h2>
        
        <select onChange={(e) => setCurrency(e.target.value)} style={selectStyle}>
          <option value="IN">🇮🇳 India (INR)</option>
          <option value="US">🇺🇸 Global (USD)</option>
          <option value="KW">🇰🇼 Kuwait (KWD)</option>
        </select>

        <div style={{ background: '#27ae60', color: '#fff', padding: '20px', borderRadius: '20px', marginBottom: '15px' }}>
          <p style={{ margin: 0, opacity: 0.9 }}>Direct Deals (100%)</p>
          <h2>{data.symbol} {user.walletBalance.toFixed(2)}</h2>
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '20px', borderRadius: '20px' }}>
          <p style={{ margin: 0, opacity: 0.8 }}>Social Revenue (30%)</p>
          <h2>{data.symbol} {(user.totalEarnings * 0.30).toFixed(2)}</h2>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Total Payable: {data.symbol} {calculateTotal()}</h3>
        </div>

        <button 
          onClick={handleWithdraw}
          disabled={loading}
          style={btnStyle(loading)}
        >
          {loading ? 'Processing...' : 'Auto-Withdraw All Funds'}
        </button>
      </div>
    </Layout>
  );
};

const selectStyle = { padding: '10px', width: '100%', borderRadius: '10px', marginBottom: '20px', border: '1px solid #ddd' };
const btnStyle = (loading) => ({ 
  marginTop: '20px', background: loading ? '#ccc' : '#FFD700', color: '#000', padding: '15px', border: 'none', borderRadius: '15px', width: '100%', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' 
});

export default WalletPage;
