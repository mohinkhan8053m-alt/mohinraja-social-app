import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');

  // सर्वर से चलने वाले बटन (जो वीडियो में क्लिक करने पर अलर्ट दे रहे थे)
  const handleServerAction = (action) => {
    console.log(`${action} triggered`);
    alert(`यह बटन सर्वर से जुड़ेगा: ${action}`);
  };

  // डायरेक्ट चलने वाले बटन (जो पेज बदलेंगे)
  const handleDirectNavigation = () => {
    // यहाँ अपनी उस फाइल का नाम लिखें जहाँ आपको जाना है, जैसे '/home' या '/dashboard'
    navigate('/home'); 
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', padding: '20px', color: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '350px', border: '1px solid #fbbf24', borderRadius: '25px', padding: '25px' }}>
        <h1 style={{ color: '#fbbf24', textAlign: 'center' }}>RANG MANCH</h1>

        {/* 1. सर्च बार (डायरेक्ट - फोन पर टाइप करते ही लिस्ट आएगी) */}
        <input list="countries" placeholder="सर्च करें अपना देश..." onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #fbbf24', color: 'white', marginBottom: '15px', boxSizing: 'border-box' }} />
        <datalist id="countries">
          <option value="India (+91)" /> <option value="USA (+1)" /> <option value="UAE (+971)" /> <option value="UK (+44)" />
        </datalist>

        {/* 2 & 3. सर्वर स्लॉट बटन (Google/Phone) */}
        <button onClick={() => handleServerAction('Google')} style={{ width: '100%', padding: '12px', borderRadius: '50px', background: 'transparent', border: '1px solid #fbbf24', color: 'white', marginBottom: '10px' }}>Continue with Google</button>
        <button onClick={() => handleServerAction('Phone')} style={{ width: '100%', padding: '12px', borderRadius: '50px', background: 'transparent', border: '1px solid #fbbf24', color: 'white', marginBottom: '10px' }}>Continue with Phone</button>
        
        {/* 4, 5, 6. इनपुट और चेकबॉक्स */}
        <input placeholder="Email/Username" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', borderRadius: '50px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px' }} />
        <div style={{ fontSize: '11px', marginBottom: '15px' }}><input type="checkbox" /> Remember me | <a href="/terms" style={{ color: '#fbbf24' }}>Terms</a></div>

        {/* 7. लॉगिन बटन (डायरेक्ट - नेविगेशन के साथ) */}
        <button onClick={handleDirectNavigation} style={{ width: '100%', padding: '14px', borderRadius: '50px', background: '#fbbf24', border: 'none', color: 'black', fontWeight: 'bold' }}>Login</button>
        
        {/* 8 & 9. Forgot Password और Sign Up (डायरेक्ट) */}
        <p style={{textAlign: 'center', fontSize: '12px', cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate('/forgot')}>Forgot Password?</p>
        <p style={{textAlign: 'center', fontSize: '12px', cursor: 'pointer'}} onClick={() => navigate('/signup')}>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default LoginPage;
