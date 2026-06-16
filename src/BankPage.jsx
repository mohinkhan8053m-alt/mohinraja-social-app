import React, { useState, useEffect, useContext } from 'react';
import { useApi } from './ApiContext.jsx'; 
import { UserContext } from './UserContext.jsx'; 

const BankPage = () => {
  const { proServer } = useApi(); 
  const { user } = useContext(UserContext); 
  const [balance, setBalance] = useState(0); 
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // नया फीचर: एरर हैंडलिंग के लिए

  useEffect(() => {
    if (!user?.token) { setLoading(false); return; }

    const fetchBalance = async () => {
      try {
        const response = await fetch(`${proServer}/api/get-balance`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        
        if (!response.ok) throw new Error("सर्वर से डेटा नहीं मिल पाया!");
        
        const data = await response.json();
        setBalance(data.currentBalance || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, [proServer, user?.token]);

  const handleWithdraw = async () => {
    // आपके द्वारा दिए गए फीचर्स को वापस ला रहा हूँ:
    if (!account) { alert("बैंक अकाउंट नंबर डालना अनिवार्य है मेरे भाई!"); return; }
    if (!amount) { alert("निकालने वाली राशि तो बताओ!"); return; }
    if (Number(amount) > balance) { alert("जितना बैलेंस है, उससे ज्यादा नहीं निकाल सकते!"); return; }
    
    // यहाँ आपकी ओरिजिनल रिक्वेस्ट जाएगी
    alert(`प्रक्रिया शुरू: ${amount} रुपये, अकाउंट: ${account} पर भेजे जा रहे हैं...`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>🏦 Bank & Payouts</h2>
      
      {/* एरर दिखाने का फीचर जो आपके ओरिजिनल कोड की खूबसूरती थी */}
      {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</div>}

      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '15px', background: '#f9f9f9' }}>
        <p style={{ fontSize: '18px' }}>
          Current Balance: <b>{loading ? "लोड हो रहा है..." : `₹${balance.toFixed(2)}`}</b>
        </p>
        
        <label>बैंक अकाउंट नंबर:</label>
        <input style={inputStyle} placeholder="XXXX-XXXX-XXXX" value={account} onChange={(e) => setAccount(e.target.value)} />
        
        <label>राशि (Amount):</label>
        <input style={inputStyle} type="number" placeholder="निकालने वाली राशि..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        
        <button onClick={handleWithdraw} style={btnStyle}>Withdraw Funds</button>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', marginTop: '5px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default BankPage;
