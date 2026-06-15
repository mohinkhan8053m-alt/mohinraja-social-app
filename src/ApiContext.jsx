import React, { createContext, useContext } from 'react';
// अपनी मास्टर फाइल को इम्पोर्ट कर लिया
import { calculateCommission, getLocalizedPrice, getGlobalPricing } from './PriceHelper.js';

const apiConfig = {
  mainServer: "https://your-main-server.com",
  proServer: "https://your-pro-server.com",

  // --- 1. फ्री फीचर्स (कोई बदलाव नहीं) ---
  handleFollow: async (followerId, followingId) => {
    const response = await fetch(`${apiConfig.mainServer}/api/follow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ followerId, followingId })
    });
    return response.ok;
  },

  // --- 2. प्रो वीडियो कॉल (फाइनेंशियल इंजन के साथ) ---
  callProVideo: async (data) => {
    // अगर डेटा में गिफ्टिंग है, तो कमीशन कैलकुलेट करें
    if (data.feature && data.feature.startsWith('🎁')) {
      const commission = calculateCommission(data.amount || 0);
      data.moinRajaProfit = commission.platformShare; // सर्वर को आपका 30% हिस्सा भेजें
    }

    const response = await fetch(`${apiConfig.proServer}/api/pro-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // --- 3. प्रो मैसेंजर एक्शन (AI/Translate आदि) ---
  handleProAction: async (data) => {
    const response = await fetch(`${apiConfig.proServer}/api/pro-action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  // --- 4. फाइनेंशियल हेल्पर मेथड्स (सर्वर कॉल में इस्तेमाल के लिए) ---
  getPricing: (country, scope, category) => getGlobalPricing(country, scope, category),
  getPaymentDetails: (country, amount) => getLocalizedPrice(country, amount),

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
