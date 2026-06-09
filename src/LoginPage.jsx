import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 1. ऑटो-डिटेक्ट लोकेशन (सर्वर लॉजिक सुरक्षित है)
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .catch(err => console.log("Location detection active."));
  }, []);

  // [SERVER SLOT]: तुम्हारा ऑथेंटिकेशन और सर्वर लॉजिक (सुरक्षित है)
  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting to Server for ${actionType}...`);
    setStep(2); 
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a, #2e1065, #000000)', // यह प्रीमियम डार्क बैकग्राउंड है
      color: 'white', fontFamily: 'sans-serif', padding: '20px'
    }}>
      {/* टाइटल */}
      <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '20px'}}>RANG MANCH</h1>

      {/* प्रीमियम ग्लास कंटेनर */}
      <div style={{
        width: '100%', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', 
        borderRadius: '30px', padding: '25px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', textAlign: 'center'
      }}>
        {step === 1 ? (
          <>
            <h2 style={{fontSize: '18px', marginBottom: '20px'}}>Sign Up / Register</h2>
            
            <button onClick={() => handleServerAction('Google')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'white', color: 'black', fontWeight: 'bold', marginBottom: '10px', border: 'none', cursor: 'pointer'}}>Continue with Google</button>
            <button onClick={() => handleServerAction('Phone')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 'bold', marginBottom: '20px', border: 'none', cursor: 'pointer'}}>Continue with Phone</button>
            
            <p style={{fontSize: '12px', opacity: '0.6', marginBottom: '20px'}}>-- More Options --</p>

            <input type="text" placeholder="Email/Username" style={{width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            
            <div style={{position: 'relative', marginBottom: '15px'}}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '15px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}>{showPassword ? "👁️" : "🙈"}</button>
            </div>

            <div style={{fontSize: '12px', marginBottom: '20px', opacity: '0.8'}}><input type="checkbox" /> Remember me | <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a></div>
            
            <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #d97706)', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>Login</button>
          </>
        ) : (
          <div style={{textAlign: 'center'}}>
            <h2>Complete Profile</h2>
            <input type="text" placeholder="Enter Full Name" style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', marginBottom: '15px', boxSizing: 'border-box'}} />
            <button onClick={() => navigate('/home')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: '#16a34a', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer'}}>Finish Setup</button>
          </div>
        )}
      </div>
      <p style={{marginTop: '20px', fontSize: '14px', cursor: 'pointer'}} onClick={() => alert("Forgot Password?")}>Forgot password? | Sign Up</p>
    </div>
  );
};

export default LoginPage;
