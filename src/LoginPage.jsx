import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import { AuthServer } from './AuthServer.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const [phone, setPhone] = useState('');

  // कंट्री और भाषा डेटा (सर्च बार के साथ)
  const languageOptions = [{ value: 'en', label: 'English' }, { value: 'hi', label: 'Hindi' }, { value: 'es', label: 'Spanish' }];

  const handleLogin = async () => {
    const result = await AuthServer.login({ phone, remember });
    if (result.success) {
      alert("Login Successful - Connected to Global Server!");
      navigate('/home');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={loginCard}>
        <h2 style={titleStyle}>Login to Global Hub</h2>
        
        {/* ग्लोबल सर्च बार: लैंग्वेज के लिए */}
        <div style={{ marginBottom: '15px' }}>
          <Select options={languageOptions} placeholder="Search Language..." />
        </div>

        {/* फोन नंबर (कंट्री सर्च के साथ) */}
        <PhoneInput country={'in'} inputStyle={inputStyle} enableSearch={true} onChange={setPhone} />
        
        <input type="email" placeholder="Gmail/Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <div style={optionsRow}>
          <label style={{ fontSize: '12px', cursor: 'pointer' }}>
            <input type="checkbox" onChange={() => setRemember(!remember)} /> Remember Me
          </label>
          <span style={linkStyle} onClick={() => AuthServer.resetPassword()}>Forgot Password?</span>
        </div>

        {/* प्रीमियम नीला लॉगिन बटन (Server Ready) */}
        <button style={blueLoginBtn} onClick={handleLogin}>Login</button>
        
        <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
          Don't have an account? <b style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</b>
        </p>
      </div>
    </div>
  );
};

// Styles (Professional & Global)
const containerStyle = { padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f2f5' };
const loginCard = { width: '100%', maxWidth: '350px', padding: '25px', background: '#fff', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' };
const inputStyle = { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box' };
const optionsRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' };
const blueLoginBtn = { width: '100%', padding: '14px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };
const linkStyle = { fontSize: '12px', color: '#007bff', cursor: 'pointer' };
const titleStyle = { textAlign: 'center', marginBottom: '20px' };

export default LoginPage;
