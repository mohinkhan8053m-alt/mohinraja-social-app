import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiConfig] = useState({
    // ---------------------------------------------------------
    // मोइन भाई, यहाँ अपनी 'अटर-पटर' फाइलों के लिए सर्वर लिंक डालो
    freeServer: "YOUR_FREE_SERVER_URL_HERE", 
    // ---------------------------------------------------------

    // अब यह फाइलें इसी लिंक का इस्तेमाल करके डेटा सप्लाई करेंगी
    callFreeVideo: async (data) => {
      const response = await fetch(`${apiConfig.freeServer}/api/free-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    fetchAds: async () => {
      const response = await fetch(`${apiConfig.freeServer}/api/ads`);
      return await response.json();
    }
  });

  return (
    <ApiContext.Provider value={apiConfig}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
