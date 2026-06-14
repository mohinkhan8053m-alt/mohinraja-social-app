import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // सर्वर हैंडलर: यहाँ आपका सर्वर/बैकएंड जुड़ेगा
  const handleAuthAction = (actionName) => {
    console.log(`📡 Server Engine: Initiating ${actionName}...`);
    // भविष्य में यहाँ Firebase या API कॉल आएगी
    if (actionName === 'Login') navigate('/home');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* 1 & 2: ग्लोबल और लोकल बटन (ऊपरी पट्टी) */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button style={topBtnStyle}>🌍 GLOBAL</button>
        <button style={topBtnStyle}>LOCAL</button>
      </div>

      <div style={{ width: '100%', maxWidth: '380px', border: '1px solid #ddd', padding: '20px', borderRadius: '20px' }}>
        
        {/* 3: फोन इनपुट (सर्च बार के साथ) */}
        <PhoneInput
          country={'in'}
          enableSearch={true}
          value={phone}
          onChange={setPhone}
          inputStyle={{ width: '100%', padding: '20px 0 20px 45px' }}
        />

        {/* 4, 5, 6: सोशल लॉगिन बटन */}
        <button style={btnStyle} onClick={() => handleAuthAction('Google')}>Continue with Google</button>
        <button style={btnStyle} onClick={() => handleAuthAction('Facebook')}>Continue with Facebook</button>
        <button style={btnStyle} onClick={() => handleAuthAction('Apple')}>Continue with Apple</button>

        {/* ईमेल और पासवर्ड */}
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

        {/* 7: लॉगिन बटन (यह काम करेगा) */}
        <button onClick={() => handleAuthAction('Login')} style={{ ...btnStyle, background: '#007bff', color: '#fff' }}>Login to RangManch</button>

        {/* 8 & 9: Forgot Password और Sign Up */}
        <p style={{ textAlign: 'center', fontSize: '12px' }} onClick={() => handleAuthAction('Forgot Password')}>Forgot Password?</p>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>Don't have an account? <b onClick={() => navigate('/signup')} style={{ color: 'blue' }}>Sign Up</b></p>
      </div>

      {/* सर्वर की खाली जगह (Server Engine Space) */}
      <div style={{ marginTop: '30px', padding: '15px', border: '2px dashed #007bff', borderRadius: '15px', width: '380px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#555' }}>📡 <b>Server Engine:</b> Waiting for Backend Integration... <br/> (यहाँ आपका Firebase/Node.js सर्वर जुड़ेगा)</p>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' };
const btnStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', background: '#f8f9fa', border: '1px solid #ddd', cursor: 'pointer' };
const topBtnStyle = { padding: '5px 15px', borderRadius: '5px', background: '#000', color: '#fff', border: 'none' };

export default LoginPage;
