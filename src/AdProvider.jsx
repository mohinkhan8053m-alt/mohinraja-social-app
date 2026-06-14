import React, { useState, useEffect } from 'react';

const CONFIG = {
  API_URL: 'https://api.your-ad-server.com/ads', 
  REFRESH_INTERVAL: 15000,
};

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // भाषा बदलने वाला फंक्शन (ऑटो-ट्रांसलेशन)
  const getTranslatedTitle = (title, lang) => {
    // यहाँ बाद में आप Google Translate API लगा सकते हैं
    const translations = {
      'hi': 'विज्ञापन: ' + title, 
      'es': 'Anuncio: ' + title, 
      'fr': 'Publicité: ' + title
    };
    return translations[lang] || title;
  };

  const fetchAds = async () => {
    try {
      // 1. यूजर की भाषा पहचानें (ऑटो-ट्रांसलेशन के लिए)
      const userLang = navigator.language ? navigator.language.split('-')[0] : 'en';
      
      // 2. आपका ओरिजिनल डेटा स्ट्रक्चर + रीजन/कॉस्ट लॉजिक
      const mockAds = [
        { id: 1, title: getTranslatedTitle("Global Enterprise Deal", userLang), link: "/promote", reach: "GLOBAL", cost: "Premium" },
        { id: 2, title: getTranslatedTitle("Local Business Offer", userLang), link: "/promote", reach: "LOCAL", cost: "Standard" }
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
    // 3. पुराना रिफ्रेश फीचर सुरक्षित है
    fetchAds();
    const interval = setInterval(fetchAds, CONFIG.REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* 4. विज्ञापन वाला हिस्सा - सब कुछ पहले जैसा है बस और पावरफुल है */}
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

      {/* मुख्य वेबसाइट का हिस्सा */}
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* सर्वर स्लॉट - आपकी रिक्वेस्ट के मुताबिक यहाँ छोड़ा है */}
      <div style={{ padding: '8px', borderTop: '1px dashed #ccc', textAlign: 'center', fontSize: '9px', color: '#999' }}>
        📡 RangManch Engine: Global Ready | Auto-Translate Active
      </div>
    </div>
  );
};
