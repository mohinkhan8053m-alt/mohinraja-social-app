import React, { useState } from 'react';
import { useApi } from './ApiContext.jsx'; // सर्वर से जुड़ गया

const BankPage = () => {
  const { serverUrl } = useApi(); // अब सर्वर URL यहाँ आ गया
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    if (!account) { alert("कृपया बैंक अकाउंट नंबर डालें!"); return; }
    
    // यहाँ सर्वर को रिक्वेस्ट जाएगी
    console.log(`Withdraw request sent to ${serverUrl}/api/withdraw`);
    alert(`₹${amount} की विथड्रॉल रिक्वेस्ट सर्वर पर भेज दी गई है!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>🏦 Bank & Payouts</h2>
      
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '15px', background: '#f9f9f9' }}>
        <p style={{ fontSize: '18px' }}>Current Balance: <b>$245.00</b></p>
        
        <label>बैंक अकाउंट नंबर:</label>
        <input 
          style={inputStyle} 
          placeholder="XXXX-XXXX-XXXX" 
          onChange={(e) => setAccount(e.target.value)} 
        />
        
        <label>राशि (Amount):</label>
        <input 
          style={inputStyle} 
          placeholder="निकालने वाली राशि..." 
          onChange={(e) => setAmount(e.target.value)} 
        />

        <button 
          onClick={handleWithdraw} 
          style={{ width: '100%', padding: '15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Withdraw Funds (Secure)
        </button>
      </div>

      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
        📡 Connected to: {serverUrl}
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };

export default BankPage;
