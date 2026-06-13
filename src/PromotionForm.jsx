import React, { useState } from 'react';
import Layout from './Layout.jsx'; 

const PromotionForm = () => {
  // मोइन भाई का फिक्स प्रीमियम लॉजिक
  const getDynamicPrice = (origin) => {
    return origin === 'IN' ? 1000000 : 2000000; // 10 लाख या 20 लाख
  };

  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '',
    contactEmail: '',
    origin: 'IN', // Default India
    amount: 1000000
  });

  const handlePartnerRequest = () => {
    if (!formData.companyName || !formData.contactEmail) {
      alert("मोइन भाई, कंपनी का नाम और ईमेल जरूरी है!");
      return;
    }
    // अब यहाँ से आप क्लाइंट को सीधे पार्टनरशिप पिच पर ले जाएंगे
    alert(`प्रपोजल सबमिट! मोइन राजा की टीम ₹${formData.amount.toLocaleString()} की डील के लिए संपर्क करेगी।`);
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
          <select onChange={(e) => setFormData({...formData, origin: e.target.value, amount: getDynamicPrice(e.target.value)})} style={inputStyle}>
            <option value="IN">India (Base: ₹10 Lakhs)</option>
            <option value="US">Foreign (Base: ₹20 Lakhs)</option>
          </select>
        </div>

        <div style={{ textAlign: 'center', margin: '30px 0', border: '1px solid #333', padding: '20px', borderRadius: '15px' }}>
          <p>Package Price (30 Days):</p>
          <h1 style={{ color: '#FFD700' }}>{formData.origin === 'IN' ? '₹10,00,000' : '₹20,00,000'}</h1>
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
