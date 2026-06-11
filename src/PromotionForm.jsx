import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PromotionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    targetLink: '', // यहाँ से यूजर अपना प्रोडक्ट या प्रोफाइल लिंक डालेगा
    adCategory: 'Normal',
    amount: 500 
  });

  const handlePromotionSubmission = async () => {
    // 1. डेटा वैलिडेशन
    if (!formData.companyName || !formData.targetLink) {
      alert("कृपया सभी जानकारी भरें!");
      return;
    }

    // 2. पेमेंट गेटवे का लॉजिक (यहाँ तुम्हारा Razorpay या Stripe का लिंक आएगा)
    console.log("Saving Ad Link to Database:", formData.targetLink);
    
    // 3. पेमेंट पेज पर रीडायरेक्ट करना
    alert("पेमेंट गेटवे पर जा रहे हैं...");
    
    // मान लो पेमेंट के बाद डेटाबेस में सेव होगा
    // navigate('/payment-success'); 
    
    // अभी के लिए एक डमी पेमेंट लिंक खोलते हैं
    window.location.href = "https://rzp.io/l/your-payment-link"; // यहाँ अपना पेमेंट लिंक डालो
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ddd', borderRadius: '15px' }}>
      <h2 style={{ fontFamily: 'cursive' }}>🚀 Boost Your Business</h2>
      
      <input 
        placeholder="कंपनी या प्रोफाइल का नाम" 
        onChange={(e) => setFormData({...formData, companyName: e.target.value})} 
        style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px' }} 
      />
      
      <input 
        placeholder="प्रमोशन लिंक (YouTube/Insta/Website)" 
        onChange={(e) => setFormData({...formData, targetLink: e.target.value})} 
        style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px' }} 
      />

      <div style={{ margin: '10px 0' }}>
        <label>प्रमोशन टाइप:</label>
        <select onChange={(e) => setFormData({...formData, adCategory: e.target.value})} style={{ width: '100%', padding: '10px' }}>
          <option value="Normal">Normal (₹500)</option>
          <option value="Premium">Premium (₹1000)</option>
        </select>
      </div>

      <button 
        onClick={handlePromotionSubmission} 
        style={{ width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '20px' }}>
        PAY & BOOST NOW
      </button>
    </div>
  );
};

export default PromotionForm;
