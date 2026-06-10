import React, { useState } from 'react';

export const AdBanner = () => {
  const [ads, setAds] = useState([]); // यहाँ अपना डेटा रखें
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{
      backgroundColor: '#ffffff', // सफेद बैकग्राउंड
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
      {/* 1. विज्ञापनों की लिस्ट */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <a key={index} href={ad.link || "#"} style={{ textDecoration: 'none', color: '#333' }}>
              <span style={{ backgroundColor: '#000', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', marginRight: '5px' }}>Promoted</span>
              {ad.title}
            </a>
          ))
        ) : (
          <span style={{ color: '#888' }}>कोई विज्ञापन उपलब्ध नहीं है</span>
        )}
      </div>

      {/* 2. सर्वर डेटा स्लॉट - यहीं अपना बैकएंड जोड़ें */}
      <div id="server-data-slot">
        {/* अपना API का डेटा यहाँ रेंडर करें */}
      </div>

      {/* 3. क्लोज बटन - प्रीमियम लुक के साथ */}
      <button 
        onClick={() => setIsVisible(false)} 
        style={{
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '20px'
        }}>
        ×
      </button>
    </div>
  );
};
