import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServer } from './AuthServer.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');

  const handleLogin = async (loginMethod) => {
    const userLocale = navigator.language || 'en-IN';
    // अब Apple ID, Google और Phone सब यहाँ से हैंडल होंगे
    const result = await AuthServer.login({ method: loginMethod, locale: userLocale });
    
    if (result?.success) {
      alert(`Welcome to Rang Manch via ${loginMethod}!`);
      navigate('/home');
    } else {
      alert("Login Error: Please check your connection.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={loginCard}>
        <h1 style={brandTitle}>Rang Manch</h1>
        
        {/* कंट्री सर्च बार */}
        <input type="text" placeholder="सर्च करें अपना देश..." style={inputStyle} />

        {/* 3 मुख्य लॉगिन बटन (Apple, Google, Phone) */}
        <button style={secondaryBtn} onClick={() => handleLogin('google')}>Continue with Google</button>
        <button style={secondaryBtn} onClick={() => handleLogin('phone')}>Continue with Phone</button>
        <button style={appleBtn} onClick={() => handleLogin('apple')}>Continue with Apple</button>

        {/* ईमेल और पासवर्ड */}
        <input type="email" placeholder="Email/Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <div style={optionsRow}>
          <label style={{ fontSize: '12px' }}>
            <input type="checkbox" /> Remember me | <span style={{ color: '#007bff' }}>Terms</span>
          </label>
        </div>

        <button style={blueLoginBtn} onClick={() => handleLogin('email')}>Login</button>
        
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={linkStyle} onClick={() => AuthServer.resetPassword()}>Forgot Password?</p>
          <p style={{ fontSize: '12px' }}>Don't have an account? <b style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</b></p>
        </div>
      </div>
    </div>
  );
};

// स्टाइल्स (Apple बटन के लिए नया स्टाइल)
const appleBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '12px', border: '1px solid #000', background: '#000', color: '#fff', cursor: 'pointer', fontWeight: 'bold' };
// ... बाकी स्टाइल्स वही हैं
const containerStyle = { padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#fcfcfc' };
const loginCard = { width: '100%', maxWidth: '350px', padding: '30px', background: '#fff', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' };
const brandTitle = { textAlign: 'center', fontSize: '32px', fontStyle: 'italic', marginBottom: '25px', color: '#000' };
const inputStyle = { width: '100%', padding: '15px', marginBottom: '12px', borderRadius: '12px', border: '1px solid #eee', boxSizing: 'border-box' };
const secondaryBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '12px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' };
const blueLoginBtn = { width: '100%', padding: '14px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };
const optionsRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' };
const linkStyle = { fontSize: '12px', color: '#555', cursor: 'pointer', marginBottom: '8px' };

export default LoginPage;
