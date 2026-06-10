import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // लॉगिन बटन का असली लॉजिक - जो आपको अगले पेज पर ले जाएगा
  const handleLogin = () => {
    if (email && password) {
      // यहाँ आपका लॉगिन सर्वर से वेरीफाई होगा
      navigate('/profile'); // यह आपको आपके प्रोफाइल पेज पर ले जाएगा
    } else {
      alert('कृपया ईमेल और पासवर्ड भरें!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* 1. प्रीमियम नाम */}
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', color: '#000', marginBottom: '20px' }}>Rang Manch</h1>

      <div style={{ width: '100%', maxWidth: '400px', border: '1px solid #dbdbdb', padding: '20px', borderRadius: '5px' }}>
        
        {/* 2. सर्च और कंट्री सेलेक्टर (11वां फीचर) */}
        <button onClick={() => setShowSearch(!showSearch)} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#f9f9f9', border: '1px solid #dbdbdb', textAlign: 'left' }}>
          📍 सर्च करें अपना देश... ({country})
        </button>
        {showSearch && <input type="text" onChange={(e) => setCountry(e.target.value)} placeholder="देश टाइप करें..." style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />}

        {/* 3 & 4. गूगल और फोन लॉगिन */}
        <button style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#fff', border: '1px solid #dbdbdb' }}>Continue with Google</button>
        <button style={{ width: '100%', padding: '10px', marginBottom: '20px', background: '#fff', border: '1px solid #dbdbdb' }}>Continue with Phone</button>

        {/* 5 & 6. ईमेल और पासवर्ड */}
        <input type="text" placeholder="Email/Username" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />

        {/* 7 & 8. चेकबॉक्स और टर्म्स */}
        <div style={{ marginBottom: '15px', fontSize: '12px' }}>
          <input type="checkbox" /> Remember me | <a href="#">Terms</a>
        </div>

        {/* 9. लॉगिन बटन - जो अब काम करेगा */}
        <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#0095f6', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>

        {/* 10 & 11. फॉरगॉट पासवर्ड और साइन अप */}
        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '13px' }}>
          <p>Forgot Password?</p>
          <p>Don't have an account? <b>Sign Up</b></p>
        </div>
      </div>

      {/* सर्वर सिंक स्लॉट */}
      <div id="server-sync" style={{ marginTop: '20px', fontSize: '10px', color: '#ccc' }}>
        {/* सर्वर लोकेशन सिंक: {country} के लिए सर्वर एक्टिव है */}
      </div>
    </div>
  );
};

export default LoginPage;
