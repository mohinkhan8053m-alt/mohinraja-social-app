import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('India');
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 1. ऑटो-डिटेक्ट लोकेशन फीचर
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if(data.country_name) setCountry(data.country_name);
      })
      .catch(err => console.log("Location detection active."));
  }, []);

  // [SERVER SLOT]: यहाँ से आपका पूरा ऑथेंटिकेशन और सर्वर लॉजिक कंट्रोल होगा
  const handleServerAction = (actionType) => {
    console.log(`[SERVER SLOT]: Connecting to Server for ${actionType}...`);
    // [SERVER SLOT]: यहाँ अपना Firebase या API ऑथेंटिकेशन लॉजिक जोड़ें
    setStep(2); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300 mb-10 drop-shadow-lg tracking-widest">RANG MANCH</h1>

      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl space-y-5 text-white">
        {step === 1 ? (
          <>
            {/* कंट्री सेलेक्टर */}
            <select 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl outline-none text-white"
            >
              <option className="text-black" value="India">India (+91)</option>
              <option className="text-black" value="USA">USA (+1)</option>
              <option className="text-black" value="Others">Select Country...</option>
            </select>
            
            <button onClick={() => handleServerAction('SocialAuth')} className="w-full p-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition">
              Continue with Gmail/Phone
            </button>
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-300" 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            {/* Remember Me और कानूनी चेकबॉक्स */}
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </div>
              {/* कानूनी चेकबॉक्स फीचर */}
              <div className="flex items-center text-[11px]">
                <input type="checkbox" className="mr-2" required /> 
                <span>I agree to the <a href="/terms" className="text-yellow-400 font-bold underline">Terms & Conditions</a></span>
              </div>
            </div>

            <button onClick={() => handleServerAction('Login')} className="w-full p-4 text-black font-bold rounded-xl bg-gradient-to-r from-yellow-500 to-amber-300 shadow-lg hover:scale-105 transition-transform">
              Login
            </button>
          </>
        ) : (
          /* प्रोफाइल सेटअप */
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Complete Profile</h2>
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto border-4 border-yellow-500 cursor-pointer"></div>
            <input type="text" placeholder="Enter Full Name" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl" />
            <button onClick={() => navigate('/home')} className="w-full p-4 text-black font-bold rounded-xl bg-yellow-500">Finish Setup</button>
          </div>
        )}
      </div>
      
      {step === 1 && <p className="mt-6 text-gray-400 cursor-pointer hover:underline">Forgot password?</p>}
    </div>
  );
};

export default LoginPage;
