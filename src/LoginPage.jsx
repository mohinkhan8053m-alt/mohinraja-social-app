import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useApi } from './ApiContext.jsx'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const { proServer } = useApi(); // मास्टर सर्वर से जुड़े
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 10वां फीचर: ऑटो-लैंग्वेज कन्वर्जन (Geo-Language Logic)
  const getTranslated = (text) => {
    const lang = navigator.language.split('-')[0]; // यूजर की कंट्री भाषा पकड़ी
    const translations = {
      'hi': { login: 'फोन नंबर या जीमेल से लॉगिन करें', btn: 'लॉगिन करें' },
      'en': { login: 'Login with Phone or Email', btn: 'Login' }
    };
    return translations[lang] ? translations[lang][text] : text;
  };

  const handleAuth = (type) => {
    console.log(`📡 Connecting to ${proServer} for ${type}`);
    alert(`Success! Logging in via ${type}...`);
    navigate('/home');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* बटन: ग्लोबल और लोकल */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button style={topBtn}>🌍 GLOBAL</button>
        <button style={topBtn}>LOCAL</button>
      </div>

      <div style={{ width: '100%', maxWidth: '380px', padding: '20px', border: '1px solid #eee', borderRadius: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '18px' }}>{getTranslated('login')}</h2>

        {/* फोन नंबर इनपुट (नया अपडेट) */}
        <PhoneInput country={'in'} value={phone} onChange={setPhone} inputStyle={inputStyle} />
        <p style={{ textAlign: 'center', margin: '10px 0', fontSize: '12px' }}>OR</p>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

        {/* 10 बटन वाला सिस्टम */}
        <button onClick={() => handleAuth('Login')} style={mainBtn}>{getTranslated('btn')}</button>
        <button style={socialBtn} onClick={() => handleAuth('Google')}>Continue with Google</button>
        <button style={socialBtn} onClick={() => handleAuth('Facebook')}>Continue with Facebook</button>
        <button style={socialBtn} onClick={() => handleAuth('Apple')}>Continue with Apple</button>
        
        <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>Forgot Password?</p>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>Don't have account? <b onClick={() => navigate('/signup')} style={{ color: '#007bff' }}>Sign Up</b></p>
      </div>

      {/* सर्वर इंजन एक्टिवेटेड */}
      <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #000', borderRadius: '10px' }}>
        <p style={{ fontSize: '10px' }}>📡 <b>Engine:</b> {proServer ? 'ACTIVE' : 'CONNECTING...'}</p>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc', boxSizing: 'border-box' };
const mainBtn = { width: '100%', padding: '15px', background: '#000', color: '#FFD700', borderRadius: '10px', border: 'none', fontWeight: 'bold', marginBottom: '10px' };
const socialBtn = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '10px', background: '#f8f9fa', border: '1px solid #ddd' };
const topBtn = { padding: '5px 15px', borderRadius: '5px', background: '#000', color: '#fff', border: 'none' };

export default LoginPage;
