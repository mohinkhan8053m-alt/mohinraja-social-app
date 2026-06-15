import React, { useState, useEffect, useContext } from 'react';
import { useApi } from './ApiContext.jsx'; // सर्वर कनेक्शन यहाँ से आ रहा है
import { UserContext } from './UserContext.jsx'; // यूजर डेटा के लिए

const BankPage = () => {
  const { serverUrl } = useApi(); // अब सर्वर URL डायनामिक है
  const { user } = useContext(UserContext); // यूजर का टोकन/ID यहीं से मिलेगा
  const [balance, setBalance] = useState(0); // डमी बैलेंस हटा दिया, अब 0 है
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);

  // सर्वर से असली बैलेंस सिंक करने वाला फंक्शन
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/get-balance`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await response.json();
        setBalance(data.currentBalance || 0);
      } catch (error) {
        console.error("बैलेंस लाने में दिक्कत:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, [serverUrl, user.token]);

  const handleWithdraw = async () => {
    if (!account) { alert("बैंक अकाउंट नंबर डालें!"); return; }
    if (!amount || amount > balance) { alert("अवैध राशि!"); return; }
    
    // सर्वर को विथड्रॉल रिक्वेस्ट भेजना
    alert(`₹${amount} की विथड्रॉल रिक्वेस्ट भेजी जा रही है...`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins' }}>
      <h2 style={{ textAlign: 'center' }}>🏦 Bank & Payouts</h2>
      
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '15px', background: '#f9f9f9' }}>
        <p style={{ fontSize: '18px' }}>
          Current Balance: <b>{loading ? "लोड हो रहा है..." : `₹${balance.toFixed(2)}`}</b>
        </p>
        
        <label>बैंक अकाउंट नंबर:</label>
        <input style={inputStyle} placeholder="XXXX-XXXX-XXXX" onChange={(e) => setAccount(e.target.value)} />
        
        <label>राशि (Amount):</label>
        <input style={inputStyle} placeholder="निकालने वाली राशि..." onChange={(e) => setAmount(e.target.value)} />

        <button onClick={handleWithdraw} style={btnStyle}>Withdraw Funds</button>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default BankPage;
