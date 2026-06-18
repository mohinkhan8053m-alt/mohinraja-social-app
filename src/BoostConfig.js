// BoostConfig.js - ग्लोबल वर्जन
export const getBoostRates = (countryCode, category = 'Standard', context = 'PROFILE_BOOST') => {
  
  // दुनिया की किसी भी करेंसी के लिए डायनामिक डेटा
  const globalRates = {
    'IN': { price: 500, symbol: '₹', tax: 0.18 },
    'US': { price: 10, symbol: '$', tax: 0.08 },
    'KW': { price: 3, symbol: 'KD', tax: 0.05 },
    'AE': { price: 35, symbol: 'AED', tax: 0.05 },
    'DEFAULT': { price: 100, symbol: 'UNIT', tax: 0.10 } // बाकी पूरी दुनिया के लिए
  };

  // देश ढूँढना (अगर लिस्ट में नहीं है तो DEFAULT ले लेगा)
  const baseRate = globalRates[countryCode] || globalRates['DEFAULT'];

  // 1. प्राइसिंग लॉजिक (प्रोफाइल vs कंपनी)
  let finalPrice = (context === 'COMPANY_BOOST') ? baseRate.price * 2.5 : baseRate.price;

  // 2. कैटेगरी लॉजिक
  if (category === 'Premium') finalPrice *= 1.2;

  // 3. टैक्स कैलकुलेशन
  const taxAmount = finalPrice * baseRate.tax;
  const total = finalPrice + taxAmount;

  return {
    ...baseRate,
    price: parseFloat(total.toFixed(2)),
    category,
    context
  };
};
