 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('India');
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 1. ऑटो-डिटेक्ट लोकेशन
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if(data.country_name) setCountry(data.country_name); })
      .catch(err => console.log("Location detection active."));
  }, []);

  // [SERVER SLOT]: अपना ऑथेंटिकेशन लॉजिक यहाँ जोड़ें
  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting for ${actionType}...`);
    // [SERVER SLOT]: अपना Firebase या API लॉजिक यहाँ फिट करें
    setStep(2); 
  };

  const inputStyle = { width: '100%', padding: '14px', marginBottom: '15px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', boxSizing: 'border-box' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #1e1b4b 0%, #000000 100%)', color: 'white', padding: '20px', fontFamily: 'serif' }}>
      
      <h1 style={{fontSize: '42px', fontWeight: 'bold', marginBottom: '25px', color: '#fbbf24', textShadow: '0 0 15px #b45309'}}>RANG MANCH</h1>

      <div style={{ width: '100%', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '30px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
        
        {step === 1 ? (
          <>
            {/* फीचर: कंट्री सेलेक्टर */}
            <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle}>
              <option value="India">India (+91)</option>
              <option value="USA">USA (+1)</option>
            </select>

            {/* फीचर: सोशल ऑथेंटिकेशन */}
            <button onClick={() => handleServerAction('SocialAuth')} style={{...inputStyle, background: 'rgba(255,255,255,0.9)', color: 'black', fontWeight: 'bold', cursor: 'pointer'}}>Continue with Gmail/Phone</button>
            
            {/* फीचर: पासवर्ड टॉगल */}
            <div style={{position: 'relative'}}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" style={inputStyle} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '20px', top: '15px', background: 'none', border: 'none', cursor: 'pointer'}}>👁️</button>
            </div>

            {/* फीचर: रिमेंबर मी और टर्म्स */}
            <div style={{fontSize: '12px', marginBottom: '20px', color: '#ccc'}}>
              <input type="checkbox" /> Remember me <br/>
              <input type="checkbox" required /> I agree to the <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a>
            </div>

            {/* लॉगिन बटन */}
            <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '14px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #b45309)', border: 'none', fontWeight: 'bold', color: 'white', cursor: 'pointer'}}>Login</button>
          </>
        ) : (
          /* फीचर: प्रोफाइल सेटअप */
          <div style={{textAlign: 'center'}}>
            <h2 style={{marginBottom: '20px'}}>Complete Profile</h2>
            <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', margin: '0 auto 15px', border: '2px solid #fbbf24'}}></div>
            <input type="text" placeholder="Enter Full Name" style={inputStyle} />
            <button onClick={() => navigate('/home')} style={{width: '100%', padding: '14px', borderRadius: '50px', background: '#16a34a', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}>Finish Setup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
