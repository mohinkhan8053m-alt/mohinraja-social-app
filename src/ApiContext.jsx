import React, { createContext, useContext } from 'react';

// यहाँ अपनी सर्वर IP और API keys सेट करो
const apiConfig = {
  serverUrl: "https://your-server-api.com", // अपनी सर्वर IP यहाँ डालें
  stripeKey: "pk_test_your_key",           // पेमेंट गेटवे की Key
  currency: "INR"                          // जो तुमने CurrencyConfig में रखा होगा
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
