import React, { createContext, useContext, useState } from 'react';
import { calculateCommission, getLocalizedPrice, getGlobalPricing } from './PriceHelper.js';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // यहाँ हमने तुम्हारे पुराने फीचर्स को 'state' में सुरक्षित कर दिया है
  const [apiConfig] = useState({
    freeServer: "https://free-server.com",
    proServer: "https://pro-server.com",

    // 1. फ्री वीडियो कॉल - पुराना फीचर सुरक्षित
    callFreeVideo: async (data) => {
      const response = await fetch(`https://free-server.com/api/free-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    // 2. प्रीमियम वीडियो कॉल - पुराना फीचर सुरक्षित
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

    // 3. प्रो मैसेंजर और AI एक्शन्स - पुराना फीचर सुरक्षित
    handleProAction: async (data) => {
      const response = await fetch(`https://pro-server.com/api/pro-action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    },

    // 4. फाइनेंशियल और विज्ञापन हेल्पर - एक भी फीचर कम नहीं हुआ
    getPricing: (country, scope, category) => getGlobalPricing(country, scope, category),
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
