import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; 
import { useApi } from './ApiContext.jsx'; // प्रो-चैनल इंपोर्ट
import { getGlobalPricing } from './PriceHelper'; 

const PromotionForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { category } = state || { category: 'starter' };
  const { callProSecure } = useApi(); // 👈 मास्टर सिक्योर चैनल का इस्तेमाल

  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '',
    origin: 'IN',
    scope: 'local',
    campaignType: 'Brand Awareness'
  });

  const [priceInfo, setPriceInfo] = useState(getGlobalPricing('IN', 'local', category));

  useEffect(() => {
    const updatedPrice = getGlobalPricing(formData.origin, formData.scope, category);
    setPriceInfo(updatedPrice);
  }, [formData.origin, formData.scope, category]);

  // प्रो-सिक्योर सबमिट हैंडलर
  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        category,
        price: priceInfo.displayPrice,
        timestamp: new Date().toISOString()
      };
      
      // सर्वर को सुरक्षित डेटा भेजना
      await callProSecure({ 
        action: 'SUBMIT_PROMOTION_PROPOSAL', 
        data: payload 
      });

      alert(`प्रपोजल सबमिट! कैटेगरी: ${category.toUpperCase()} | प्राइस: ${priceInfo.displayPrice}`);
      navigate('/home'); // सबमिट के बाद होम पर भेज दिया
    } catch (e) {
      console.error("Proposal Submission Error", e);
      alert("Something went wrong with the secure connection!");
    }
  };

  return (
    <Layout>
      <div style={{ background: '#000', color: '#fff', padding: '30px', maxWidth: '600px', margin: 'auto', borderRadius: '30px', border: '2px solid #FFD700' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700' }}>🚀 {category.toUpperCase()} Promotion</h2>
        
        <input placeholder="Brand/Company Name" onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
        <input placeholder="Target Link" onChange={(e) => setFormData({...formData, targetLink: e.target.value})} style={inputStyle} />

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <select onChange={(e) => setFormData({...formData, origin: e.target.value})} style={inputStyle}>
            <option value="IN">India (INR)</option>
            <option value="US">USA (USD)</option>
            <option value="UK">UK (GBP)</option>
            <option value="KW">Kuwait (KWD)</option>
          </select>
          
          <select onChange={(e) => setFormData({...formData, scope: e.target.value})} style={inputStyle}>
            <option value="local">Local</option>
            <option value="global">Global (5x Reach)</option>
          </select>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0', border: '1px solid #333', padding: '15px', borderRadius: '15px' }}>
          <p>Package Price (30 Days):</p>
          <h1 style={{ color: '#FFD700' }}>{priceInfo.displayPrice}</h1>
        </div>

        <button onClick={handleSubmit} style={btnStyle}>SUBMIT PROPOSAL & PAY</button>
      </div>
    </Layout>
  );
};

const inputStyle = { width: '100%', padding: '15px', margin: '8px 0', borderRadius: '10px', background: '#1a1a1a', border: '1px solid #444', color: '#fff', boxSizing: 'border-box' };
const btnStyle = { width: '100%', padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', fontSize: '18px', cursor: 'pointer', color: '#000' };

export default PromotionForm;
