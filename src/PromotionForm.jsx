import React, { useState } from 'react';
import Layout from './Layout.jsx'; 
import { getGlobalPricing } from './PriceHelper'; 

const PromotionForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '',
    contactEmail: '',
    origin: 'IN',
    campaignType: 'Brand Awareness', // नया फीचर 1
    priceInfo: getGlobalPricing('IN') 
  });

  const handlePartnerRequest = () => {
    if (!formData.companyName || !formData.contactEmail) {
      alert("मोइन भाई, कंपनी का नाम और ईमेल जरूरी है!");
      return;
    }
    alert(`प्रपोजल सबमिट! मोइन राजा की टीम ${formData.priceInfo.displayPrice} की डील के लिए संपर्क करेगी।`);
  };

  return (
    <Layout>
      <div style={{ background: '#000', color: '#fff', padding: '40px', maxWidth: '600px', margin: 'auto', borderRadius: '30px', border: '2px solid #FFD700' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '28px' }}>🚀 Global Enterprise Partner</h2>
        
        {/* नया फीचर 2: मैजिक बटन (डील फाइनल करने के लिए) */}
        <div style={{ textAlign: 'center', marginBottom: '20px', background: '#1a1a1a', padding: '10px', borderRadius: '15px' }}>
            <p style={{ fontSize: '10px', color: '#aaa' }}>Admin Deal Control:</p>
            <button onClick={() => alert('Ads Live!')} style={{ background: '#00ff00', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>✅ Start Ads</button>
            <button onClick={() => alert('Ads Paused!')} style={{ background: '#ff0000', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '5px', color: '#fff' }}>❌ Stop</button>
        </div>

        <input placeholder="Brand/Company Name" onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
        <input placeholder="Business Website/Link" onChange={(e) => setFormData({...formData, targetLink: e.target.value})} style={inputStyle} />
        <input placeholder="Official Email" onChange={(e) => setFormData({...formData, contactEmail: e.target.value})} style={inputStyle} />

        {/* नया फीचर 3: कैंपेन का मकसद */}
        <select onChange={(e) => setFormData({...formData, campaignType: e.target.value})} style={inputStyle}>
          <option value="Brand Awareness">Brand Awareness</option>
          <option value="Product Launch">Product Launch</option>
          <option value="App Install">App Install</option>
        </select>

        <div style={{ margin: '20px 0' }}>
          <label>Region of Origin:</label>
          <select 
            onChange={(e) => setFormData({...formData, origin: e.target.value, priceInfo: getGlobalPricing(e.target.value)})} 
            style={inputStyle}
          >
            <option value="IN">India (INR)</option>
            <option value="US">USA (USD)</option>
            <option value="UK">UK (GBP)</option>
            <option value="AE">UAE (AED)</option>
          </select>
        </div>

        <div style={{ textAlign: 'center', margin: '30px 0', border: '1px solid #333', padding: '20px', borderRadius: '15px' }}>
          <p>Package Price (30 Days):</p>
          <h1 style={{ color: '#FFD700' }}>{formData.priceInfo.displayPrice}</h1>
        </div>

        <button onClick={handlePartnerRequest} style={btnStyle}>SUBMIT PARTNERSHIP PROPOSAL</button>
      </div>
    </Layout>
  );
};

const inputStyle = { width: '100%', padding: '15px', margin: '10px 0', borderRadius: '10px', background: '#1a1a1a', border: '1px solid #444', color: '#fff', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', fontSize: '18px', cursor: 'pointer', color: '#000' };

export default PromotionForm;
