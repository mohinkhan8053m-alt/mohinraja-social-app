import React, { useState } from 'react';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    type: 'Product',
    monthlyBudget: '',
    contactEmail: '',
    phoneNumber: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Global Partner Data:", formData);
    alert("🚀 प्रपोजल सबमिट हो गया! मोइन राजा की टीम बहुत जल्द आपसे संपर्क करेगी।");
  };

  return (
    <div style={{ background: '#000', color: '#fff', padding: '40px', borderRadius: '30px', border: '2px solid #FFD700', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center' }}>🌍 Global Partnership Request</h2>
      
      {/* मोइन भाई, यहाँ आपका खुद का कांटेक्ट लिंक है, ताकि लोग आपको संपर्क करें */}
      <div style={{ textAlign: 'center', marginBottom: '20px', padding: '15px', background: '#222', borderRadius: '15px' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#ccc' }}>डायरेक्ट कांटेक्ट करें (Direct Contact):</p>
        <a href="https://wa.me/918053756591" style={{ color: '#25D366', fontWeight: 'bold', marginRight: '15px' }}>WhatsApp Me</a>
        <a href="mailto:mohinraja-r2m@gmail.com" style={{ color: '#FFD700', fontWeight: 'bold' }}>Email Me</a>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input placeholder="Brand/Company Name" required onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={inputStyle} />
        
        <input type="email" placeholder="Official Business Email" required onChange={(e) => setFormData({...formData, contactEmail: e.target.value})} style={inputStyle} />
        <input type="tel" placeholder="WhatsApp/Phone (+Country Code)" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} style={inputStyle} />
        <input placeholder="Company Website URL" onChange={(e) => setFormData({...formData, website: e.target.value})} style={inputStyle} />

        <select onChange={(e) => setFormData({...formData, type: e.target.value})} style={inputStyle}>
          <option value="Product">Product Launch</option>
          <option value="Brand">Established Brand</option>
          <option value="App">Mobile App</option>
          <option value="Website">Digital Website</option>
        </select>

        <input placeholder="Industry (e.g., Tech, Fashion, Crypto)" onChange={(e) => setFormData({...formData, industry: e.target.value})} style={inputStyle} />
        <input placeholder="Expected Monthly Budget" onChange={(e) => setFormData({...formData, monthlyBudget: e.target.value})} style={inputStyle} />
        
        <textarea placeholder="Tell us your global reach goal..." onChange={(e) => setFormData({...formData, message: e.target.value})} style={{...inputStyle, height: '80px'}} />

        <button type="submit" style={{ padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', cursor: 'pointer', color: '#000' }}>
          SUBMIT GLOBAL PROPOSAL 🚀
        </button>
      </form>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '15px', borderRadius: '10px', background: '#222', border: '1px solid #444', color: '#fff', boxSizing: 'border-box' };

export default PartnershipForm;
