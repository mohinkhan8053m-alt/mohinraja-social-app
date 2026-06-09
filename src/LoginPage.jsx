import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // 'npm install react-select' जरूरी है
import countryList from 'react-select-country-list';

const LoginPage = () => {
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  // 1. ऑटो-डिटेक्ट लोकेशन (डायरेक्ट चलेगा)
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const found = options.find(c => c.label === data.country_name);
        if (found) setCountry(found);
      });
  }, []);

  const handleAction = (action) => {
    // 2-9. बाकी सभी बटन्स (यहाँ सर्वर स्लॉट छोड़ा है)
    console.log(`[SERVER SLOT]: ${action} triggered.`);
    alert(`${action} के लिए सर्वर से जोड़ें!`);
  };

  const btnStyle = { width: '100%', padding: '12px', borderRadius: '50px', background: 'transparent', border: '1px solid #fbbf24', color: 'white', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '350px', background: '#000', border: '1px solid #fbbf24', borderRadius: '25px', padding: '25px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ color: '#fbbf24', marginBottom: '20px' }}>RANG MANCH</h1>

        {/* 1. कंट्री सर्च (डायरेक्ट चलेगा) */}
        <Select options={options} value={country} onChange={setCountry} placeholder="अपना देश चुनें..." styles={{ control: (base) => ({ ...base, background: 'rgba(255,255,255,0.1)', color: 'white' }), option: (base) => ({ ...base, color: 'black' }) }} />

        <div style={{ margin: '20px 0' }}>
          {/* 3, 4. Google और Phone बटन (सर्वर स्लॉट) */}
          <button onClick={() => handleAction('Google')} style={btnStyle}>Continue with Google</button>
          <button onClick={() => handleAction('Phone')} style={btnStyle}>Continue with Phone</button>
        </div>

        {/* 5, 6. Email और Password (इनपुट) */}
        <input placeholder="Email/Username" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px' }} />

        {/* 7, 8. Remember Me और Terms (डायरेक्ट काम) */}
        <div style={{ fontSize: '11px', textAlign: 'left', marginBottom: '15px' }}>
          <input type="checkbox" /> Remember me | <a href="/terms" style={{ color: '#fbbf24' }}>Terms</a>
        </div>

        {/* 9. Login बटन (सर्वर स्लॉट) */}
        <button onClick={() => handleAction('Login')} style={{ width: '100%', padding: '14px', borderRadius: '50px', background: '#fbbf24', border: 'none', color: 'black', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
