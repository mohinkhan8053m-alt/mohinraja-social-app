import React, { useState } from 'react';

const LoginPage = () => {
  const [location, setLocation] = useState('India (+91)');

  const handleAction = (action) => {
    console.log(`${action} triggered`);
  };

  const btnStyle = { 
    width: '100%', padding: '12px', borderRadius: '50px', 
    background: 'transparent', border: '1px solid #fbbf24', 
    color: 'white', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold' 
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '350px', background: '#000', border: '1px solid #fbbf24', borderRadius: '25px', padding: '25px', color: 'white' }}>
        <h1 style={{ color: '#fbbf24', textAlign: 'center' }}>RANG MANCH</h1>

        {/* 1. कंट्री डिटेक्शन (डायरेक्ट) */}
        <div style={{ background: '#1a1a1a', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '15px' }}>
          <p style={{fontSize: '12px', opacity: '0.6'}}>Detected Location:</p>
          <strong>{location}</strong>
        </div>

        {/* 2 & 3. Google और Phone बटन (सर्वर स्लॉट) */}
        <button onClick={() => handleAction('Google')} style={btnStyle}>Continue with Google</button>
        <button onClick={() => handleAction('Phone')} style={btnStyle}>Continue with Phone</button>

        {/* 4 & 5. Email और Password */}
        <input placeholder="Email/Username" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px', boxSizing: 'border-box' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px', boxSizing: 'border-box' }} />

        {/* 6 & 7. Checkbox और Terms */}
        <div style={{ fontSize: '11px', marginBottom: '15px' }}>
          <input type="checkbox" /> Remember me | <a href="/terms" style={{ color: '#fbbf24' }}>Terms</a>
        </div>

        {/* 8. Login बटन (सर्वर स्लॉट) */}
        <button onClick={() => handleAction('Login')} style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#fbbf24', border: 'none', color: 'black', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>Login</button>
        
        {/* 9. Forgot Password (सर्वर स्लॉट) */}
        <p style={{textAlign: 'center', fontSize: '12px', cursor: 'pointer'}} onClick={() => handleAction('Forgot')}>Forgot Password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
