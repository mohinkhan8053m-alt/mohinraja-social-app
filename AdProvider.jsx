// AdProvider.jsx - फाइनल मास्टर कोड
import React from 'react';

export const AdBanner = () => {
  // [SERVER SLOT]: अगर बाद में अपना सर्वर/Database जोड़ना हो, तो यहाँ से डेटा लाएं
  const activeAds = JSON.parse(localStorage.getItem('allPromotedAds') || '[]');
  
  if (activeAds.length === 0) return null;

  return (
    <div style={{ 
      width: '100%', 
      background: '#ffffff', 
      borderBottom: '2px solid #e0e0e0', 
      padding: '10px', 
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      {activeAds.map((ad, index) => (
        <a key={index} href={ad.link} target="_blank" rel="noopener noreferrer" 
           style={{ 
             margin: '0 15px', 
             fontSize: '14px', 
             color: '#1a73e8', 
             textDecoration: 'none', 
             fontWeight: '600' 
           }}>
          📢 {ad.title}
        </a>
      ))}
      {/* बाद में यहाँ आप अपना सर्वर लोड आइकॉन जोड़ सकते हैं */}
    </div>
  );
};
