import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. यहाँ से नेविगेशन इंपोर्ट किया

const LoginPage = () => {
  const navigate = useNavigate(); // 2. नेविगेशन को एक्टिवेट किया
  const [country, setCountry] = useState('India');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // लॉगिन बटन का फंक्शन
  const handleLogin = () => {
    if (email && password) {
      alert('लॉगिन सफल! अब प्रोफाइल पेज पर जा रहे हैं...');
      navigate('/profile'); // 3. यही वो जादुई कोड है जो अगले पेज पर ले जाएगा
    } else {
      alert('कृपया ईमेल और पासवर्ड भरें!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff', padding: '20px', fontFamily: 'Arial' }}>
      
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', color: '#000', marginBottom: '30px' }}>Rang Manch</h1>

      <div style={{ width: '100%', maxWidth: '400px', border: '1px solid #dbdbdb', padding: '20px', borderRadius: '5px' }}>
        
        <input type="text" placeholder="सर्च करें अपना देश..." onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />

        <button onClick={() => alert('Google Login')} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#fff', border: '1px solid #dbdbdb', cursor: 'pointer' }}>Continue with Google</button>
        <button onClick={() => alert('Phone Login')} style={{ width: '100%', padding: '10px', marginBottom: '20px', background: '#fff', border: '1px solid #dbdbdb', cursor: 'pointer' }}>Continue with Phone</button>

        <input type="text" placeholder="Email/Username" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #dbdbdb' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #dbdbdb' }} />

        {/* लॉगिन बटन अब काम करेगा */}
        <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#0095f6', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
      </div>

      {/* सर्वर सिंक स्लॉट */}
      <div id="server-sync" style={{ marginTop: '20px', fontSize: '10px', color: '#ccc' }}>
        {/* सर्वर लोकेशन: API_URL = /api/v1/auth/sync */}
      </div>
    </div>
  );
};

export default LoginPage;
