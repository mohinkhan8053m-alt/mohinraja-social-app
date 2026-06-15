import React, { createContext, useContext } from 'react';
import { calculateCommission, getLocalizedPrice, getGlobalPricing } from './PriceHelper.js';

const apiConfig = {
  // फ्री और प्रो सर्वर्स के यूआरएल
  freeServer: "https://free-server.com",
  proServer: "https://pro-server.com",

  // 1. फ्री वीडियो कॉल (फ्री सर्वर का इस्तेमाल)
  callFreeVideo: async (data) => {
    const response = await fetch(`${apiConfig.freeServer}/api/free-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // 2. प्रीमियम/प्रो वीडियो कॉल (प्रो सर्वर का इस्तेमाल)
  callProVideo: async (data) => {
    // प्रीमियम में कमीशन और फाइनेंस इंजन का हिसाब
    if (data.feature?.startsWith('🎁')) {
      const commission = calculateCommission(data.amount || 0);
      data.moinRajaProfit = commission.platformShare;
    }

    const response = await fetch(`${apiConfig.proServer}/api/pro-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // 3. प्रो मैसेंजर और AI एक्शन्स
  handleProAction: async (data) => {
    const response = await fetch(`${apiConfig.proServer}/api/pro-action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // 4. फाइनेंशियल और विज्ञापन हेल्पर
  getPricing: (country, scope, category) => getGlobalPricing(country, scope, category),
  getPaymentDetails: (country, amount) => getLocalizedPrice(country, amount),
  fetchAds: async () => {
    const response = await fetch(`${apiConfig.freeServer}/api/ads`);
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
