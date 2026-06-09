import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('India');
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 1. ऑटो-डिटेक्ट लोकेशन फीचर - सुरक्षित है
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if(data.country_name) setCountry(data.country_name); })
      .catch(err => console.log("Location detection active."));
  }, []);

  // [SERVER SLOT]: ऑथेंटिकेशन और सर्वर लॉजिक - ज्यों का त्यों है
  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting to Server for ${actionType}...`);
    // [SERVER SLOT]: अपना Firebase या API लॉजिक यहाँ जोड़ें
    setStep(2); 
  };

  return (
    <div style={{
      position: 'relative', minHeight: '100vh', background: '#0a0a1a', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif', color: 'white', overflow: 'hidden'
    }}>
      {/* प्रीमियम बैकग्राउंड ग्लो */}
      <div style={{position: 'absolute', width: '300px', height: '300px', background: 'rgba(147, 51, 234, 0.3)', filter: 'blur(100px)', borderRadius: '50%', top: '10%', left: '10%'}}></div>
      <div style={{position: 'absolute', width: '300px', height: '300px', background: 'rgba(219, 39, 119, 0.3)', filter: 'blur(100px)', borderRadius: '50%', bottom: '10%', right: '10%'}}></div>

      <h1 style={{fontSize: '40px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '30px', zIndex: 1}}>RANG MANCH</h1>

      <div style={{
        width: '90%', maxWidth: '380px', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '24px', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)', zIndex: 1
      }}>
        {step === 1 ? (
          <>
            <h2 style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>Sign Up / Register</h2>
            
            <button onClick={() => handleServerAction('SocialAuth')} style={{width: '100%', padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.9)', border: 'none', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer'}}>Continue with Google</button>
            <button onClick={() => handleServerAction('SocialAuth')} style={{width: '100%', padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.7)', border: 'none', fontWeight: 'bold', marginBottom: '15px', cursor: 'pointer'}}>Continue with Phone</button>
            
            <p style={{textAlign: 'center', color: '#888', marginBottom: '15px', fontSize: '14px'}}>-- More Options --</p>

            <input type="text" placeholder="Email/Username" style={{width: '100%', padding: '14px', marginBottom: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', borderRadius: '12px', color: 'white'}} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            
            <div style={{position: 'relative', marginBottom: '12px'}}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" style={{width: '100%', padding: '14px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', borderRadius: '12px', color: 'white'}} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '15px', top: '15px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff'}}>{showPassword ? "👁️" : "🙈"}</button>
            </div>

            <div style={{display: 'flex', alignItems: 'center', fontSize: '12px', color: '#ccc', marginBottom: '15px'}}>
              <input type="checkbox" style={{marginRight: '8px'}} /> Remember me &nbsp; | &nbsp; <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a>
            </div>

            <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '15px', borderRadius: '12px', background: 'linear-gradient(to right, #fbbf24, #d97706)', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'}}>Login</button>
          </>
        ) : (
          <div style={{textAlign: 'center', color: 'white'}}>
            <h2>Complete Profile</h2>
            <div style={{width: '80px', height: '80px', background: '#333', borderRadius: '50%', margin: '15px auto'}}></div>
            <input type="text" placeholder="Enter Full Name" style={{width: '100%', padding: '12px', borderRadius: '10px', marginBottom: '15px', background: '#222', border: 'none', color: 'white'}} />
            <button onClick={() => navigate('/home')} style={{width: '100%', padding: '15px', borderRadius: '12px', background: '#16a34a', border: 'none', color: 'white', fontWeight: 'bold'}}>Finish Setup</button>
          </div>
        )}
      </div>
      <p style={{marginTop: '20px', color: '#aaa', cursor: 'pointer', zIndex: 1}} onClick={() => alert("Forgot Password?")}>Forgot password? | Sign Up</p>
    </div>
  );
};

export default LoginPage;
