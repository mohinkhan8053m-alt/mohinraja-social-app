import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// आप 'react-phone-input-2' लाइब्रेरी का इस्तेमाल करें: npm install react-phone-input-2
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '50px', margin: 0 }}>RangManch</h1>
        <p style={{ fontSize: '12px', color: '#666', letterSpacing: '2px' }}>GLOBAL SOCIAL HUB</p>
      </div>

      <div style={{ width: '100%', maxWidth: '380px', padding: '25px', border: '1px solid #f0f0f0', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        
        {/* कंट्री सर्च बार के साथ फोन इनपुट */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '12px', color: '#888' }}>Select Country & Enter Phone</label>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={phone => setPhone(phone)}
            inputStyle={{ width: '100%', padding: '20px 0 20px 45px', borderRadius: '10px' }}
          />
        </div>

        <button style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', background: '#f8f9fa', border: '1px solid #ddd' }}>Continue with Google</button>

        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #eee' }} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #eee' }} />

        <button style={{ width: '100%', padding: '15px', background: '#007bff', color: '#fff', borderRadius: '10px', border: 'none', fontWeight: 'bold' }}>Login to RangManch</button>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px' }}>
          <p style={{ cursor: 'pointer' }}>Forgot Password?</p>
          <p>Don't have an account? <b onClick={() => navigate('/signup')} style={{ color: '#007bff', cursor: 'pointer' }}>Sign Up</b></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
