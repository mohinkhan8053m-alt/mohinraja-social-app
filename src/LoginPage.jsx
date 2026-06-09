   import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState('India (+91)');
  const [searchTerm, setSearchTerm] = useState('');
  
  const countries = ['India (+91)', 'USA (+1)', 'UK (+44)', 'Canada (+1)', 'UAE (+971)', 'Australia (+61)'];

  // [FEATURE]: ऑटो-कंट्री डिटेक्शन
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if(data.country_name) setCountry(data.country_name); })
      .catch(() => console.log("Manual selection active."));
  }, []);

  // [SERVER SLOT]: अपना ऑथेंटिकेशन और सर्वर लॉजिक यहाँ फिट करें
  const handleAction = (action) => console.log(`[SERVER SLOT]: ${action} action triggered.`);

  const glassStyle = {
    width: '100%', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(15px)', border: '1px solid #fbbf24',
    borderRadius: '25px', padding: '25px', color: 'white', textAlign: 'center'
  };

  const inputStyle = {
    width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(0,0,0,0.3)',
    border: '1px solid #fbbf24', marginBottom: '10px', color: 'white', boxSizing: 'border-box'
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 50% 20%, #4c1d95, #1e1b4b, #000000)', padding: '20px', fontFamily: 'serif'}}>
      <h1 style={{fontSize: '36px', color: '#fbbf24', marginBottom: '20px', textShadow: '0 0 10px #b45309'}}>RANG MANCH</h1>
      
      <div style={glassStyle}>
        <h2 style={{fontSize: '16px', marginBottom: '20px'}}>Sign Up / Register</h2>
        
        {/* [FEATURE]: सर्च-बार और कंट्री सेलेक्टर */}
        <input placeholder="🔍 Search Country..." style={inputStyle} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle}>
          {countries.filter(c => c.toLowerCase().includes(searchTerm.toLowerCase())).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        
        {/* [FEATURE]: सोशल लॉगिन बटन्स */}
        <button style={{...inputStyle, background: 'transparent', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => handleAction('Google')}>Continue with Google</button>
        <button style={{...inputStyle, background: 'transparent', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => handleAction('Phone')}>Continue with Phone</button>
        
        <p style={{fontSize: '12px', opacity: '0.6', margin: '10px 0'}}>-- More Options --</p>

        {/* [FEATURE]: ईमेल और पासवर्ड (टॉगल के साथ) */}
        <input placeholder="Email/username" style={inputStyle} />
        <div style={{position: 'relative'}}>
          <input type={showPassword ? "text" : "password"} placeholder="Password" style={inputStyle} />
          <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '15px', top: '10px', background: 'none', border: 'none', color: '#fbbf24', cursor: 'pointer'}}>👁️</button>
        </div>
        
        {/* [FEATURE]: Remember me & Terms */}
        <div style={{fontSize: '11px', textAlign: 'left', marginBottom: '15px'}}><input type="checkbox" /> Remember me | <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a></div>
        
        {/* [FEATURE]: Login बटन */}
        <button onClick={() => handleAction('Login')} style={{width: '100%', padding: '14px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #b45309)', border: 'none', fontWeight: 'bold', color: 'black', cursor: 'pointer'}}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
