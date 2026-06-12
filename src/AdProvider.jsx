import React, { useState, useEffect } from 'react';

// यहाँ सेटिंग कॉन्फिगरेशन है
const CONFIG = {
  API_URL: 'YOUR_API_ENDPOINT_FOR_ADS', 
  REFRESH_INTERVAL: 15000,
};

// नाम बदलकर AdProvider कर दिया है ताकि App.jsx इसे ढूंढ सके
export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const fetchAds = async () => {
    try {
      const response = await fetch(CONFIG.API_URL);
      const data = await response.json();
      setAds(data);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
    const interval = setInterval(fetchAds, CONFIG.REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return <>{children}</>;

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '15px', border: '1px solid #eee', borderRadius: '12px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        {loading ? (<span>लोड हो रहा है...</span>) : error ? (<span>विज्ञापन उपलब्ध नहीं</span>) : (
          ads.map((ad) => (
            <a key={ad.id} href={ad.link} style={{ textDecoration: 'none', color: '#333' }}>
              <span style={{ background: '#000', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>Promoted</span> {ad.title}
            </a>
          ))
        )}
        <button onClick={() => setIsVisible(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}>×</button>
      </div>

      <div id="server-data-slot" style={{ marginTop: '10px', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
        {children}
      </div>
    </div>
  );
};
