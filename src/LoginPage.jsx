import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthServer } from './AuthServer.js';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = async (method) => {
    // ऑटो-कंट्री कनवर्टर लॉजिक: यह ब्राउज़र की भाषा/क्षेत्र के हिसाब से सेटिंग सेट करेगा
    const userLocale = navigator.language || 'en-IN';
    console.log("Detecting region for:", userLocale);
    
    const result = await AuthServer.login({ method, locale: userLocale });
    if (result?.success) {
      alert("Welcome to Rang Manch! System synced to your region.");
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
        
        {/* कंट्री/लैंग्वेज सर्च बार */}
        <input type="text" placeholder="सर्च करें अपना देश/भाषा..." style={inputStyle} />

        {/* लॉगिन बटन्स (Google, Phone, Apple) */}
        <button style={socialBtn} onClick={() => handleLogin('google')}>Continue with Google</button>
        <button style={socialBtn} onClick={() => handleLogin('phone')}>Continue with Phone</button>
        <button style={appleBtn} onClick={() => handleLogin('apple')}>Continue with Apple</button>

        {/* ईमेल और पासवर्ड इनपुट */}
        <input type="email" placeholder="Email/Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        {/* रिमेंबर मी और टर्म्स */}
        <div style={optionsRow}>
          <label style={{ fontSize: '12px' }}>
            <input type="checkbox" /> Remember me | <span style={{ color: '#007bff' }}>Terms</span>
          </label>
        </div>

        {/* मेन लॉगिन बटन */}
        <button style={blueLoginBtn} onClick={() => handleLogin('email')}>Login</button>
        
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={linkStyle} onClick={() => AuthServer.resetPassword()}>Forgot Password?</p>
          <p style={{ fontSize: '12px' }}>Don't have an account? <b style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</b></p>
        </div>
      </div>
    </div>
  );
};

// प्रीमियम स्टाइल्स
const containerStyle = { padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#fafafa', fontFamily: "'Playfair Display', serif" };
const loginCard = { width: '100%', maxWidth: '350px', padding: '30px', background: '#fff', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' };
const premiumBrandTitle = { textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '30px', color: '#1a1a1a', fontStyle: 'italic' };
const inputStyle = { width: '100%', padding: '14px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box' };
const socialBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #eee', background: '#fff', cursor: 'pointer', fontSize: '14px' };
const appleBtn = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: 'none', background: '#000', color: '#fff', cursor: 'pointer', fontSize: '14px' };
const blueLoginBtn = { width: '100%', padding: '14px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
const optionsRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' };
const linkStyle = { fontSize: '12px', color: '#555', cursor: 'pointer', marginBottom: '8px' };

export default LoginPage;
