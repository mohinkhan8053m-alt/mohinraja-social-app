import React, { useState } from 'react';

const LoginPage = () => {
  const [country, setCountry] = useState('India');

  // कंट्री ऑटो-डिटेक्ट फंक्शन (यह फीचर आपकी वेबसाइट को लोकेशन के हिसाब से एडजस्ट करेगा)
  const detectLocation = () => {
    alert(`आपकी लोकेशन डिटेक्ट की जा रही है... ${country} के हिसाब से सेटिंग्स अपडेट हो रही हैं!`);
    // [SERVER SLOT]: यहाँ सर्वर से यूजर की Geo-location का डेटा फैच होगा
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', background: '#fff' }}>
      
      {/* 1. प्रीमियम टाइटल */}
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', color: '#000', marginBottom: '30px' }}>Rang Manch</h1>

      <div style={{ width: '100%', maxWidth: '400px' }}>
        
        {/* 2. नया बटन: कंट्री ऑटो-डिटेक्ट और कन्वर्टर */}
        <button onClick={detectLocation} style={{ width: '100%', padding: '12px', marginBottom: '20px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          📍 अपनी लोकेशन के हिसाब से सेट करें (Detected: {country})
        </button>

        {/* 3. गूगल और फ़ोन लॉगिन (चालू) */}
        <button onClick={() => alert('Google Login Active!')} style={{ width: '100%', padding: '12px', marginBottom: '10px', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>Continue with Google</button>
        <button onClick={() => alert('Phone Login Active!')} style={{ width: '100%', padding: '12px', marginBottom: '20px', background: '#fff', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>Continue with Phone</button>

        {/* 4. लॉगिन क्रेडेंशियल्स */}
        <input type="text" placeholder="Email/Username" style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />

        <button onClick={() => alert('Login Successful!')} style={{ width: '100%', padding: '12px', background: '#0095f6', border: 'none', borderRadius: '5px', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
      </div>

      {/* [SERVER SLOT]: यहाँ से आपका लॉगिन डेटा और सर्वर सिंक एक्टिव होगा */}
      <div id="server-login-sync" style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>
        {/* सर्वर एंडपॉइंट्स (API) यहाँ जोड़े जाएंगे */}
      </div>
    </div>
  );
};

export default LoginPage;
