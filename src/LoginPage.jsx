import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [country, setCountry] = useState('Detecting...');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. ऑटोमैटिक कंट्री डिटेक्शन फीचर
  useEffect(() => {
    const userLang = navigator.language || 'en-IN';
    if (userLang.includes('IN')) setCountry('India');
    else setCountry('Global');
  }, []);

  // लॉगिन फंक्शन (बिना अलर्ट के डायरेक्ट नेविगेशन)
  const handleLogin = () => {
    if (email && password) navigate('/home');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      
      {/* क्लासिक ब्रांडिंग */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '50px', margin: 0, color: '#000' }}>RangManch</h1>
        <p style={{ fontSize: '12px', color: '#666', letterSpacing: '2px' }}>GLOBAL SOCIAL HUB</p>
      </div>

      <div style={{ width: '100%', maxWidth: '380px', padding: '25px', border: '1px solid #f0f0f0', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        
        <div style={{ marginBottom: '15px', padding: '12px', borderRadius: '10px', background: '#f8f9fa', textAlign: 'center', fontWeight: 'bold' }}>
          📍 Location: {country}
        </div>

        {/* डायरेक्ट फंक्शनल बटन */}
        <button onClick={() => window.location.href = 'https://accounts.google.com'} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Continue with Google</button>
        <button onClick={() => window.location.href = 'tel:+91'} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Continue with Phone</button>

        <input type="text" placeholder="Email / Username" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #eee' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #eee' }} />

        {/* नया प्रीमियम नीला लॉगिन बटन */}
        <button onClick={handleLogin} style={{ width: '100%', padding: '15px', background: '#007bff', color: '#fff', borderRadius: '10px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Login to RangManch</button>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px' }}>
          <p onClick={() => alert('Redirecting to reset...')} style={{ cursor: 'pointer' }}>Forgot Password?</p>
          <p>Don't have an account? <b onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: '#007bff' }}>Sign Up</b></p>
        </div>
      </div>
      
      {/* सर्वर स्लॉट (बाकी फीचर्स के लिए नीचे जगह) */}
      <div id="server-slot" style={{ marginTop: '30px', fontSize: '10px', color: '#aaa' }}>
        Server Engine Active: RangManch Core v1.0
      </div>
    </div>
  );
};

export default LoginPage;
