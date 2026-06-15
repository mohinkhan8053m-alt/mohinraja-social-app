import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FeaturePage = () => {
  const { featureName } = useParams(); // यहाँ से URL का नाम मिलता है (जैसे: wallet, live, coins)
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontFamily: 'cursive', color: '#333' }}>
        {featureName ? featureName.replace(/-/g, ' ').toUpperCase() : 'Feature'}
      </h1>
      <p style={{ color: '#666', fontSize: '18px', margin: '20px 0' }}>
        यह फीचर अभी "अंडर-डेवलपमेंट" (Under Development) मोड में है। 🛠️
      </p>
      <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '10px', width: '80%', maxWidth: '300px' }}>
        <p>मोइन भाई, आप जल्द ही यहाँ अपना डेटा देख पाएंगे।</p>
      </div>
      <button 
        onClick={() => navigate('/profile')} 
        style={{ marginTop: '30px', padding: '12px 30px', borderRadius: '25px', border: 'none', background: '#0095f6', color: '#fff', fontSize: '16px', cursor: 'pointer' }}
      >
        वापस प्रोफाइल पर जाएँ
      </button>
    </div>
  );
};

export default FeaturePage;
