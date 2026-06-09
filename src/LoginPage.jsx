 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // [SERVER SLOT]: लोकेशन डिटेक्शन और सर्वर लॉजिक सुरक्षित है
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .catch(err => console.log("Location detection active."));
  }, []);

  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: ${actionType} triggered.`);
    setStep(2);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(circle at center, #1e1b4b 0%, #0f172a 100%)', // प्रीमियम डार्क बैकग्राउंड
      color: 'white', padding: '20px', fontFamily: 'Arial, sans-serif'
    }}>
      {/* सुनहरी चमक वाला टाइटल (RANG MANCH) */}
      <h1 style={{
        fontSize: '40px', fontWeight: 'bold', marginBottom: '20px',
        background: 'linear-gradient(to bottom, #fbbf24, #b45309)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
      }}>RANG MANCH</h1>

      {/* प्रीमियम ग्लास कंटेनर */}
      <div style={{
        width: '100%', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '30px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '20px', fontSize: '18px', color: '#e5e7eb'}}>Sign Up / Register</h2>
        
        <button onClick={() => handleServerAction('Google')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: '#f3f4f6', color: 'black', fontWeight: 'bold', marginBottom: '10px', border: 'none', cursor: 'pointer'}}>Continue with Google</button>
        <button onClick={() => handleServerAction('Phone')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 'bold', marginBottom: '20px', border: 'none', cursor: 'pointer'}}>Continue with Phone</button>
        
        <p style={{textAlign: 'center', fontSize: '12px', opacity: '0.5', marginBottom: '20px'}}>-- More Options --</p>

        <input type="text" placeholder="Email/username" style={{width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        
        <div style={{position: 'relative', marginBottom: '15px'}}>
          <input type={showPassword ? "text" : "password"} placeholder="Password" style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '15px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af'}}>{showPassword ? "👁️" : "🙈"}</button>
        </div>

        <div style={{fontSize: '12px', marginBottom: '20px', color: '#9ca3af'}}><input type="checkbox" /> Remember me | <a href="/terms" style={{color: '#fbbf24'}}>Terms & Conditions</a></div>
        
        <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '12px', borderRadius: '50px', background: 'linear-gradient(to right, #fbbf24, #b45309)', border: 'none', fontWeight: 'bold', cursor: 'pointer', color: 'white'}}>Login</button>
      </div>
      
      <p style={{marginTop: '20px', fontSize: '14px', color: '#9ca3af', cursor: 'pointer'}}>Forgot password? | Sign Up</p>
    </div>
  );
};

export default LoginPage;
