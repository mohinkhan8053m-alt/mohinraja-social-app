import React, { useState, useEffect } from 'react';

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // पूरी दुनिया की भाषा के लिए सपोर्ट (Intl API का उपयोग)
  const getLocalizedContent = (key, lang) => {
    const translations = {
      'hi': { global: 'ग्लोबल बिज़नेस प्रमोशन', local: 'लोकल बिज़नेस', ad: 'विज्ञापन:' },
      'ar': { global: 'ترويج أعمال عالمية', local: 'أعمال محلية', ad: 'إعلان:' },
      'es': { global: 'Promoción de Negocios Globales', local: 'Negocio Local', ad: 'Anuncio:' },
      'en': { global: 'Global Business Promotion', local: 'Local Business', ad: 'Ad:' }
    };
    const langCode = lang.split('-')[0];
    return translations[langCode]?.[key] || translations['en'][key];
  };

  const fetchAds = () => {
    const userLang = navigator.language || 'en';
    const localizedAds = [
      { id: 1, title: getLocalizedContent('global', userLang), link: "/boost-dashboard", reach: "GLOBAL" },
      { id: 2, title: getLocalizedContent('local', userLang), link: "/boost-dashboard", reach: "LOCAL" }
    ];
    setAds(localizedAds);
    setLoading(false);
  };

  // हर 60 सेकंड में एड्स अपडेट करने का फीचर (Auto-refresh)
  useEffect(() => {
    fetchAds();
    const interval = setInterval(fetchAds, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isVisible && (
        <div style={{ 
          backgroundColor: '#000', padding: '12px', borderBottom: '2px solid #deff9a',
          position: 'sticky', top: 0, zIndex: 999 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
            {loading ? (<span style={{ fontSize: '12px' }}>Loading...</span>) : (
              <div style={{ display: 'flex', gap: '20px' }}>
                {ads.map((ad) => (
                  <a key={ad.id} href={ad.link} style={{ textDecoration: 'none', color: '#deff9a', fontSize: '13px', fontWeight: 'bold' }}>
                    [{ad.reach}] {ad.title}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setIsVisible(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '20px' }}>×</button>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
