import React, { createContext, useContext } from 'react';

const apiConfig = {
  // यहाँ अपने असली सर्वर लिंक डालना
  mainServer: "https://your-main-server.com", // फ्री वाला सर्वर
  proServer: "https://your-pro-server.com",   // प्रो वाला सर्वर

  // 1. फ्री फीचर्स के लिए
  handleFollow: async (followerId, followingId) => {
    const response = await fetch(`${apiConfig.mainServer}/api/follow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ followerId, followingId })
    });
    return response.ok;
  },

  // 2. प्रो वीडियो कॉल के लिए (आपका नया फीचर)
  callProVideo: async (data) => {
    const response = await fetch(`${apiConfig.proServer}/api/pro-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // 3. प्रो मैसेंजर के लिए (AI Translate आदि)
  handleProAction: async (data) => {
    const response = await fetch(`${apiConfig.proServer}/api/pro-action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  fetchAds: async () => {
    const response = await fetch(`${apiConfig.mainServer}/api/ads`);
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
