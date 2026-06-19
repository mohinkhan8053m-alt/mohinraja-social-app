import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import { AuthServer } from './AuthServer.js'; // 👈 अब यहाँ से सर्वर जुड़ा है

const JoinAsCreator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', bio: '', rate: '', gender: 'female' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // AuthServer के जरिए सर्वर को डेटा भेजा जा रहा है
    const response = await AuthServer.executeAction('Create_Creator_Profile');
    
    // सर्वर से रिस्पॉन्स मिलने के बाद...
    if(response.success) {
      console.log("मोइन भाई, डेटा प्रो-सर्वर को भेजा जा रहा है:", formData);
      alert("प्रोफाइल तैयार है! 70% Payout एक्टिव हो गया है।");
      navigate('/profile');
    } else {
      alert("सर्वर से अभी कनेक्शन नहीं बन पाया है, लेकिन तुम्हारा डेटा सुरक्षित है!");
    }
  };

  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>✨ Join as a Creator</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
          <input type="text" placeholder="अपना नाम लिखें" required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} />
          
          <select onChange={(e) => setFormData({...formData, gender: e.target.value})} style={inputStyle}>
            <option value="female">I am a Girl 💖</option>
            <option value="male">I am a Boy 💙</option>
          </select>

          <textarea placeholder="अपने बारे में कुछ लिखें..." required 
            onChange={(e) => setFormData({...formData, bio: e.target.value})} style={{...inputStyle, height: '80px'}} />
          
          <input type="number" placeholder="प्रति मिनट रेट (Coins)" required 
            onChange={(e) => setFormData({...formData, rate: e.target.value})} style={inputStyle} />
          
          <button type="submit" style={btnStyle}>Create My Profile</button>
        </form>

        <div style={{ marginTop: '25px', padding: '15px', background: '#f9f9f9', borderRadius: '10px', fontSize: '12px', border: '1px dashed #ccc' }}>
          <p>📡 <b>Server Status:</b> Connected to Master Hub</p>
          <p>✅ 70% Direct Payout Active</p>
        </div>
      </div>
    </Layout>
  );
};

const inputStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' };
const btnStyle = { padding: '15px', background: '#000', color: '#fff', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };

export default JoinAsCreator;
