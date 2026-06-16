import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // प्रो सर्वर
import { getCurrencyData } from './CurrencyConfig.js'; 

const PartnershipForm = () => {
  const { proServer } = useApi(); // मास्टर सर्वर
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ companyName: '', country: 'IN', target: 'Local', monthlyBudget: 0 });

  const config = getCurrencyData(formData.country) || { symbol: '₹', price: 1000 };
  const basePrice = formData.target === 'Local' ? config.price : config.price * 5;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${proServer}/api/partnerships`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, totalAmount: basePrice })
      });
      
      if(response.ok) {
        alert(`शानदार! आपका प्रपोजल हमारे सर्वर पर पहुँच गया है। बजट: ${config.symbol}${basePrice}`);
      }
    } catch (err) {
      alert("सर्वर से अभी लिंक नहीं हो पाया, बाद में ट्राई करें!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <div style={{ background: '#000', color: '#fff', padding: '30px', borderRadius: '25px', border: '2px solid #FFD700' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center' }}>🌍 Global Enterprise Deal</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input placeholder="Company Name" required onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
            
            <select onChange={(e) => setFormData({...formData, country: e.target.value})} style={inputStyle}>
              <option value="IN">🇮🇳 India (INR)</option>
              <option value="US">🇺🇸 USA (USD)</option>
              <option value="KW">🇰🇼 Kuwait (KWD)</option>
              <option value="UAE">🇦🇪 UAE (AED)</option>
            </select>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setFormData({...formData, target: 'Local'})} style={btnToggle(formData.target === 'Local')}>सिर्फ मेरी कंट्री</button>
              <button type="button" onClick={() => setFormData({...formData, target: 'Global'})} style={btnToggle(formData.target === 'Global')}>पूरी दुनिया</button>
            </div>

            <div style={{ padding: '15px', background: '#222', borderRadius: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#888' }}>कुल बजट (Monthly Cost):</p>
              <h3 style={{ margin: '5px 0', color: '#FFD700' }}>{config.symbol} {basePrice}</h3>
            </div>

            <textarea placeholder="प्रोडक्ट क्या है? वेबसाइट लिंक? ऐप का नाम?" required style={{...inputStyle, height: '100px'}} />
            
            <button type="submit" disabled={loading} style={submitBtn}>
              {loading ? 'SENDING...' : 'SUBMIT PROPOSAL 🚀'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

// स्टाइल्स
const inputStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #555', background: '#222', color: '#fff', width: '100%', boxSizing: 'border-box' };
const btnToggle = (active) => ({ padding: '10px', flex: 1, borderRadius: '10px', border: 'none', background: active ? '#FFD700' : '#333', color: active ? '#000' : '#fff', fontWeight: 'bold' });
const submitBtn = { padding: '15px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default PartnershipForm;
