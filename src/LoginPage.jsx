import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('India');
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if(data.country_name) setCountry(data.country_name); })
      .catch(err => console.log("Location detection active."));
  }, []);

  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting to Server for ${actionType}...`);
    setStep(2); 
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(circle at center, #1e1b4b 0%, #000000 100%)', color: 'white', padding: '20px', fontFamily: 'sans-serif'
    }}>
      <h1 style={{fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', color: '#fbbf24', textShadow: '0 0 15px #b45309'}}>RANG MANCH</h1>

      <div style={{
        width: '100%', maxWidth: '380px', background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '30px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
      }}>
        {step === 1 ? (
          <>
            {/* कंट्री सेलेक्टर फीचर */}
            <select value={country} onChange={(e) => setCountry(e.target.value)} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', marginBottom: '15px'}}>
              <option value="India">India (+91)</option>
              <option value="USA">USA (+1)</option>
              <option value="Others">Select Country...</option>
            </select>
            
            <button onClick={() => handleServerAction('SocialAuth')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.9)', color: 'black', fontWeight: 'bold', marginBottom: '15px', border: 'none', cursor: 'pointer'}}>Continue with Gmail/Phone</button>
            
            <div style={{position: 'relative', marginBottom: '15px'}}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '15px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff'}}>{showPassword ? "👁️" : "🙈"}</button>
            </div>

            {/* चेकबॉक्स फीचर्स */}
            <div style={{fontSize: '12px', marginBottom: '20px', color: '#ccc'}}>
              <div><input type="checkbox" /> Remember me</div>
              <div style={{marginTop: '5px'}}><input type="checkbox" required /> I agree to the <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a></div>
            </div>
            
            <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #b45309)', border: 'none', fontWeight: 'bold', color: 'white', cursor: 'pointer'}}>Login</button>
          </>
        ) : (
          /* स्टेप 2: प्रोफाइल सेटअप */
          <div style={{textAlign: 'center'}}>
            <h2 style={{marginBottom: '20px'}}>Complete Profile</h2>
            <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', margin: '0 auto 15px', border: '2px solid #fbbf24'}}></div>
            <input type="text" placeholder="Enter Full Name" style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', marginBottom: '15px', boxSizing: 'border-box'}} />
            <button onClick={() => navigate('/home')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: '#16a34a', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}>Finish Setup</button>
          </div>
        )}
      </div>
      {step === 1 && <p style={{marginTop: '20px', color: '#aaa', cursor: 'pointer'}} onClick={() => alert("Forgot Password?")}>Forgot password?</p>}
    </div>
  );
};

export default LoginPage;
