import React, { useState, useEffect } from 'react';
import { useApi } from './ApiContext.jsx'; 

export const AdProvider = ({ children }) => {
  const { freeServer } = useApi(); 
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // 1. मल्टी-लैंग्वेज डिक्शनरी (इसे आप और भी भाषाएँ जोड़ सकते हैं)
  const translations = {
    'en': { global: 'Global Enterprise', local: 'Local Business', ad: 'Ad:' },
    'hi': { global: 'ग्लोबल बिज़नेस', local: 'लोकल बिज़नेस', ad: 'विज्ञापन:' },
    'ar': { global: 'أعمال عالمية', local: 'أعمال محلية', ad: 'إعلان:' }, // कुवैत/UAE के लिए
    'es': { global: 'Negocio Global', local: 'Negocio Local', ad: 'Anuncio:' }
  };

  const getAdContent = (key, lang) => {
    // अगर भाषा लिस्ट में है तो वो, वरना डिफ़ॉल्ट इंग्लिश
    const langCode = lang.split('-')[0];
    const data = translations[langCode] || translations['en'];
    return data[key] || key;
  };

  const fetchAds = async () => {
    try {
      const userLang = navigator.language || 'en';
      
      // 2. डायनामिक एड्स जो भाषा के हिसाब से बदलेंगे
      const localizedAds = [
        { 
          id: 1, 
          title: getAdContent('ad', userLang) + " " + getAdContent('global', userLang), 
          link: "/boost-dashboard", 
          reach: "GLOBAL" 
        },
        { 
          id: 2, 
          title: getAdContent('ad', userLang) + " " + getAdContent('local', userLang), 
          link: "/boost-dashboard", 
          reach: "LOCAL" 
        }
      ];
      
      setAds(localizedAds);
    } catch (err) {
      console.error("Ad Loading Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, [freeServer]);

  return (
    <>
      {isVisible && (
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {loading ? (<span>Loading...</span>) : (
              <div>
                {ads.map((ad) => (
                  <a key={ad.id} href={ad.link} style={{ marginRight: '10px', textDecoration: 'none', color: '#333', fontSize: '12px' }}>
                    <b>[{ad.reach}]</b> {ad.title}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setIsVisible(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
