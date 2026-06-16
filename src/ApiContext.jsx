import React, { createContext, useContext, useState } from 'react';
import { calculateCommission, getLocalizedPrice, getGlobalPricing } from './PriceHelper.js';
import { getBoostRates } from './BoostConfig.js'; 

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiConfig] = useState({
    freeServer: "https://free-server.com",
    proServer: "https://pro-server.com",

    // === नया: स्पेशल प्रो-सिक्योर चैनल (सिर्फ 3 फाइलों के लिए) ===
    callProSecure: async (data) => {
      const secureData = {
        ...data,
        channelId: "MoinRaja_Pro_Secure_Channel", // यह आईडी सिर्फ प्रो-सिस्टम के लिए है
        timestamp: new Date().toISOString()
      };
      const response = await fetch(`https://pro-server.com/api/pro-secure-call`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(secureData)
      });
      return await response.json();
    },

    // पुराने सभी फीचर्स वैसे ही रखे हैं ताकि कुछ भी न टूटे
    callFreeVideo: async (data) => {
      const response = await fetch(`https://free-server.com/api/free-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    callProVideo: async (data) => {
      if (data.feature?.startsWith('🎁')) {
        const commission = calculateCommission(data.amount || 0);
        data.moinRajaProfit = commission.platformShare;
      }
      const response = await fetch(`https://pro-server.com/api/pro-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    handleProAction: async (data) => {
      const response = await fetch(`https://pro-server.com/api/pro-action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    getPricing: (country, scope, category) => getGlobalPricing(country, scope, category),
    getBoostRates: (country, category) => getBoostRates(country, category),
    getPaymentDetails: (country, amount) => getLocalizedPrice(country, amount),
    
    fetchAds: async () => {
      const response = await fetch(`https://free-server.com/api/ads`);
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
