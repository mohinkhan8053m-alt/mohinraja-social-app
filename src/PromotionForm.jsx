import React, { useState } from 'react';
import Layout from './Layout.jsx'; 
// PriceHelper से कैलकुलेशन पावर इंपोर्ट कर रहे हैं
import { getGlobalPricing } from './PriceHelper'; 

const PromotionForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '',
    contactEmail: '',
    origin: 'IN',
    // इनिशियल स्टेट ही हेल्पर से आ रही है
    priceInfo: getGlobalPricing('IN') 
  });

  const handlePartnerRequest = () => {
    if (!formData.companyName || !formData.contactEmail) {
      alert("मोइन भाई, कंपनी का नाम और ईमेल जरूरी है!");
      return;
    }
    // अब यहाँ जो प्राइस दिखेगा, वही डील फाइनल होगी
    alert(`प्रपोजल सबमिट! मोइन राजा की टीम ${formData.priceInfo.displayPrice} की डील के लिए संपर्क करेगी।`);
  };

  return (
    <Layout>
      <div style={{ background: '#000', color: '#fff', padding: '40px', maxWidth: '600px', margin: 'auto', borderRadius: '30px', border: '2px solid #FFD700' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '28px' }}>🚀 Global Enterprise Partner</h2>
        <p style={{ textAlign: 'center', opacity: '0.8' }}>90+ AI Features | Worldwide Exposure</p>

        <input placeholder="Brand/Company Name" onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
        <input placeholder="Business Website/Link" onChange={(e) => setFormData({...formData, targetLink: e.target.value})} style={inputStyle} />
        <input placeholder="Official Email" onChange={(e) => setFormData({...formData, contactEmail: e.target.value})} style={inputStyle} />

        <div style={{ margin: '20px 0' }}>
          <label>Region of Origin:</label>
          <select 
            onChange={(e) => setFormData({...formData, origin: e.target.value, priceInfo: getGlobalPricing(e.target.value)})} 
            style={inputStyle}
          >
            <option value="IN">India</option>
            <option value="US">USA (USD)</option>
            <option value="UK">UK (GBP)</option>
            <option value="AE">UAE (AED)</option>
            <option value="KW">Kuwait (KWD)</option>
          </select>
        </div>

        <div style={{ textAlign: 'center', margin: '30px 0', border: '1px solid #333', padding: '20px', borderRadius: '15px' }}>
          <p>Package Price (30 Days):</p>
          <h1 style={{ color: '#FFD700' }}>{formData.priceInfo.displayPrice}</h1>
        </div>

        <button onClick={handlePartnerRequest} style={btnStyle}>
          SUBMIT PARTNERSHIP PROPOSAL
        </button>
      </div>
    </Layout>
  );
};

const inputStyle = { width: '100%', padding: '15px', margin: '10px 0', borderRadius: '10px', background: '#1a1a1a', border: '1px solid #444', color: '#fff', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', fontSize: '18px', cursor: 'pointer', color: '#000' };

export default PromotionForm;
