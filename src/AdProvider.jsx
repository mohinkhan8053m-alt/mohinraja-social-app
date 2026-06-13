import React, { useState, useEffect } from 'react';

const CONFIG = {
  API_URL: 'https://api.your-ad-server.com/ads', // यहाँ अपना असली लिंक डालना
  REFRESH_INTERVAL: 15000,
};

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const fetchAds = async () => {
    try {
      // नकली डेटा ताकि कोड चलते समय एरर न दे
      // जब आपका असली API तैयार हो जाए, तो इसे हटाकर असली fetch चला लेना
      setAds([{ id: 1, title: "Global Enterprise Deal", link: "/promote" }]);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
    const interval = setInterval(fetchAds, CONFIG.REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* विज्ञापन वाला हिस्सा */}
      {isVisible && !error && (
        <div style={{ backgroundColor: '#fff', padding: '10px 15px', borderBottom: '1px solid #eee', fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {loading ? (<span>Loading Promoted Content...</span>) : (
              <div>
                {ads.map((ad) => (
                  <a key={ad.id} href={ad.link} style={{ color: '#000', fontWeight: 'bold' }}>
                    <span style={{ background: '#FFD700', padding: '2px 5px', borderRadius: '4px', fontSize: '10px', marginRight: '5px' }}>AD</span>
                    {ad.title}
                  </a>
                ))}
              </div>
            )}
            <button onClick={() => setIsVisible(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
          </div>
        </div>
      )}

      {/* मुख्य वेबसाइट का हिस्सा (यह हमेशा दिखना चाहिए, चाहे ऐड हो या न हो) */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};
