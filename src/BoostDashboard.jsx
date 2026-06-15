import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoostDashboard = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [target, setTarget] = useState('Local'); 
  const [currency, setCurrency] = useState('INR');

  const getPrice = () => {
    if (currency === 'INR') {
      return target === 'Local' ? 2999 : 8999;
    } else {
      return target === 'Local' ? 59 : 179;
    }
  };

  const handlePayment = () => {
    if (!url) { alert("लिंक डालना जरूरी है मेरे भाई!"); return; }
    
    // यहाँ Stripe का असली पेमेंट गेटवे लिंक आएगा
    alert(`पेमेंट प्रोसेस शुरू: ${currency === 'INR' ? '₹' : '$'}${getPrice()} का बूस्ट एक्टिव हो रहा है...`);
    
    // पेमेंट के बाद वापस प्रोफाइल भेज रहे हैं
    setTimeout(() => {
      alert("बूस्टिंग सक्सेसफुल! ⚡");
      navigate('/profile'); 
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '10px' }}>← पीछे जाएं</button>
      <h2 style={{ textAlign: 'center' }}>🚀 Premium Global Boost</h2>
      
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px', background: '#fff' }}>
        <input placeholder="बूस्ट के लिए अपना पोस्ट लिंक डालें..." onChange={(e) => setUrl(e.target.value)} style={inputStyle} />
        
        <label>आपकी लोकेशन:</label>
        <select onChange={(e) => setCurrency(e.target.value)} style={inputStyle}>
          <option value="INR">India (INR)</option>
          <option value="USD">Other Country (USD)</option>
        </select>

        <label>बूस्टिंग टारगेट:</label>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
          <button onClick={() => setTarget('Local')} style={btnStyle(target === 'Local')}>सिर्फ मेरे देश में</button>
          <button onClick={() => setTarget('Global')} style={btnStyle(target === 'Global')}>पूरी दुनिया में</button>
        </div>

        <div style={{ fontSize: '22px', fontWeight: 'bold', margin: '20px 0', textAlign: 'center', color: '#0095f6' }}>
          कुल कीमत: {currency === 'INR' ? '₹' : '$'}{getPrice()}
        </div>

        <button onClick={handlePayment} style={payBtn}>Pay & Boost Now</button>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = (active) => ({ flex: 1, padding: '12px', background: active ? '#000' : '#eee', color: active ? '#fff' : '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' });
const payBtn = { width: '100%', padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' };

export default BoostDashboard;
