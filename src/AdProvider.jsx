import React, { useState, useEffect } from 'react';

export const AdBanner = () => {
  const [ads, setAds] = useState([]); 
  const [isVisible, setIsVisible] = useState(true);

  // 1. डेटा लोड करने का फीचर (API के साथ)
  useEffect(() => {
    const fetchAds = () => {
      // यहाँ अपनी सर्वर API का लिंक डालें
      fetch('YOUR_API_ENDPOINT_FOR_ADS')
        .then(res => res.json())
        .then(data => setAds(data))
        .catch(err => console.log("सर्वर से विज्ञापन लोड नहीं हो पाए..."));
    };

    fetchAds();
    // 30 सेकंड में विज्ञापन रिफ्रेश करने का फीचर
    const interval = setInterval(fetchAds, 30000); 
    return () => clearInterval(interval);
  }, []);

  // 2. क्लिक ट्रैकिंग फीचर (कमाई का जरिया)
  const trackClick = (adId) => {
    console.log(`User clicked ad: ${adId}. Server updated!`);
    // यहाँ से तुम सर्वर को बता सकते हो कि ऐड पर क्लिक हुआ है
  };

  if (!isVisible) return null;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '15px 25px',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      margin: '10px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* 3. प्रोमोटेड विज्ञापन लिस्ट */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <a key={index} href={ad.link || "#"} onClick={() => trackClick(ad.id)} style={{ textDecoration: 'none', color: '#333' }}>
              <span style={{ backgroundColor: '#000', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', marginRight: '5px' }}>Promoted</span>
              {ad.title}
            </a>
          ))
        ) : (
          <span style={{ color: '#888' }}>कोई विज्ञापन उपलब्ध नहीं है</span>
        )}
      </div>

      {/* सर्वर डेटा स्लॉट - जहाँ से 34 फीचर्स का डेटा आएगा */}
      <div id="server-data-slot"></div>

      {/* क्लोज बटन */}
      <button 
        onClick={() => setIsVisible(false)} 
        style={{
          background: 'none', border: '1px solid #ccc', borderRadius: '50%',
          width: '30px', height: '30px', cursor: 'pointer', fontSize: '18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px'
        }}>
        ×
      </button>
    </div>
  );
};

export default AdBanner;
