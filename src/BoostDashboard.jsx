import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; 
import { getBoostRates } from './BoostConfig.js'; // नई फाइल से रेट्स लिए

const BoostDashboard = () => {
  const navigate = useNavigate();
  const { serverUrl } = useApi();
  const [url, setUrl] = useState('');
  const [target, setTarget] = useState('Local'); 
  const [country, setCountry] = useState('IN');

  // यहाँ से हम इंडिपेंडेंट ग्लोबल डेटा ले रहे हैं
  const config = getBoostRates(country);
  
  // कैलकुलेशन: ग्लोबल होने पर दाम 3 गुना
  const finalPrice = target === 'Local' ? config.price : config.price * 3;

  const handlePayment = () => {
    if (!url) { alert("लिंक डालना जरूरी है मेरे भाई!"); return; }
    
    // अब यह एकदम एक्यूरेट ग्लोबल प्राइसिंग दिखाएगा
    alert(`पेमेंट शुरू: ${config.symbol}${finalPrice} | सर्वर: ${serverUrl}`);
    
    setTimeout(() => {
      alert("बूस्टिंग सक्सेसफुल! ⚡");
      navigate('/profile'); 
    }, 1500);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>🚀 Premium Global Boost</h2>
      
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px', background: '#fff' }}>
        <input placeholder="अपना पोस्ट लिंक..." onChange={(e) => setUrl(e.target.value)} style={inputStyle} />
        
        <label>कंट्री चुनें:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle}>
          <option value="IN">🇮🇳 India</option>
          <option value="US">🇺🇸 USA</option>
          <option value="KW">🇰🇼 Kuwait</option>
          <option value="AE">🇦🇪 UAE</option>
        </select>

        <label>टारगेट:</label>
        <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
          <button onClick={() => setTarget('Local')} style={btnStyle(target === 'Local')}>सिर्फ मेरे देश में</button>
          <button onClick={() => setTarget('Global')} style={btnStyle(target === 'Global')}>पूरी दुनिया</button>
        </div>

        <div style={{ fontSize: '22px', fontWeight: 'bold', margin: '20px 0', textAlign: 'center', color: '#0095f6' }}>
          कुल कीमत: {config.symbol} {finalPrice}
        </div>

        <button onClick={handlePayment} style={payBtn}>Pay & Boost Now</button>
      </div>
    </div>
  );
};

// स्टाइल्स (वही जो आपने रखे थे)
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = (active) => ({ flex: 1, padding: '12px', background: active ? '#000' : '#eee', color: active ? '#fff' : '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' });
const payBtn = { width: '100%', padding: '15px', background: '#0095f6', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' };

export default BoostDashboard;
