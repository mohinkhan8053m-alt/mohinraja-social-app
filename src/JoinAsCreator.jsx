import React, { useState } from 'react';
import Layout from './Layout.jsx';

const JoinAsCreator = () => {
  const [formData, setFormData] = useState({ name: '', bio: '', ratePerMinute: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ डेटा आपके सर्वर पर जाएगा और प्रोफाइल होमपेज पर ऑटोमैटिक दिखने लगेगी
    alert("Welcome! Your profile is live and you can start earning 70% per minute.");
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '500px', margin: '0 auto' }}>
        <h2>✨ Join as a Creator</h2>
        <p>बात करो और पैसे कमाओ! हर मिनट की कमाई का 70% सीधे आपके पास।</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          <input type="text" placeholder="अपना नाम लिखें" required style={inputStyle} />
          <textarea placeholder="अपने बारे में कुछ लिखें..." required style={inputStyle} />
          <input type="number" placeholder="प्रति मिनट रेट (आपकी कमाई)" required style={inputStyle} />
          <button type="submit" style={btnStyle}>Create My Profile</button>
        </form>

        <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          <p>✅ 70% Direct Payout | 30% Platform Service Fee</p>
          <p>✅ Auto-withdraw to Bank/Stripe</p>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #ccc' };
const btnStyle = { padding: '15px', background: '#000', color: '#fff', borderRadius: '10px', border: 'none', cursor: 'pointer' };

export default JoinAsCreator;
