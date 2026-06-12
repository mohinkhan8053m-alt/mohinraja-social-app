import React, { useState, useEffect } from 'react';

// यहाँ सेटिंग कॉन्फिगरेशन है - इसे भविष्य में बार-बार नहीं बदलना पड़ेगा
const CONFIG = {
  API_URL: 'YOUR_API_ENDPOINT_FOR_ADS', 
  REFRESH_INTERVAL: 15000, // 15 सेकंड (ज्यादा रिफ्रेश = ज्यादा कमाई)
};

export const AdBanner = () => {
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

  const trackClick = (adId) => {
    console.log(`Click recorded for: ${adId}`);
    // यहाँ आप अपने सर्वर का ट्रैकिंग API कॉल डाल सकते हैं
  };

  if (!isVisible) return null;

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '15px', border: '1px solid #eee', borderRadius: '12px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      
      {/* 1. प्रोमोटेड विज्ञापन लिस्ट (पुराना फीचर) */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        {loading ? (<span>लोड हो रहा है...</span>) : error ? (<span>कोई विज्ञापन नहीं</span>) : (
          ads.map((ad) => (
            <a key={ad.id} href={ad.link} onClick={() => trackClick(ad.id)} style={{ textDecoration: 'none', color: '#333' }}>
              <span style={{ background: '#000', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px' }}>Promoted</span> {ad.title}
            </a>
          ))
        )}
        
        {/* क्लोज बटन */}
        <button onClick={() => setIsVisible(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}>×</button>
      </div>

      {/* 2. सर्वर डेटा स्लॉट (Future-Proof: यहाँ से 34 फीचर्स का डेटा आएगा) */}
      <div id="server-data-slot" style={{ marginTop: '10px', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
        {/* यहाँ भविष्य में सर्वर से सीधे डेटा लोड होगा */}
      </div>
    </div>
  );
};

export default AdBanner;
