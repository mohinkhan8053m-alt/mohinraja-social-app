import React, { useState } from 'react';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    companyName: '', industry: '', type: 'Product', monthlyBudget: '',
    contactEmail: '', phoneNumber: '', website: '', message: '', dealStatus: 'Pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // बजट को Number में बदल दिया ताकि NaN एरर न आए
    const finalData = { 
      ...formData, 
      monthlyBudget: Number(formData.monthlyBudget) || 0 
    };
    console.log("Global Partner Data Submitted:", finalData);
    alert("🚀 प्रपोजल सबमिट हो गया! मोइन राजा की टीम रिव्यू कर रही है।");
  };

  const toggleAdActivation = (status) => {
    setFormData({...formData, dealStatus: status});
    alert(`Ads for this Partner are now: ${status}`);
  };

  return (
    <div style={{ background: '#000', color: '#fff', padding: '40px', borderRadius: '30px', border: '2px solid #FFD700', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center' }}>🌍 Global Enterprise Partnership</h2>
      
      <div style={{ textAlign: 'center', margin: '20px 0', padding: '15px', background: '#111', borderRadius: '15px' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>Admin Deal Control:</p>
        <button onClick={() => toggleAdActivation('Active')} style={{ background: '#00ff00', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}>✅ Activate Deal & Ads</button>
        <button onClick={() => toggleAdActivation('Inactive')} style={{ background: '#ff0000', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', margin: '5px', color: '#fff' }}>❌ Cancel Deal</button>
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
        
        {/* यहाँ type="number" लगा दिया है ताकि NaN न आए */}
        <input type="number" placeholder="Expected Monthly Budget (Global Units)" onChange={(e) => setFormData({...formData, monthlyBudget: e.target.value})} style={inputStyle} />
        
        <textarea placeholder="Global reach goal..." onChange={(e) => setFormData({...formData, message: e.target.value})} style={{...inputStyle, height: '80px'}} />
        
        <button type="submit" style={{ padding: '20px', background: '#FFD700', border: 'none', borderRadius: '10px', fontWeight: '900', cursor: 'pointer', color: '#000' }}>
          SUBMIT GLOBAL PROPOSAL 🚀
        </button>
      </form>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #FFD700', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px' }}>📡 <b>Server Engine:</b> Ready for Global Lead Integration</p>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '15px', borderRadius: '10px', background: '#222', border: '1px solid #444', color: '#fff', boxSizing: 'border-box' };

export default PartnershipForm;
