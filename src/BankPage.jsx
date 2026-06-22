import React, { useState } from 'react';
import { PaymentServer } from './PaymentServer.js';

const BankPage = () => {
  const [loading, setLoading] = useState(false);
  
  // डमी डेटा (इसे आप अपनी API से कनेक्ट कर सकते हैं)
  const callEarnings = 500; 
  const giftEarnings = 250; 
  const totalBalance = callEarnings + giftEarnings;

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setLoading(true);

    const withdrawData = {
      accountNumber: e.target.accountNumber.value,
      amount: totalBalance,
      currency: "USD",
      timestamp: new Date().toISOString()
    };

    const response = await PaymentServer.processWithdrawal(withdrawData);
    setLoading(false);
    
    if (response.success) {
      alert("Success! आपकी विड्रॉल रिक्वेस्ट मिल गई है। पैसा 24 घंटे में आपके खाते में आ जाएगा।");
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto', padding: '20px', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Global Wallet 🌍</h2>
      
      {/* 1. अर्निंग डिस्प्ले */}
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <p style={{ margin: '5px 0' }}>Call Earnings: <b>${callEarnings}</b></p>
        <p style={{ margin: '5px 0' }}>Gift Earnings: <b>${giftEarnings}</b></p>
        <hr style={{ border: '0.5px solid #ddd' }} />
        <h3 style={{ margin: '10px 0', color: '#ff4757' }}>Total to Withdraw: ${totalBalance}</h3>
      </div>

      {/* 2. विड्रॉल फॉर्म */}
      <form onSubmit={handleWithdraw}>
        <input 
          name="accountNumber" 
          type="text" 
          placeholder="Enter Bank Account / UPI ID" 
          required 
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ width: '100%', padding: '15px', background: '#2ed573', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? "Processing..." : "Withdraw Funds"}
        </button>
      </form>

      {/* 3. टाइम नोट */}
      <p style={{ fontSize: '13px', color: '#666', textAlign: 'center', marginTop: '15px' }}>
        ⏳ Payouts are processed and credited within <b>24 hours</b>.
      </p>
    </div>
  );
};

export default BankPage;
