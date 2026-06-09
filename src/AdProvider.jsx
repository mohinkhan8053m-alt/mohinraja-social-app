import React from 'react';

export const AdBanner = () => {
  // [SERVER SLOT]: विज्ञापन का डेटाबेस यहाँ जुड़ेगा
  const activeAds = JSON.parse(localStorage.getItem('allPromotedAds') || '[]');
  
  if (activeAds.length === 0) return null;

  return (
    <div style={{ 
      width: '100%', 
      background: '#000', 
      borderBottom: '2px solid #fbbf24', 
      padding: '12px', 
      textAlign: 'center',
      position: 'sticky', 
      top: 0,
      zIndex: 9999,
      boxShadow: '0 4px 10px rgba(251, 191, 36, 0.3)' 
    }}>
      {activeAds.map((ad, index) => (
        <a key={index} href={ad.link} target="_blank" rel="noopener noreferrer" 
           style={{ 
             margin: '0 15px', fontSize: '14px', color: '#fbbf24', 
             textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase'
           }}>
          📢 {ad.title}
        </a>
      ))}
    </div>
  );
};
