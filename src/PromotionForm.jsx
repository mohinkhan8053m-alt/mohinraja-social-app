import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx'; // मास्टर लेआउट जोड़ने के लिए

const PromotionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '',
    adCategory: 'Normal',
    amount: 500,
    contactEmail: '', // नया फीचर
    adDescription: '', // नया फीचर
    targetAudience: 'Global' // नया फीचर
  });

  const handlePromotionSubmission = async () => {
    if (!formData.companyName || !formData.targetLink) {
      alert("कृपया नाम और लिंक जरूर भरें!");
      return;
    }
    // पेमेंट लॉजिक
    alert(`पेमेंट गेटवे पर जा रहे हैं: ₹${formData.amount}`);
    window.location.href = "https://rzp.io/l/your-payment-link";
  };

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff', borderRadius: '20px', border: '1px solid #eee' }}>
        <h2 style={{ fontFamily: 'cursive', textAlign: 'center' }}>🚀 RangManch Ad Center</h2>
        
        {/* इनपुट फील्ड्स (अब ज्यादा फीचर्स के साथ) */}
        <input placeholder="ब्रांड/कंपनी का नाम" onChange={(e) => setFormData({...formData, companyName: e.target.value})} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
        
        <input placeholder="प्रमोशन लिंक (URL)" onChange={(e) => setFormData({...formData, targetLink: e.target.value})} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

        <input placeholder="संपर्क ईमेल (Contact Email)" onChange={(e) => setFormData({...formData, contactEmail: e.target.value})} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

        <textarea placeholder="ऐड का विवरण (Description)" onChange={(e) => setFormData({...formData, adDescription: e.target.value})} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd', height: '80px' }}></textarea>

        {/* कैटेगरी और प्राइसिंग लॉजिक */}
        <div style={{ margin: '10px 0' }}>
          <label>प्रमोशन प्लान चुनें:</label>
          <select onChange={(e) => {
            const price = e.target.value === 'Premium' ? 1000 : 500;
            setFormData({...formData, adCategory: e.target.value, amount: price});
          }} style={{ width: '100%', padding: '12px', borderRadius: '8px' }}>
            <option value="Normal">Normal Plan (₹500)</option>
            <option value="Premium">Premium Plan (₹1000 - 2x Reach)</option>
          </select>
        </div>

        {/* डायनामिक प्राइस बटन */}
        <button 
          onClick={handlePromotionSubmission} 
          style={{ width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' }}>
          PAY ₹{formData.amount} & BOOST NOW
        </button>

        {/* सर्वर की जगह */}
        <div style={{ marginTop: '30px', padding: '10px', fontSize: '12px', color: '#888', textAlign: 'center' }}>
          📡 <b>Ad-Server Sync:</b> Payment tracking enabled.
        </div>
      </div>
    </Layout>
  );
};

export default PromotionForm;
