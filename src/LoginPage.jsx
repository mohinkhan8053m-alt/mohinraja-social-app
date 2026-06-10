import React, { useState } from 'react';

const LoginPage = () => {
  const [country, setCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // सर्वर पर डेटा भेजने का फंक्शन
  const handleLogin = () => {
    alert(`लॉगिन प्रयास: ${email} | कंट्री: ${country}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff', padding: '20px', fontFamily: 'Arial' }}>
      
      {/* प्रीमियम टाइटल */}
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', color: '#000', marginBottom: '30px' }}>Rang Manch</h1>

      <div style={{ width: '100%', maxWidth: '400px', border: '1px solid #dbdbdb', padding: '20px', borderRadius: '5px' }}>
        
        {/* 1. सर्च बार (कंट्री डिटेक्शन के साथ) */}
        <input type="text" placeholder="सर्च करें अपना देश..." onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />

        {/* 2 & 3. गूगल और फ़ोन लॉगिन */}
        <button onClick={() => alert('Google Login')} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#fff', border: '1px solid #dbdbdb', cursor: 'pointer' }}>Continue with Google</button>
        <button onClick={() => alert('Phone Login')} style={{ width: '100%', padding: '10px', marginBottom: '20px', background: '#fff', border: '1px solid #dbdbdb', cursor: 'pointer' }}>Continue with Phone</button>

        {/* 4 & 5. इनपुट फील्ड्स */}
        <input type="text" placeholder="Email/Username" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #dbdbdb' }} />

        {/* 6 & 7. चेकबॉक्स और टर्म्स लिंक */}
        <div style={{ marginBottom: '15px', fontSize: '12px' }}>
          <input type="checkbox" id="remember" /> 
          <label htmlFor="remember"> Remember me | </label>
          <a href="#" onClick={() => alert('Terms & Conditions')} style={{ color: '#000', textDecoration: 'none' }}>Terms</a>
        </div>

        {/* 8. लॉगिन बटन */}
        <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#0095f6', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>

        {/* 9 & 10. फॉरगॉट पासवर्ड और साइन अप */}
        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '13px' }}>
          <p onClick={() => alert('Forgot Password?')} style={{ cursor: 'pointer' }}>Forgot Password?</p>
          <p>Don't have an account? <span onClick={() => alert('Sign Up')} style={{ color: '#0095f6', cursor: 'pointer', fontWeight: 'bold' }}>Sign Up</span></p>
        </div>
      </div>

      {/* 11. सर्वर और ऑटो-कन्वर्ट स्लॉट (यहाँ आपका डेटा सिंक होगा) */}
      <div id="server-sync" style={{ marginTop: '20px', fontSize: '10px', color: '#ccc' }}>
        {/* सर्वर लोकेशन: API_URL = /api/v1/auth/sync */}
        {/* नोट: वेबसाइट अभी {country} के हिसाब से कंटेंट लोड कर रही है। */}
      </div>
    </div>
  );
};

export default LoginPage;
