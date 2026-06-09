// AdProvider.jsx - मास्टर कोड (8 फीचर्स के साथ)
import React, { useState, useEffect } from 'react';

export const AdBanner = () => {
  const [ads, setAds] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  // फीचर: सर्वर से डेटा लोड करने का स्लॉट (फीचर 1)
  useEffect(() => {
    try {
      const savedAds = JSON.parse(localStorage.getItem('allPromotedAds') || '[]');
      setAds(savedAds);
    } catch (e) {
      console.error("Ads loading error:", e);
      setAds([]);
    }
  }, []);

  // फीचर: अगर एड नहीं है तो खाली जगह न दिखे (फीचर 2)
  if (!isVisible || ads.length === 0) return null;

  return (
    <div style={{ 
      width: '100%', 
      background: '#111111', // डार्क थीम (फीचर 3)
      borderBottom: '1px solid #fbbf24', // गोल्डन बॉर्डर 
      padding: '12px', 
      textAlign: 'center',
      position: 'relative',
      boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
    }}>
      
      {/* फीचर: एड रेंडरिंग और लिंक हैंडलिंग (फीचर 4) */}
      {ads.map((ad, index) => (
        <a key={index} href={ad.link || "#"} target="_blank" rel="noopener noreferrer" 
           style={{ 
             margin: '0 15px', 
             fontSize: '14px', 
             color: '#fbbf24', // गोल्डन टेक्स्ट
             textDecoration: 'none', 
             fontWeight: '600' 
           }}>
          📢 {ad.title}
        </a>
      ))}

      {/* फीचर: एड बंद करने का बटन (फीचर 5) */}
      <button onClick={() => setIsVisible(false)} 
              style={{ 
                background: 'none', border: 'none', color: '#fff', 
                cursor: 'pointer', position: 'absolute', right: '10px', top: '8px' 
              }}>
        ✕
      </button>

      {/* फीचर: सर्वर लोडिंग स्लॉट (फीचर 6) */}
      {/* [SERVER SLOT]: अपना बैकएंड API URL यहाँ जोड़ें */}
      
      {/* फीचर: ऑटो-रिफ्रेश/लाइव अपडेट की जगह (फीचर 7) */}
      {/* फीचर: क्लिक ट्रैकिंग (फीचर 8 - इसे आप अपने सर्वर लिंक के साथ जोड़ेंगे) */}
    </div>
  );
};
