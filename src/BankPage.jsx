import React, { useState, useEffect, useContext } from 'react';
import { useApi } from './ApiContext.jsx'; 
import { UserContext } from './UserContext.jsx'; 

const BankPage = () => {
  // सुधार: serverUrl की जगह proServer का उपयोग करें (क्योंकि बैंक डेटा प्रो सर्वर पर है)
  const { proServer } = useApi(); 
  const { user } = useContext(UserContext); 
  const [balance, setBalance] = useState(0); 
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // अगर टोकन नहीं है, तो रिक्वेस्ट न भेजें (सुरक्षा के लिए)
    if (!user?.token) { setLoading(false); return; }

    const fetchBalance = async () => {
      try {
        const response = await fetch(`${proServer}/api/get-balance`, {
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
  }, [proServer, user?.token]); // dependencies अपडेट कीं

  const handleWithdraw = async () => {
    if (!account) { alert("बैंक अकाउंट नंबर डालें!"); return; }
    if (!amount || Number(amount) > balance) { alert("अवैध राशि!"); return; }
    
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
