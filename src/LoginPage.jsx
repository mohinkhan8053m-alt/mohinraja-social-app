import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userCountry, setUserCountry] = useState('Detecting Location...');

  // [SERVER SLOT]: यह फंक्शन यूजर की लोकेशन ऑटोमैटिक पकड़ लेगा
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setUserCountry(`${data.country_name} (${data.country_calling_code})`);
      })
      .catch(() => setUserCountry('Global'));
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <div style={{ width: '90%', maxWidth: '350px', border: '1px solid #fbbf24', padding: '25px', borderRadius: '20px', background: '#111' }}>
        
        <h2 style={{ color: '#fbbf24', textAlign: 'center' }}>Login to Rang Manch</h2>
        
        {/* ऑटो-डिटेक्टेड कंट्री का डिस्प्ले */}
        <div style={{ background: '#222', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '15px', border: '1px solid #fbbf24' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>Detected Location:</p>
          <strong style={{ color: '#fbbf24' }}>{userCountry}</strong>
        </div>

        {/* लॉगिन इनपुट्स */}
        <input placeholder="Email or Phone Number" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }} />
        
        <button 
          onClick={() => console.log(`[SERVER SLOT]: Login with ${userCountry} settings`)}
          style={{ width: '100%', padding: '14px', background: '#fbbf24', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Login
        </button>

        <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '15px' }}>
          Automatic settings applied for {userCountry} currency & ads.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
