import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('India');
  const [searchTerm, setSearchTerm] = useState('');

  const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE'];

  // प्रीमियम बटन स्टाइल
  const btnStyle = {
    width: '100%', padding: '14px', margin: '8px 0', borderRadius: '12px',
    border: 'none', backgroundColor: '#000', color: '#fff',
    fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
  };

  const handleLogin = (method) => {
    console.log(`[SERVER]: Logging in with ${method} for ${country}`);
    alert(`Success! Logging in via ${method}. Website is now localized for ${country}.`);
    navigate('/home');
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        {/* प्रीमियम ब्रांड नाम */}
        <h1 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '30px', color: '#000' }}>रंगमंच</h1>

        {/* 1. कंट्री सर्च बार (Live Filter) */}
        <input 
          placeholder="🔍 सर्च करें अपना देश..." 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '8px', marginTop: '5px' }}>
            {countries.filter(c => c.toLowerCase().includes(searchTerm.toLowerCase())).map(c => (
              <div key={c} onClick={() => {setCountry(c); setSearchTerm('');}} style={{ cursor: 'pointer', padding: '5px' }}>{c}</div>
            ))}
          </div>
        )}
        <p style={{ fontSize: '14px', color: '#666' }}>चुना हुआ देश: <b>{country}</b></p>
        
        {/* 2 & 3. सोशल और फ़ोन लॉगिन */}
        <button style={btnStyle} onClick={() => handleLogin('Google')}>Continue with Google</button>
        <button style={btnStyle} onClick={() => handleLogin('Phone')}>Continue with Phone</button>
        
        {/* 4 & 5. ईमेल और पासवर्ड */}
        <input placeholder="Email/Username" style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
        
        {/* 8. Login Button */}
        <button onClick={() => handleLogin('Email')} style={{ ...btnStyle, backgroundColor: '#fbbf24', color: '#000' }}>Login</button>
        
        {/* 9 & 10. Links */}
        <p style={{ cursor: 'pointer', color: '#555', marginTop: '20px' }} onClick={() => navigate('/forgot')}>Forgot Password?</p>
        <p style={{ cursor: 'pointer', color: '#555' }} onClick={() => navigate('/signup')}>Don't have an account? <b>Sign Up</b></p>
      </div>
    </div>
  );
};

export default LoginPage;
