import React, { useState, useEffect } from 'react';
import { useApi } from './ApiContext.jsx'; // इसे जोड़ दिया

export const AdProvider = ({ children }) => {
  const { serverUrl } = useApi(); // अब सर्वर URL आपके Context से आएगा
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const getTranslatedTitle = (title, lang) => {
    const translations = {
      'hi': 'विज्ञापन: ' + title, 
      'es': 'Anuncio: ' + title, 
      'fr': 'Publicité: ' + title
    };
    return translations[lang] || title;
  };

  const fetchAds = async () => {
    try {
      // यहाँ अब हम अपने सर्वर का उपयोग कर रहे हैं
      console.log("Fetching ads from:", serverUrl); 
      
      const userLang = navigator.language ? navigator.language.split('-')[0] : 'en';
      
      const mockAds = [
        { id: 1, title: getTranslatedTitle("Global Enterprise Deal", userLang), link: "/boost-dashboard", reach: "GLOBAL", cost: "Premium" },
        { id: 2, title: getTranslatedTitle("Local Business Offer", userLang), link: "/boost-dashboard", reach: "LOCAL", cost: "Standard" }
      ];
      
      setAds(mockAds);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
    const interval = setInterval(fetchAds, 15000);
    return () => clearInterval(interval);
  }, [serverUrl]); // सर्वर बदलते ही विज्ञापन भी रिफ्रेश होंगे

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {isVisible && !error && (
        <div style={{ backgroundColor: '#fff', padding: '10px 15px', borderBottom: '1px solid #eee', fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {loading ? (<span>Loading Promoted Content...</span>) : (
              <div>
                {ads.map((ad) => (
                  <a key={ad.id} href={ad.link} style={{ color: '#000', fontWeight: 'bold', textDecoration: 'none', marginRight: '10px' }}>
                    <span style={{ background: ad.reach === 'GLOBAL' ? '#FFD700' : '#81ecec', padding: '2px 5px', borderRadius: '4px', fontSize: '10px', marginRight: '5px' }}>
                      {ad.reach}
                    </span>
                    {ad.title}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setIsVisible(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>×</button>
          </div>
        </div>
      )}

      <div style={{ flex: 1 }}>{children}</div>

      <div style={{ padding: '8px', borderTop: '1px dashed #ccc', textAlign: 'center', fontSize: '9px', color: '#999' }}>
        📡 RangManch Engine: Online | Server: {serverUrl}
      </div>
    </div>
  );
};
