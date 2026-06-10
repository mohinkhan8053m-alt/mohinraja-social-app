import React, { useState, useEffect } from 'react';

export const AdBanner = () => {
  const [ads, setAds] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // यहाँ से आप भविष्य में अपना सर्वर डेटा लाएंगे
    // fetch('YOUR_API_URL').then(...)
  }, []);

  if (!isVisible || ads.length === 0) return null;

  return (
    <div className="premium-ad-banner">
      {/* 1. विज्ञापनों की लिस्ट */}
      {ads.map((ad, index) => (
        <a key={index} href={ad.link || "#"} className="ad-link">
          <span className="ad-badge">Promoted</span>
          {ad.title}
        </a>
      ))}

      {/* 2. सर्वर का मुख्य स्लॉट - यहीं आपको अपना बैकएंड जोड़ना है */}
      <div id="server-data-slot" style={{ display: 'none' }}>
        {/* अपना API का डेटा यहाँ रेंडर करें */}
      </div>

      {/* 3. क्लोज बटन */}
      <button onClick={() => setIsVisible(false)} className="close-btn">×</button>
    </div>
  );
};
