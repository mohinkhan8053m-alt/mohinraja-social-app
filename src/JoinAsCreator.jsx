import React, { useState } from 'react';
import Layout from './Layout.jsx';
import { useApi } from './ApiContext.jsx'; // सर्वर से कनेक्शन

const JoinAsCreator = () => {
  const { serverUrl } = useApi();
  const [formData, setFormData] = useState({ name: '', bio: '', rate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // सर्वर पर प्रोफाइल सेंड करने की लॉजिक
    console.log(`Sending new creator profile to ${serverUrl}/api/creators`);
    alert("मोइन भाई, नई क्रिएटर प्रोफाइल सिस्टम में जोड़ दी गई है! 70%Payout चालू है।");
  };

  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Poppins', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>✨ Join as a Creator</h2>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>बात करो और पैसे कमाओ! आपकी 70% कमाई सुरक्षित है।</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          <input 
            type="text" placeholder="अपना नाम लिखें" required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            style={inputStyle} 
          />
          <textarea 
            placeholder="अपने बारे में कुछ लिखें..." required 
            onChange={(e) => setFormData({...formData, bio: e.target.value})} 
            style={{...inputStyle, height: '80px'}} 
          />
          <input 
            type="number" placeholder="प्रति मिनट रेट (Coins)" required 
            onChange={(e) => setFormData({...formData, rate: e.target.value})} 
            style={inputStyle} 
          />
          <button type="submit" style={btnStyle}>Create My Profile</button>
        </form>

        <div style={{ marginTop: '25px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', fontSize: '12px', border: '1px dashed #ccc' }}>
          <p>📡 <b>Engine:</b> {serverUrl}</p>
          <p>✅ 70% Direct Payout (30% Platform Fee)</p>
          <p>✅ Auto-sync with Bank/Stripe</p>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' };
const btnStyle = { padding: '15px', background: '#000', color: '#fff', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };

export default JoinAsCreator;
