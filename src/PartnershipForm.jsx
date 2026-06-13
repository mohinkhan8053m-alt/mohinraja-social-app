import React, { useState } from 'react';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '', // फैशन, टेक, एजुकेशन, आदि
    type: 'Product', // Product, Brand, App, Website
    monthlyBudget: '', // कंपनी का बजट जानने के लिए
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ से आप अपनी Gmail पर एक बहुत ही तगड़ा प्रोफेशनल ईमेल भेजेंगे
    console.log("Partner details collected:", formData);
    alert("आपका प्रपोजल हमारे बोर्ड के पास पहुँच गया है। मोइन राजा की टीम आपसे जल्द संपर्क करेगी।");
  };

  return (
    <div style={{ background: '#000', color: '#fff', padding: '40px', borderRadius: '30px', border: '2px solid #FFD700' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center' }}>Enterprise Partnership Request</h2>
      <p style={{ textAlign: 'center' }}>Only for Brands that want to scale globally using AI.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input placeholder="Brand/Company Name" onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
        
        <select onChange={(e) => setFormData({...formData, type: e.target.value})} style={inputStyle}>
          <option value="Product">Product Launch</option>
          <option value="Brand">Established Brand</option>
          <option value="App">Mobile App</option>
          <option value="Website">Digital Website</option>
        </select>

        <input placeholder="Industry (e.g., Tech, Fashion, Crypto)" onChange={(e) => setFormData({...formData, industry: e.target.value})} style={inputStyle} />
        
        <textarea placeholder="Tell us your global reach goal..." onChange={(e) => setFormData({...formData, message: e.target.value})} style={{...inputStyle, height: '100px'}} />

        <button type="submit" style={{ padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', cursor: 'pointer' }}>
          SUBMIT FOR REVIEW
        </button>
      </form>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '15px', borderRadius: '10px', background: '#222', border: '1px solid #444', color: '#fff' };

export default PartnershipForm;
