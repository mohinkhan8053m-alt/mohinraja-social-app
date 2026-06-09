import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState('India (+91)');
  const [searchTerm, setSearchTerm] = useState('');
  
  const countries = ['India (+91)', 'USA (+1)', 'UK (+44)', 'Canada (+1)', 'UAE (+971)', 'Australia (+61)'];

  // [Feature 9]: ऑटो-कंट्री डिटेक्शन
  useEffect(() => {
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => { if(data.country_name) setCountry(data.country_name); }).catch(() => {});
  }, []);

  const theme = { gold: '#fbbf24', border: '1px solid #fbbf24', inputBg: 'rgba(255, 255, 255, 0.05)' };
  const inputStyle = { width: '100%', padding: '15px', borderRadius: '15px', background: theme.inputBg, border: theme.border, marginBottom: '15px', color: 'white', boxSizing: 'border-box' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '20px', fontFamily: 'serif' }}>
      
      <h1 style={{ color: theme.gold, fontSize: '40px', marginBottom: '30px', textShadow: '0 0 15px #b45309' }}>RANG MANCH</h1>
      
      <div style={{ width: '100%', maxWidth: '350px', background: '#111', border: theme.border, borderRadius: '25px', padding: '30px', color: 'white' }}>
        
        {/* [Feature 3 & 6]: सर्च और कंट्री */}
        <input placeholder="🔍 Search Country..." style={inputStyle} onChange={(e) => setSearchTerm(e.target.value)} />
        <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle}>
          {countries.filter(c => c.toLowerCase().includes(searchTerm.toLowerCase())).map(c => <option key={c} style={{background:'#000'}} value={c}>{c}</option>)}
        </select>
        
        {/* [Feature 1 & 2]: Google & Phone Login */}
        <button style={{...inputStyle, background: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: theme.gold}} onClick={() => console.log('Google Auth')}>Continue with Google</button>
        <button style={{...inputStyle, background: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: theme.gold}} onClick={() => console.log('Phone Auth')}>Continue with Phone</button>
        
        {/* [Feature 7 & 8]: ईमेल और पासवर्ड (साफ-सुथरा) */}
        <input placeholder="Email/Username" style={inputStyle} />
        <div style={{ position: 'relative' }}>
          <input type={showPassword ? "text" : "password"} placeholder="Password" style={inputStyle} />
          <button onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '15px', top: '15px', background: 'none', border: 'none', color: theme.gold, cursor: 'pointer' }}>{showPassword ? "Hide" : "Show"}</button>
        </div>
        
        {/* [Feature 4 & 10]: Remember Me & Terms */}
        <div style={{ fontSize: '12px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <label><input type="checkbox" /> Remember me</label>
          <a href="/terms" style={{ color: theme.gold, textDecoration: 'none' }}>Terms & Conditions</a>
        </div>
        
        {/* [Feature 12]: Login Button (सर्वर की जगह के साथ) */}
        <button onClick={() => navigate('/home')} style={{ width: '100%', padding: '15px', borderRadius: '50px', background: `linear-gradient(to right, ${theme.gold}, #b45309)`, border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Login</button>
        
        {/* [Feature 11]: Forgot Password */}
        <p style={{ marginTop: '20px', fontSize: '12px', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/forgot-password')}>Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
