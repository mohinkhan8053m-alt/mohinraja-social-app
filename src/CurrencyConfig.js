// src/CurrencyConfig.js

export const getCurrencyData = (countryCode) => {
  const settings = {
    'IN': { 
      currency: 'INR', symbol: '₹', price: 199, coins: 2000, 
      commission: 0.30, // आपका 30% कमीशन
      payoutRate: 0.50,
      giftCommission: 0.30 // गिफ्टिंग पर भी 30% फिक्स
    },
    'KW': { 
      currency: 'KWD', symbol: 'د.ك', price: 2.5, coins: 2000, 
      commission: 0.30, 
      payoutRate: 0.001,
      giftCommission: 0.30 
    },
    'US': { 
      currency: 'USD', symbol: '$', price: 4.99, coins: 2000, 
      commission: 0.30, 
      payoutRate: 0.002,
      giftCommission: 0.30 
    },
    // भविष्य के लिए और भी देश यहाँ जोड़ सकते हैं
    'UAE': { 
      currency: 'AED', symbol: 'د.إ', price: 15.99, coins: 2000, 
      commission: 0.30, 
      payoutRate: 0.003,
      giftCommission: 0.30 
    }
  };

  // डिफॉल्ट सेटिंग (मल्टी-करेंसी सपोर्ट)
  return settings[countryCode] || settings['US'];
};
