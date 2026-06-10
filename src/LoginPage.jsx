import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // प्रोफेशनल इनपुट स्टाइल
  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  // प्रोफेशनल बटन स्टाइल
  const btnStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        {/* ब्रांड नाम */}
        <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>RangManch Premium</h1>

        {/* 1. सर्च बार */}
        <input placeholder="सर्च करें अपना देश..." style={inputStyle} />
        
        {/* 2 & 3. सोशल और फ़ोन बटन */}
        <button style={btnStyle} onClick={() => alert('Google login clicked')}>Continue with Google</button>
        <button style={btnStyle} onClick={() => alert('Phone login clicked')}>Continue with Phone</button>
        
        {/* 4 & 5. ईमेल और पासवर्ड */}
        <input placeholder="Email/Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        
        {/* 6 & 7. Remember me और Terms */}
        <div style={{ textAlign: 'left', margin: '10px 0' }}>
          <label>
            <input type="checkbox" /> Remember me
          </label> | <a href="/terms" style={{ color: '#000', marginLeft: '5px' }}>Terms</a>
        </div>

        {/* 8. Login Button */}
        <button onClick={() => navigate('/home')} style={{ ...btnStyle, backgroundColor: '#fbbf24', color: '#000' }}>Login</button>
        
        {/* 9 & 10. Links */}
        <p style={{ cursor: 'pointer', color: '#555' }} onClick={() => navigate('/forgot')}>Forgot Password?</p>
        <p style={{ cursor: 'pointer', color: '#555' }} onClick={() => navigate('/signup')}>Don't have an account? <b>Sign Up</b></p>
      </div>
    </div>
  );
};

export default LoginPage;
