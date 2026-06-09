  import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // [SERVER SLOT]: यहाँ अपना बैकएंड या फायरबेस लॉजिक जोड़ें
  const handleAction = (actionName) => {
    console.log(`[SERVER SLOT]: ${actionName} triggered.`);
  };

  const containerStyle = {
    minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    background: 'radial-gradient(circle at 50% 20%, #4c1d95, #1e1b4b, #000000)',
    padding: '20px', fontFamily: 'serif', color: 'white', textAlign: 'center'
  };

  const glassCard = {
    width: '100%', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  };

  const btnStyle = {
    width: '100%', padding: '12px', borderRadius: '50px', border: '1px solid #fbbf24',
    background: 'transparent', color: 'white', marginBottom: '10px', fontWeight: 'bold', cursor: 'pointer'
  };

  const inputStyle = {
    width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', marginBottom: '10px', color: 'white', boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{fontSize: '32px', color: '#fbbf24', marginBottom: '15px', textShadow: '0 0 10px #b45309'}}>RANG MANCH</h1>
      
      <div style={glassCard}>
        <h2 style={{fontSize: '16px', marginBottom: '20px'}}>Sign Up / Register</h2>
        
        {/* 1. Google Button */}
        <button onClick={() => handleAction('Google')} style={btnStyle}>Continue with Google</button>
        {/* 2. Phone Button */}
        <button onClick={() => handleAction('Phone')} style={btnStyle}>Continue with Phone</button>
        
        <p style={{fontSize: '12px', opacity: '0.6', margin: '15px 0'}}>-- More Options --</p>

        {/* 3. Email Input & 4. Password Input */}
        <input placeholder="Email/username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        
        {/* 5. Remember Me & Terms */}
        <div style={{fontSize: '11px', marginBottom: '20px', textAlign: 'left'}}>
          <input type="checkbox" /> Remember me | <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a>
        </div>
        
        {/* 6. Login Button */}
        <button onClick={() => handleAction('Login')} style={{width: '100%', padding: '14px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #b45309)', border: 'none', fontWeight: 'bold', color: 'black', cursor: 'pointer'}}>Login</button>
      </div>

      {/* 7. Bottom Links */}
      <div style={{marginTop: '20px', fontSize: '13px', cursor: 'pointer'}}>
        <p onClick={() => handleAction('Forgot')}>Forgot password?</p>
        <p>Don't have an account? <span onClick={() => handleAction('SignUp')} style={{textDecoration: 'underline'}}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default LoginPage;
