import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  // 11 फीचर्स का स्टेट मैनेजमेंट
  const [country, setCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCountry, setShowCountry] = useState(false);

  // लॉगिन फंक्शन - जो सीधे Home पेज पर ले जाएगा
  const handleLogin = () => {
    if (email && password) {
      navigate('/home'); // मास्टर नेविगेशन
    } else {
      alert('कृपया अपनी जानकारी भरें!');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#fff', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      
      {/* प्रीमियम ब्रांड नाम - स्टाइल वही जो आपने चाहा था */}
      <h1 style={{ 
        fontFamily: 'cursive', 
        fontSize: '55px', 
        fontWeight: 'bold', 
        color: '#000', 
        marginBottom: '40px',
        textAlign: 'center' 
      }}>RangManch</h1>

      <div style={{ width: '100%', maxWidth: '380px', padding: '25px', border: '1px solid #e5e5e5', borderRadius: '15px' }}>
        
        {/* 1. कंट्री सर्च बटन */}
        <button onClick={() => setShowCountry(!showCountry)} style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', textAlign: 'left', cursor: 'pointer' }}>
          📍 {country}
        </button>
        {showCountry && <input type="text" placeholder="सर्च करें..." onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #000', borderRadius: '5px' }} />}

        {/* 2 & 3. गूगल और फोन लॉगिन */}
        <button style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Continue with Google</button>
        <button style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>Continue with Phone</button>

        {/* 4 & 5. ईमेल और पासवर्ड इनपुट */}
        <input type="text" placeholder="Email/Username" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }} />

        {/* 6 & 7. चेकबॉक्स और टर्म्स लिंक */}
        <div style={{ marginBottom: '20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" /> <span>Remember me</span> | <a href="#" style={{ color: '#0095f6' }}>Terms</a>
        </div>

        {/* 8. मुख्य लॉगिन बटन */}
        <button onClick={handleLogin} style={{ width: '100%', padding: '12px', background: '#000', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>

        {/* 9 & 10. फॉरगॉट और साइन अप */}
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px' }}>
          <p style={{ cursor: 'pointer' }}>Forgot Password?</p>
          <p>Don't have an account? <b style={{ cursor: 'pointer', color: '#0095f6' }}>Sign Up</b></p>
        </div>
      </div>
      
      {/* 11. सर्वर सिंक स्लॉट (नीचे सबसे छोटा, अदृश्य) */}
      <div id="server-slot" style={{ display: 'none' }}></div>
    </div>
  );
};

export default LoginPage;
