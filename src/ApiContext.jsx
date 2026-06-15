import React, { createContext, useContext } from 'react';

const apiConfig = {
  serverUrl: "https://your-server-api.com", // यहाँ अपना असली बैकएंड सर्वर लिंक डालें
  
  // फॉलो बटन का लाइव सर्वर फंक्शन
  handleFollow: async (followerId, followingId) => {
    const response = await fetch(`${apiConfig.serverUrl}/api/follow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ followerId, followingId })
    });
    return response.ok;
  },

  // विज्ञापन/बूस्टेड स्टोरी का सर्वर कॉल
  fetchAds: async () => {
    const response = await fetch(`${apiConfig.serverUrl}/api/ads`);
    return await response.json();
  }
};

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={apiConfig}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
