import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx';
import { getCurrencyData } from './CurrencyConfig.js'; // यहाँ से रेट्स आएंगे

const PartnershipForm = () => {
  const { serverUrl } = useApi();
  const [formData, setFormData] = useState({
    companyName: '', country: 'IN', target: 'Local', monthlyBudget: 0
  });

  // देश और टारगेट के हिसाब से प्राइसिंग
  const config = getCurrencyData(formData.country);
  const basePrice = formData.target === 'Local' ? config.price : config.price * 5; // ग्लोबल पर 5 गुना

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`प्रपोजल सबमिट! टोटल बजट: ${config.symbol}${basePrice} | सर्वर: ${serverUrl}`);
  };

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Poppins' }}>
        <div style={{ background: '#000', color: '#fff', padding: '30px', borderRadius: '25px', border: '2px solid #FFD700' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center' }}>🌍 Global Enterprise Deal</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* कंपनी पूरी जानकारी भरे */}
            <input placeholder="Company Name" required onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
            
            {/* देश सिलेक्शन */}
            <select onChange={(e) => setFormData({...formData, country: e.target.value})} style={inputStyle}>
              <option value="IN">🇮🇳 India (INR)</option>
              <option value="US">🇺🇸 USA (USD)</option>
              <option value="KW">🇰🇼 Kuwait (KWD)</option>
              <option value="UAE">🇦🇪 UAE (AED)</option>
            </select>

            {/* लोकल या ग्लोबल टारगेट */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setFormData({...formData, target: 'Local'})} style={btnToggle(formData.target === 'Local')}>सिर्फ मेरी कंट्री</button>
              <button type="button" onClick={() => setFormData({...formData, target: 'Global'})} style={btnToggle(formData.target === 'Global')}>पूरी दुनिया</button>
            </div>

            {/* डायनामिक प्राइसिंग डिस्प्ले */}
            <div style={{ padding: '15px', background: '#222', borderRadius: '10px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#888' }}>कुल बजट (Monthly Cost):</p>
              <h3 style={{ margin: '5px 0', color: '#FFD700' }}>{config.symbol} {basePrice}</h3>
            </div>

            <textarea placeholder="प्रोडक्ट क्या है? वेबसाइट लिंक? ऐप का नाम?" required style={{...inputStyle, height: '100px'}} />
            
            <button type="submit" style={submitBtn}>SUBMIT PROPOSAL 🚀</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = { width: '100%', padding: '15px', borderRadius: '8px', background: '#222', border: '1px solid #444', color: '#fff' };
const btnToggle = (active) => ({ flex: 1, padding: '10px', background: active ? '#FFD700' : '#333', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' });
const submitBtn = { padding: '15px', background: '#FFD700', border: 'none', borderRadius: '8px', fontWeight: '900', color: '#000', cursor: 'pointer' };

export default PartnershipForm;
