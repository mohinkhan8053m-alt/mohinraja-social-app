import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-box">
        {/* वेबसाइट का नाम - स्टाइलिश फॉन्ट */}
        <h1 className="brand-name">Rang Manch</h1>

        {/* 1. सर्च बार */}
        <input list="countries" placeholder="सर्च करें अपना देश..." className="input-field" />
        
        {/* 2. Google बटन */}
        <button className="btn-secondary">Continue with Google</button>
        {/* 3. Phone बटन */}
        <button className="btn-secondary">Continue with Phone</button>
        
        {/* 4. Email */}
        <input placeholder="Email/Username" className="input-field" />
        {/* 5. Password */}
        <input type="password" placeholder="Password" className="input-field" />
        
        {/* 6. Remember me | 7. Terms */}
        <div className="options">
          <input type="checkbox" /> Remember me | <a href="/terms">Terms</a>
        </div>

        {/* 8. Login Button */}
        <button onClick={() => navigate('/home')} className="btn-primary">Login</button>
        
        {/* 9. Forgot Password | 10. Sign Up */}
        <p className="link-text" onClick={() => navigate('/forgot')}>Forgot Password?</p>
        <p className="link-text" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default LoginPage;
