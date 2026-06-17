import React, { useState, useEffect } from 'react';

// यह फाइल अब पूरी तरह स्वतंत्र है। इसे बस <AdProvider>...</AdProvider> में रैप करना है।
export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const translations = {
    'en': { global: 'Global Enterprise', local: 'Local Business', ad: 'Ad:' },
    'hi': { global: 'ग्लोबल बिज़नेस', local: 'लोकल बिज़नेस', ad: 'विज्ञापन:' },
    'ar': { global: 'أعمال عالمية', local: 'أعمال محلية', ad: 'إعلان:' },
    'es': { global: 'Negocio Global', local: 'Negocio Local', ad: 'Anuncio:' }
  };

  const getAdContent = (key, lang) => {
    const langCode = lang.split('-')[0];
    const data = translations[langCode] || translations['en'];
    return data[key] || key;
  };

  const fetchAds = async () => {
    try {
      setLoading(true);
      const userLang = navigator.language || 'en';
      
      // यहाँ आप अपना सर्वर URL सीधा डाल सकते हैं, Context की जरूरत नहीं
      const localizedAds = [
        { id: 1, title: `${getAdContent('ad', userLang)} ${getAdContent('global', userLang)}`, link: "/boost-dashboard", reach: "GLOBAL" },
        { id: 2, title: `${getAdContent('ad', userLang)} ${getAdContent('local', userLang)}`, link: "/boost-dashboard", reach: "LOCAL" }
      ];
      
      setAds(localizedAds);
    } catch (err) {
      console.error("Ad Loading Error - Server Independent");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []); // अब यहाँ कोई डिपेंडेंसी नहीं है, यह लोड होते ही चलेगा

  return (
    <>
      {isVisible && (
        <div style={{ 
          backgroundColor: '#000', padding: '10px', borderBottom: '2px solid #deff9a',
          position: 'sticky', top: 0, zIndex: 998 // लेआउट से अलग अपना ज़ेड-इंडेक्स
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
            {loading ? (<span style={{ fontSize: '12px' }}>Loading Ads...</span>) : (
              <div>
                {ads.map((ad) => (
                  <a key={ad.id} href={ad.link} style={{ marginRight: '15px', textDecoration: 'none', color: '#deff9a', fontSize: '12px', fontWeight: 'bold' }}>
                    [{ad.reach}] {ad.title}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setIsVisible(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px' }}>×</button>
          </div>
        </div>
      )}
      {children}
    </>
  );
};
