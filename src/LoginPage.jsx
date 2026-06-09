import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('India');
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 1. ऑटो-डिटेक्ट लोकेशन फीचर (सुरक्षित है)
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if(data.country_name) setCountry(data.country_name);
      })
      .catch(err => console.log("Location detection active."));
  }, []);

  // [SERVER SLOT]: तुम्हारा ऑथेंटिकेशन और सर्वर लॉजिक (यहाँ कुछ भी डिलीट नहीं हुआ है)
  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting to Server for ${actionType}...`);
    // [SERVER SLOT]: यहाँ तुम्हारा Firebase या API ऑथेंटिकेशन लॉजिक पहले जैसा है
    setStep(2); 
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', background: 'linear-gradient(135deg, #4f46e5, #9333ea, #db2777)', 
      padding: '24px', fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{fontSize: '48px', fontWeight: '800', color: 'white', marginBottom: '40px', textAlign: 'center'}}>RANG MANCH</h1>

      <div style={{width: '100%', maxWidth: '380px', background: 'white', padding: '32px', borderRadius: '24px', boxShadow: '0 20px 25px rgba(0,0,0,0.2)'}}>
        {step === 1 ? (
          <>
            <select value={country} onChange={(e) => setCountry(e.target.value)} style={{width: '100%', padding: '16px', border: '2px solid #e5e7eb', borderRadius: '12px', marginBottom: '16px', fontSize: '16px'}}>
              <option value="India">India (+91)</option>
              <option value="USA">USA (+1)</option>
              <option value="Others">Select Country...</option>
            </select>
            
            <button onClick={() => handleServerAction('SocialAuth')} style={{width: '100%', padding: '16px', border: '2px solid #f3f4f6', borderRadius: '12px', fontWeight: 'bold', color: '#374151', marginBottom: '16px', background: '#f9fafb', cursor: 'pointer'}}>
              Continue with Gmail/Phone
            </button>
            
            <div style={{position: 'relative', marginBottom: '16px'}}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" style={{width: '100%', padding: '16px', border: '2px solid #e5e7eb', borderRadius: '12px', boxSizing: 'border-box'}} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              <button onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px'}}>
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            <div style={{marginBottom: '20px'}}>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280'}}><input type="checkbox" style={{marginRight: '8px'}} /> Remember me</div>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '11px', color: '#6b7280', marginTop: '8px'}}><input type="checkbox" required style={{marginRight: '8px'}} /> <span>I agree to the <a href="/terms" style={{color: '#7c3aed', fontWeight: 'bold'}}>Terms & Conditions</a></span></div>
            </div>

            <button onClick={() => handleServerAction('Login')} style={{width: '100%', padding: '16px', color: 'white', fontWeight: 'bold', borderRadius: '12px', background: '#4f46e5', border: 'none', cursor: 'pointer', fontSize: '16px'}}>
              Login
            </button>
          </>
        ) : (
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Complete Profile</h2>
            <div style={{width: '96px', height: '96px', background: '#e5e7eb', borderRadius: '50%', margin: '0 auto 16px', border: '4px solid #a855f7'}}></div>
            <input type="text" placeholder="Enter Full Name" style={{width: '100%', padding: '16px', border: '2px solid #e5e7eb', borderRadius: '12px', marginBottom: '16px', boxSizing: 'border-box'}} />
            <button onClick={() => navigate('/home')} style={{width: '100%', padding: '16px', color: 'white', fontWeight: 'bold', borderRadius: '12px', background: '#16a34a', border: 'none', cursor: 'pointer', fontSize: '16px'}}>Finish Setup</button>
          </div>
        )}
      </div>
      {step === 1 && <p style={{marginTop: '24px', color: 'white', cursor: 'pointer', textDecoration: 'underline'}} onClick={() => alert("Forgot Password clicked!")}>Forgot password?</p>}
    </div>
  );
};

export default LoginPage;
