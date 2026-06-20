import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServer } from './AuthServer.js';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (method) => {
    // ऑटो-कंट्री/लैंग्वेज डिटेक्शन
    const userLocale = navigator.language || 'en-IN';
    const result = await AuthServer.login({ method, locale: userLocale });
    
    if (result?.success) {
      alert(`Welcome to Rang Manch! System synced.`);
      navigate('/home');
    } else {
      alert("Login Error: Please check your credentials.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={loginCard}>
        {/* प्रीमियम क्लासिक नाम */}
        <h1 style={premiumBrandTitle}>Rang Manch</h1>
        
        {/* देश और भाषा के लिए अलग-अलग सर्च बार */}
        <input type="text" placeholder="सर्च करें अपना देश..." style={inputStyle} />
        <input type="text" placeholder="सर्च करें भाषा..." style={inputStyle} />

        {/* लॉगिन बटन्स (Google, Phone, Apple, Email) */}
        <button style={secondaryBtn} onClick={() => handleLogin('google')}>Continue with Google</button>
        <button style={secondaryBtn} onClick={() => handleLogin('phone')}>Continue with Phone</button>
        <button style={appleBtn} onClick={() => handleLogin('apple')}>Continue with Apple</button>
        <button style={secondaryBtn} onClick={() => handleLogin('email')}>Continue with Email</button>

        {/* ईमेल और पासवर्ड इनपुट */}
        <input type="email" placeholder="Email/Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        {/* Remember me और Terms */}
        <div style={optionsRow}>
          <label style={{ fontSize: '12px' }}>
            <input type="checkbox" /> Remember me | <span style={{ color: '#007bff' }}>Terms</span>
          </label>
        </div>

        {/* मेन लॉगिन बटन (AuthServer से जुड़ा हुआ) */}
        <button style={blueLoginBtn} onClick={() => handleLogin('login')}>Login</button>
        
        {/* फॉरगॉट पासवर्ड और साइन अप */}
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={linkStyle} onClick={() => AuthServer.resetPassword()}>Forgot Password?</p>
          <p style={{ fontSize: '12px' }}>Don't have an account? <b style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</b></p>
        </div>
      </div>
    </div>
  );
};

// स्टाइल्स (प्रीमियम लुक के लिए)
const containerStyle = { padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#fcfcfc' };
const loginCard = { width: '100%', maxWidth: '380px', padding: '30px', background: '#fff', borderRadius: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' };
const premiumBrandTitle = { textAlign: 'center', fontSize: '42px', fontStyle: 'italic', marginBottom: '25px', color: '#000', fontFamily: 'cursive' };
const inputStyle = { width: '100%', padding: '14px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #eee', boxSizing: 'border-box' };
const secondaryBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' };
const appleBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: 'none', background: '#000', color: '#fff', cursor: 'pointer', fontWeight: 'bold' };
const blueLoginBtn = { width: '100%', padding: '14px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
const optionsRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' };
const linkStyle = { fontSize: '12px', color: '#555', cursor: 'pointer', marginBottom: '8px' };

export default LoginPage;
