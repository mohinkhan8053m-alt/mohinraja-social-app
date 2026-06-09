import React from 'react';

export const AdBanner = () => {
  // [SERVER SLOT]: यहाँ से विज्ञापन का डेटा लाएं
  const activeAds = JSON.parse(localStorage.getItem('allPromotedAds') || '[]');
  
  // अगर कोई विज्ञापन नहीं है, तो खाली रखें
  if (activeAds.length === 0) return null;

  return (
    <div style={{ 
      width: '100%', 
      background: '#000', // वेबसाइट की थीम के साथ मैच (ब्लैक)
      borderBottom: '1px solid #fbbf24', // गोल्डन बॉर्डर
      padding: '15px 10px', 
      textAlign: 'center',
      position: 'sticky', // ताकि यह टॉप पर फिक्स रहे
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)' // गोल्डन चमक
    }}>
      {activeAds.map((ad, index) => (
        <a 
          key={index} 
          href={ad.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'inline-block',
            margin: '0 15px', 
            fontSize: '15px', 
            color: '#fbbf24', // गोल्डन टेक्स्ट
            textDecoration: 'none', 
            fontWeight: 'bold',
            letterSpacing: '0.8px',
            textTransform: 'uppercase'
          }}
        >
          📢 {ad.title}
        </a>
      ))}
    </div>
  );
};
