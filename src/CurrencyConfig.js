// src/CurrencyConfig.js

export const getCurrencyData = (countryCode) => {
  const settings = {
    'IN': { 
      currency: 'INR', 
      symbol: '₹', 
      price: 199, 
      coins: 2000, 
      commission: 0.30, // 30% आपका हिस्सा
      payoutRate: 0.50  // प्रति कॉइन लड़की की कमाई
    },
    'KW': { 
      currency: 'KWD', 
      symbol: 'د.ك', 
      price: 2.5, 
      coins: 2000, 
      commission: 0.30, 
      payoutRate: 0.001 // कुवैती दीनार के हिसाब से रेट
    },
    'US': { 
      currency: 'USD', 
      symbol: '$', 
      price: 4.99, 
      coins: 2000, 
      commission: 0.30, 
      payoutRate: 0.002 // डॉलर के हिसाब से रेट
    },
  };

  // अगर कोई देश लिस्ट में नहीं है, तो डिफ़ॉल्ट 'US' सेटिंग (Global)
  return settings[countryCode] || settings['US'];
};
