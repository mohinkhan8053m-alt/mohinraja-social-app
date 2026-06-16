import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from './ApiContext.jsx'; 

const BoostDashboard = () => {
  const navigate = useNavigate();
  // हमने proServer और getBoostRates को context से निकाला है
  const { proServer, getBoostRates } = useApi(); 
  
  const [url, setUrl] = useState('');
  const [target, setTarget] = useState('Local'); 
  const [country, setCountry] = useState('IN');
  const [loading, setLoading] = useState(false);

  // आपकी पुरानी कॉन्फ़िगरेशन फाइल से डेटा
  const config = getBoostRates(country);
  const finalPrice = target === 'Local' ? config.price : config.price * 3;

  // स्ट्राइप पेमेंट गेटवे का लॉजिक
  const handleStripePayment = async () => {
    if (!url) { alert("लिंक डालना जरूरी है मेरे भाई!"); return; }
    setLoading(true);

    try {
      // स्ट्राइप के लिए सर्वर को रिक्वेस्ट भेज रहे हैं
      const response = await fetch(`${proServer}/api/create-stripe-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price: finalPrice,
          currency: config.symbol,
          link: url,
          target: target
        }),
      });

      const session = await response.json();
      
      if (session.url) {
        window.location.href = session.url; // स्ट्राइप के पेमेंट पेज पर भेज देगा
      } else {
        alert("पेमेंट गेटवे में कुछ दिक्कत है, दोबारा कोशिश करें।");
      }
    } catch (error) {
      console.error("Stripe Error:", error);
      alert("स्ट्राइप पेमेंट शुरू नहीं हो पाया।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>🚀 Premium Global Boost</h2>
      
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px', background: '#fff' }}>
        <label>अपना पोस्ट लिंक:</label>
        <input placeholder="https://instagram.com/..." onChange={(e) => setUrl(e.target.value)} style={inputStyle} />
        
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

        <button 
          onClick={handleStripePayment} 
          disabled={loading}
          style={payBtn}
        >
          {loading ? "Processing..." : "Pay with Stripe 💳"}
        </button>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const btnStyle = (active) => ({ flex: 1, padding: '12px', background: active ? '#000' : '#eee', color: active ? '#fff' : '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' });
const payBtn = { width: '100%', padding: '15px', background: '#635bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };

export default BoostDashboard;
